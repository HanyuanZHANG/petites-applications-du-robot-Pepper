<?php
require 'vendor/autoload.php';

// --------------------------------------------------------------- VARIABLES --
// Configuration
// ----------------------------------------------------------------------------
$cfg = [
    'url' => 'http://tiki.merch-orange.com/assets/images/', // Replacer par l'URL des images sur le serveur définitif
    'from_email' => "noreply@merch-orange.com ",
    'from_name' => "Orange - Comparateur d'objets connectés",
    'recipient_hidden' => "guillaume.guiral@gmail.com", // Mettre null si on veut pas de destinaire caché (debug)
    'subject_product' => "Votre fiche produit détaillée de ",
    'subject_selection' => "Votre sélection de produits",
    'messages' => [
        'form_empty' => "Aucun paramètre fourni.",
        'form_partially_empty' => "Certains champs sont vides et/ou manquants.",
        'mail_sent' => "Message envoyé.",
        'mail_not_sent' => "Message non envoyé."
    ]
];

// ----------------------------------------------------------------------------
// Fonctions
// ----------------------------------------------------------------------------
function jsonResponse($data, $code) {
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Content-type: application/json');
    http_response_code($code);
    echo json_encode($data);
}

// ----------------------------------------------------------------------------
// Application
// ----------------------------------------------------------------------------
$_GET = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
$_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

if (isset($_GET['action']) && isset($_GET['type'])) {

    if ($_GET['action'] == 'mail') {

        if ($_GET['type'] == 'product') {

            $values = $_POST;
            $data = array();

            // Si le formulaire est vide, on renvoi une erreur 400
            if (empty($values)) return jsonResponse(array('message' => $cfg['messages']['form_empty']), 400);

            // Si certaines champs sont vides, idem
            if (!isset($values['email']) || !isset($values['products'])) return jsonResponse(array('message' => $cfg['messages']['form_partially_empty']), 400);

            // Assignation des paramètres
            $to = $values['email'];
            $product = $values['products'];

            // Envoi du mail
            $mail = new PHPMailer;

            // Expediteur
            $mail->setFrom($cfg['from_email'], $cfg['from_name']);
            $mail->addReplyTo($cfg['from_email'], $cfg['from_name']);

            // Destinataire
            $mail->addAddress($values['email']);

            // Destinataire caché
            if (!is_null($cfg['recipient_hidden'])) {
                $mail->addBCC($cfg['recipient_hidden']);
            }

            // Config
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';

            // Sujet
            $mail->Subject = $cfg['subject_product'].$product['brand']." ".$product['name'];

            ob_start();

            include 'templates/product.php';

            $mail_body = ob_get_clean();

            // Contenu
            $mail->Body    = $mail_body;
            $mail->AltBody = strip_tags($mail_body);

            if($mail->send()) {
                return jsonResponse(array('message' => $cfg['messages']['mail_sent']), 200);
            } else {
                return jsonResponse(array('message' => $cfg['messages']['mail_not_sent']), 500);
            }

        }

        if ($_GET['type'] == 'selection') {

            $values = $_POST;
            $data = array();

            // Si le formulaire est vide, on renvoi une erreur 400
            if (empty($values)) return jsonResponse(array('message' => $cfg['messages']['form_empty']), 400);

            // Si certaines champs sont vides, idem
            if (!isset($values['email']) || !isset($values['products'])) return jsonResponse(array('message' => $cfg['messages']['form_partially_empty']), 400);

            // Assignation des paramètres
            $to = $values['email'];
            $products = $values['products'];

            // Envoi du mail
            $mail = new PHPMailer;

            // Expediteur
            $mail->setFrom($cfg['from_email'], $cfg['from_name']);
            $mail->addReplyTo($cfg['from_email'], $cfg['from_name']);

            // Destinataire
            $mail->addAddress($values['email']);

            // Destinataire caché
            if (!is_null($cfg['recipient_hidden'])) {
                $mail->addBCC($cfg['recipient_hidden']);
            }

            // Config
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';

            // Sujet
            $mail->Subject = $cfg['subject_selection'];

            ob_start();

            include 'templates/selection.php';

            $mail_body = ob_get_clean();

            // Contenu
            $mail->Body    = $mail_body;
            $mail->AltBody = strip_tags($mail_body);

            if($mail->send()) {
                return jsonResponse(array('message' => $cfg['messages']['mail_sent']), 200);
            } else {
                return jsonResponse(array('message' => $cfg['messages']['mail_not_sent']), 500);
            }

        }

    }

}

return false;