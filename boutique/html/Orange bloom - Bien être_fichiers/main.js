$(document).ready(function() {

	// url pour les lampes
	//var $url_lamps = '192.168.1.17';

	// loader
	$("body").queryLoader2({
		backgroundColor: '#444444',
		barColor: '#ff6600',
		barHeight: 3,
		percentage: true,
		fadeOutTime: 0,
		onProgress: loading_progress,
		onComplete: init_page
	});

	function loading_progress(percentage, imagesLoaded, totalImages) {
		if (parseInt(percentage) % 10 === 0) {
			console.log('loading progress ->  ' + Math.floor(percentage) + '% || images loaded : ' + imagesLoaded + '/' + totalImages);
		}
	}

	// Liens vers une page produit
	function getQuerystring(key, default_) {
		if (default_ == null) default_ = "";
		key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
		var qs = regex.exec(window.location.href);
		if (qs == null) return default_;
		else return qs[1];
	}


	// Grid init
	function set_grid_item_size() {
		$ww = window.innerWidth;
		$wh = window.innerHeight;
		$gutter_wdth = 3;
		//console.log('set_grid_item_size() called - ww = '+$ww+' & wh = '+$wh);
		$('video').css('width', $ww).css('height', $wh);
		if ($ww > 1200) {
			// Ecrans avec une largeur supérieure à 600px
			$gi_size = Math.floor(($ww - (12 * $gutter_wdth)) / 6); // si la fenetre fait plus de 600px de large, 6 items par ligne
			$gi_2x2_size = Math.floor(($gi_size * 2) + ($gutter_wdth * 2));
			$('.grid-item-2x2').css('width', $gi_2x2_size + 'px').css('height', $gi_2x2_size + 'px').css('min-height', '0').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
			$gi_1x3_wdth = Math.floor(($gi_size * 3) + ($gutter_wdth * 4));
			$gi_1x3_hght = $gi_size;
			$gi_1x2_wdth = $gi_2x2_size;
			$gw_padding = ($wh - (3 * $gi_size) - (6 * $gutter_wdth)) / 2; // padding de grid wrapper pour centrer verticalement
			$gw_padding = $gw_padding + 'px 0';
			$gw_wdth = (6 * $gi_size) + (12 * $gutter_wdth); // largeur du grid wrapper			
			$grid_layout = "ol";
		} else if ($ww < 1200 && $ww > 600) {
			// Ecrans avec une largeur inférieure à 1200px et supérieure 600px
			$gi_size = Math.floor(($ww - (8 * $gutter_wdth)) / 4); // 4 items par ligne
			$gi_2x2_size = Math.floor(($gi_size * 2) + ($gutter_wdth * 2));
			$gi_1x3_wdth = Math.floor(($gi_size * 3) + ($gutter_wdth * 4));
			$gi_1x3_hght = $gi_size;
			$gi_1x2_wdth = $gi_2x2_size;
			$gw_padding = '0';
			$gw_wdth = (4 * $gi_size) + (8 * $gutter_wdth); // largeur du grid wrapper
			$grid_layout = "om";
		} else {
			// Ecrans avec une largeur inférieure ou égale à 600px
			$gi_size = Math.floor(($ww - (4 * $gutter_wdth)) / 2); // 2 items par ligne
			$gi_2x2_size = Math.floor(($gi_size * 2) + ($gutter_wdth * 2));
			$gi_1x3_wdth = $gi_2x2_size;
			$gi_1x3_hght = Math.floor($gi_size * 0.66);
			$gi_1x2_wdth = $gi_2x2_size;
			$gw_padding = '0';
			$gw_wdth = (2 * $gi_size) + (4 * $gutter_wdth); // largeur du grid wrapper
			$grid_layout = "os";
		}
		$('.grid-item').css('width', $gi_size + 'px').css('height', $gi_size + 'px').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
		$('.grid-wrapper').css('padding', $gw_padding);
		$('.grid-item-1x2').css('width', $gi_1x2_wdth + 'px').css('height', $gi_size + 'px').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
		$('.grid-item-2x1').css('width', $gi_size + 'px').css('height', $gi_1x2_wdth + 'px').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
		$('.grid-item-1x3').css('width', $gi_1x3_wdth + 'px').css('height', $gi_1x3_hght + 'px').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
		$('.grid-wrapper').css('width', $gw_wdth + 'px');
		if ($grid_layout == "ol") {
			//
		} else if ($grid_layout == "om") {
			$('.grid-item-om-2x2, .grid-item-2x2').css('width', $gi_2x2_size + 'px').css('height', $gi_2x2_size + 'px').css('min-height', '0').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
			$('.grid-item-om').css('width', $gi_size + 'px').css('height', $gi_size + 'px').css('margin', $gutter_wdth + 'px').css('min-height', '0');
			$('.grid-item-om-1x2').css('width', $gi_1x2_wdth + 'px').css('height', $gi_size + 'px').css('margin', $gutter_wdth + 'px'); // permet de définir la largeur/hauteur/marge de chaque bloc
		} else {
			$('.grid-item-os-2x2, .grid-item-2x2').css('width', $gi_2x2_size + 'px').css('height', 'auto').css('min-height', $gi_2x2_size + 'px').css('margin', $gutter_wdth + 'px');
			$('.grid-item-os').css('width', $gi_size + 'px').css('height', $gi_size + 'px').css('margin', $gutter_wdth + 'px').css('min-height', '0');
		}
		set_grid_item_order($grid_layout)
	}


	function set_grid_item_order($grid_layout) {

		$('.panel').each(function() {
			var $nb_gi = $(this).find('.grid-wrapper > div').length + 1;
			var $gi_list = new Array();
			for (var i = 1; i < $nb_gi + 1; i++) {
				$gi_list[i] = $(this).find('div[data-' + $grid_layout + '="' + i + '"]').wrap('<div/>').parent().html();
				$(this).find('div[data-' + $grid_layout + '="' + i + '"]').unwrap();
			};
			$(this).find('.grid-wrapper').html('');
			for (var i = 1; i < $gi_list.length + 1; i++) {
				$(this).find('.grid-wrapper').append($gi_list[i]);
			};
			if ($grid_layout == "ol" || $grid_layout == "om") {
				$(this).find('.tlb-item').wrapAll("<div class='fltl' />");
				$(this).find('.tlb-item-1').wrapAll("<div class='fltl' />");
				$(this).find('.tlb-item-2').wrapAll("<div class='fltl' />");
			}
		});

		// bouton menu sur la home
		/*$('.menu-btn').on('click', function() {
			if ($('.grid-wrapper').hasClass('active')) {
				$('.grid-wrapper').removeClass('active');
			} else {
				$('.grid-wrapper').addClass('active');
			}
		});*/

		// liens
		$('div[data-link]').on('click', function() {
			comparateur.location.reload();
			if (!$('body').hasClass('idle')) {
				var $link = $(this).attr('data-link');
				var $timeout = 0;
				var $i = 0;
				var $siblings_array = new Array();
				var $link_grid = $('#' + $link + ' .grid-item, #' + $link + ' .grid-item-1x2, #' + $link + ' .grid-item-2x2, #' + $link + ' .grid-item-2x1, #' + $link + ' .grid-item-1x3, #' + $link + ' .video-player');
				var $link_grid_array = new Array();
				//var $haslamp = $('#'+$link).attr('data-lamp');			
				//lamps($haslamp);
				//------------DEBUT POUR MODULE MAIL--------------------
				renitmail();
				//------------FIN POUR MODULE MAIL--------------------
				if ($grid_layout == "ol") {
					$(this).siblings().each(function() {
						$siblings_array[$i] = $(this);
						$i++;
					});
					var j, x, i = $siblings_array.length;
					while (i) { // ordre aléatoire
						j = parseInt(Math.random() * i);
						x = $siblings_array[--i];
						$siblings_array[i] = $siblings_array[j];
						$siblings_array[j] = x;
					}
					for (var i = $siblings_array.length - 1; i >= 0; i--) {
						$siblings_array[i].doTimeout($timeout, function() {
							$(this).animate({
								opacity: 0
							}, 180);
						});
						$timeout = $timeout + 60;
					};
					$timeout = $timeout + 250;
					$('.panel').doTimeout($timeout, function() {
						$(this).hide();
						$timeout = 0;
						$i = 0;
						$link_grid.css('opacity', 0);
						$('#' + $link).show();
						$link_grid.each(function() {
							$link_grid_array[$i] = $(this);
							$i++;
						});
						j, x, i = $link_grid_array.length;
						while (i) { // ordre aléatoire
							j = parseInt(Math.random() * i);
							x = $link_grid_array[--i];
							$link_grid_array[i] = $link_grid_array[j];
							$link_grid_array[j] = x;
						}
						for (var i = $link_grid_array.length - 1; i >= 0; i--) {
							$link_grid_array[i].doTimeout($timeout, function() {
								$(this).animate({
									opacity: 1
								}, 360);
							});
							$timeout = $timeout + 60;
						};
						window.scrollTo(0, 0); // retour haut de page
						// console.log('panel #' + $link + ' fade in');
						// $timeout = $timeout + 500;
						$('.comparateur, .grid-item, .grid-item-1x2, .grid-item-2x2,.grid-item-2x1,.grid-item-1x3,.video-player, .grid-wrapper > .fltl').doTimeout($timeout, function() {
							$(this).css('opacity', 1);
						});
					});
				} else {
					$('.panel').hide();
					$('#' + $link).show();
					$link_grid = $('#' + $link + ' .grid-item, #' + $link + ' .grid-item-1x2, #' + $link + ' .grid-item-2x2, #' + $link + ' .grid-item-2x1, #' + $link + ' .grid-item-1x3, .grid-wrapper > .fltl').animate({
						opacity: 1
					}, 360);
					window.scrollTo(0, 0); // retour haut de page
					// console.log('panel #' + $link + ' show');
				}
				$('.grid-wrapper').removeClass('active');


				if ($('#' + $link).hasClass('video-wrap')) {
					$('#' + $link + ' > *').animate({
						opacity: 1
					}, 0);
					$('#' + $link + ' > div.mejs-container .mejs-button').trigger('click'); // autoplay
				}
			} else {
				$idleTime = 0;
				idle_time_stop();
			}
		});
		$('div[data-videolink]').on('click', function() {
			var $link = $(this).attr('data-videolink');
			//var $haslamp = $(this).attr('data-lamp');
			//lamps($haslamp);
			location.href = $link;
		});

	}

	/*function lamps($lamplist){
		// #1 : détecteur de mvt
		// #2 : lampe hue / (repeteur)
		// #3 : prise intelligente
		// #4 : Roller Shutter
		// #5 : station netatmo
		// #6 : thermostat nest
		// #7 : détecteur de fumée
		// #8 : détecteur de fuite
		// #9 : caméra
		// #10 : porte clés télécommande
		// #11 : détecteur d'ouverture
		// #12 : Sirène
		// #13 : (base homelive)
		var $v = ",";
		var $lamplisttab = new Array();
		// var $url_lamps = 'http://dev.particules-interactives.fr/clients/orange_homelive_lamps';
		if (typeof $lamplist !== typeof undefined && $lamplist !== false) {		    
			if($lamplist.indexOf($v) != -1){
			    $lamplisttab = $lamplist.split($v);
			}else{
				$lamplisttab[0] = $lamplist;
			}
			var $count_get_requests = 0;

			console.log('lamplist : '+$lamplisttab)
			function get_next_lamp_url(){

			   if($count_get_requests == 0){
			   	$.get($url_lamps+'/off/all', function(ret_data){
					console.log('get next lamp url : done : all off');
					if($lamplisttab.length){
						get_next_lamp_url();
					}
				});			
			   }else{
			   		var $nb_lamp = $lamplisttab.shift(); 
					$.get($url_lamps+'/on/'+$nb_lamp, function(ret_data){
						console.log('get next lamp url : done : '+$nb_lamp);
						if($lamplisttab.length){
							get_next_lamp_url();
						}
					});			
			   }
			   
			   $count_get_requests++;
			}
			get_next_lamp_url(); 

		}else{
			$.get($url_lamps+'/off/all');
		}
	}*/

	function init_page() {
		var $show_panel = '';
		if (getQuerystring('p')) {
			$show_panel = getQuerystring('p');
		} else {
			$show_panel = 'home';
		}
		$(window).resize(function() { // Gestion de la taille des blocs au redimensionnement de la page
			set_grid_item_size();
		});
		$(window).trigger('resize');
		$('#' + $show_panel + ' .grid-wrapper .grid-item, #' + $show_panel + ' .grid-item-2x2, #' + $show_panel + ' .grid-item-1x2, #' + $show_panel + ' .grid-item-2x1, #' + $show_panel + ' .grid-item-1x3').animate({
			opacity: 1
		}, 500, function() {
			$('#' + $show_panel).fadeIn(300);
		});
	}


	// Fonction mail
	var $placeholder_mail = valeurpardefaut;
	var $user_network = false;
	var $xhr = new XMLHttpRequest();
	var $file = "http://cb.orange.fr/boutiques/test.png";
	if(window.location.host === 'dev.particules-interactives.fr'){
		//-- Pour afficher le formulaire sur le serveur Particules
		$file = "http://dev.particules-interactives.fr/clients/orange_bloom_4petales/img/grid_picto_maison.png";
		console.log("SERVEUR DE TEST PARTICULES ["+window.location.host+"] > test de connection sur 'http://dev.particules-interactives.fr/...'");
	}else if(window.location.host === 'merch-digital.com.francetelecom.fr'){
		$file = "http://merch-digital.com.francetelecom.fr/test.png";
	}
	
	var $host = "http://uc-orange.com/";
	if(window.location.host === 'merch-digital.com.francetelecom.fr'){
		$host = "http://merch-digital.com.francetelecom.fr/";
	}else{
		$host = "http://uc-orange.com/";
	}

	var randomNum = Math.round(Math.random() * 10000);			 
	$xhr.open('HEAD', $file + "?rand=" + randomNum, false);
	try {
		$xhr.send();	 
		if ($xhr.status >= 200 && $xhr.status < 304) {
			$user_network = true;
		}
	} catch (e) {}

	if (boutique == "") {
		boutique = "non défini";
	}

	if($user_network){
		$('.grid-item.mailform').each(function(){
			var $petal = $(this).attr('data-petal');
			var $fiche = $(this).attr('data-fiche');
			var $color = $(this).attr('data-color');
			/*var $block_mail = $("<div class='grid-item desktop-only " + $color + "' style='position:relative;' data-ol='3' data-om='9' data-os='9'>" +
				"<div class='maildebase' id='enveloppe_" + $fiche + "' onclick='javascript:popupmail(\"" + $fiche + "\");'>" +
				"<svg style='position:absolute;top:0;' version='1.1'  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='100%' viewBox='0 0 214 214' enable-background='new 0 0 214 214' xml:space='preserve'>" +
				"<path fill='#FFFFFF' d='M107.905,79.572C100.109,79.572,70,54.31,61,47.031v60.843c0,2.084,1.615,4.125,3.699,4.125h84.908 c2.084,0,3.394-2.041,3.394-4.125V46.867c0-0.102,0.202-0.202,0.193-0.301C143.989,54.72,115.521,79.572,107.905,79.572z'/>" +
				"<path fill='#FFFFFF' d='M107.938,77.214c6.203,0,36.192-25.811,44.722-33.105c-0.686-0.944-1.797-2.108-3.054-2.108H64.699 c-1.338,0-2.511,1.245-3.181,2.296C68.46,49.972,101.46,77.214,107.938,77.214z'/>" +
				"</svg>" +
				"<p class='txtmail'>Envoyer cette fiche<br/>par e-mail</p>" +
				"</div>" +
				"<div id='mail_" + $fiche + "' class='divblocmail'>" +
				"<form style='display:block;width:100%;text-align:center;' action='http://uc-orange.com/mail/mail.php' method='post' id='formmail'>" +
				"<p class='alertmail'>adresse mail incorrect</p>" +
				"<p class='mailtxt'>Saisissez votre e-mail:</p><br/><input class='inputmail' type='text' id='inputmail_" + $fiche + "' name='to' value='" + $placeholder_mail + "' onFocus='if (this.value==this.defaultValue) this.value = \"\"; idinputmail=this.id;' onblur='if (this.value==\"\") this.value = this.defaultValue' autocomplete='off'><br>" +
				"<input type='hidden' name='url' value='http://cb.orange.fr/boutiques/applis/" + $petal + "/index.html?p=obj-" + $fiche + "'><br>" +
				"<input type='hidden' name='appli' value='" + $petal + "'><br>" +
				"<input type='hidden' name='fiche' value='" + $fiche + "'><br>" +
				"<input type='hidden' name='idboutique' value='" + boutique + "'>" +
				"<input type='submit' value='Submit'>" +
				"</form>" +
				"</div>" +
				"<div class='divblocmail reponsemail' onclick='javascript:renitmail();'>" +
				"<p class='mailtxt'><br/><br/><br/>Votre mail est envoyé</p>" +
				"</div>" +
				"</div>");*/
				
				var $block_mail = $("<div class='picto-mail' id='pictomail_"+$fiche+"'></div>" + 
				"<div class='maildebase' id='enveloppe_"+$fiche+"' onclick='javascript:maildebase(\""+$fiche+"\");'>" +
					"<p class='txtmail'>Plus d'infos <br>encore ?</p>" +
				"</div>" +
				"<div id='mail_"+$fiche+"' class='divblocmail'>" +
					"<form style='display:block;width:100%;text-align:center;' action='"+$host+"mail/mail.php' method='post' class='formmail'>" +
						"<p class='alertmail'>adresse mail incorrecte</p>" +
						"<p class='mailtxt'>Saisissez votre e-mail:</p><br/>" +
						"<input class='inputmail' type='text' id='inputmail_"+$fiche+"' name='to' value='"+$placeholder_mail+"' onFocus='if (this.value==this.defaultValue) this.value = \"\"; idinputmail=this.id;' onblur='if (this.value==\"\") this.value = this.defaultValue' autocomplete='off'><br>" +
						"<input type='hidden' name='url' value='http://cb.orange.fr/boutiques/applis/"+$petal+"/desktop.html?p=obj-"+$fiche+"'>" +
						"<input type='hidden' name='appli' value='"+$petal+"'>" +
						"<input type='hidden' name='fiche' value='"+$fiche+"'>" +
						"<input type='hidden' name='idboutique' value='"+boutique+"'>" +
						"<input type='submit' value='Envoyer'>" +
					"</form>" +
				"</div>" +
				"<div id='reponse_"+$fiche+"' class='divblocmail reponsemail' onclick='javascript:renitmail();'>" +
					"<p class='mailtxt'>Votre mail est envoyé</p>" +
				"</div>");
			$(this).addClass($color);
			$(this).html($block_mail);
			$block_mail.find('.responsemail').on('click', function(){
				$(".inputmail").val('');
				$('.picto-mail').animate({
					top: '0'
				}, 200, function(){
					$(this).animate({height: '100%'},500);
				}); 
				$(".divblocmail, .alertmail").hide();
				$(".maildebase").show();
			});
		});

		// $('body').on('submit', '#formmail', function(e) {
		$('body').on('submit', '.formmail', function(e) {
			// on empeche de soumettre le formulaire
			e.preventDefault();
			// alert('SUBMIT');
			// on récupère l'objet jquery du formulaire
			var $this = $(this);
			// CODE GG DEBUT ----------------------------------------------
			// valeur du champ email
			var email = $("#" + idinputmail).val();

			if (!validateEmail(email) || email == valeurpardefaut) {
				//alert("Veuillez saisir une adresse email valide");
				$(".alertmail").each(function() {
					this.style.display = "block";
				})
				return false;
			}
			// CODE GG FIN ------------------------------------------------

			$.ajax({
				url: $this.attr('action'), // attribut action ou URL en dur
				type: 'POST', // attribut method ou type en dur
				data: $this.serialize(), // on attribue les données du formulaire directement
				success: function(data) {
					//alert('ok');
					// action a faire en cas de succès
					// exemple : message, etc.
					//$('#reponse').html(data);
			    	console.log('envoi mail : success');
			    	console.log(data);
				},
				error: function() {
					//alert('erreur');
					console.log('envoi mail : error');
				},
				complete: function() {
					//alert('complete');
					/*$(".inputmail").each(function() {
						this.value = this.defaultValue;
					})
					$(".divblocmail").each(function() {
						this.style.display = "none";
					})
					$(".alertmail").each(function() {
						this.style.display = "none";
					})
					$(".reponsemail").each(function() {
						this.style.display = "block";
					})*/
					console.log('envoi mail : complete');
					$(".inputmail").val('');

					$('.picto-mail').animate({
						top: '0'
					}, 200, function(){
						$(this).animate({height: '100%'},500);
					}); 

					$(".divblocmail, .alertmail").hide();
					$(".reponsemail").show();
				}
			});
		});
	}

	function validateEmail(email) {
		var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return regex.test(email);
	}
});

// IDLE TIME
var $idleTime = 0;
var $idleInterval = setInterval(idle_timer_increment, 1000); // 1 seconde
var $idleTimeAnimStart = 90; // 1mn30 ici debut
// var $idleTimeAnimStart = 10;
var $idleTimeAnimInterval = setInterval(function() {
	idle_time_anim_loop()
}, 16000); // 2 sec

var $i = 0;
var $items = new Array();
var $item_count = 0;
var $current = 0;
var $timer = 0;

$(document).keypress(function(e) {
	$idleTime = 0;
	idle_time_stop()
});

$(document).on('click', function(e) {
	$idleTime = 0;
	idle_time_stop();
});

function idle_timer_increment() {
	// $idleTime = $idleTime + 1;
	// var $ww = window.innerWidth;
	// if ($idleTime > $idleTimeAnimStart && $ww > 1200) {
	// 	if (!$('body').hasClass('idle')) {
	// 		idle_time_anim();
	// 	}
	// }
	$idleTime = $idleTime + 1;
	var $ww = window.innerWidth;
	$timer++;
	console.log('timer : '+$timer);
	if ($idleTime > $idleTimeAnimStart && $ww > 1200) {
		if (!$('body').hasClass('idle')) {
			// console.log('#home_idle_txt li length : '+$('#home_idle_txt li').size());
			$item_count = $('#home_idle_txt li').size();
			$i = 0;
			$items = new Array();
			$('#home_idle_txt li').each(function() {
				$items[$i] = $(this);
				$i++;
			});
			idle_time_anim();
		} else{
			if($timer % 4 === 0){

				$('.idle-highlight').find('.highlight-hand').remove();
				$('.idle-highlight').removeClass('idle-highlight');

				var $count = 0;
				var $links = new Array();
				$('#home > .grid-wrapper div[data-link]').each(function() {
					$links[$count] = $(this);
					$count++;
				});
				$count--;
				var $random_item = Math.floor(Math.random() * $count);
				/*if ($random_item==2||$random_item==4){
					$random_item=1;
				}*/
				$links[$random_item].addClass('idle-highlight').append('<div class="highlight-hand"></div>');
				console.log('place random hand : '+$random_item+'/'+$count);
			}
		}
	}else{
		if($('body').hasClass('idle')){
			
		}
	}
}

function idle_time_anim() {
	$('body').addClass('idle');
	$('.panel').hide();
	$('#home').show();
	idle_time_anim_loop();
}

function idle_time_anim_loop() {
	if ($('body').hasClass('idle')) {
		// old
		// var $i = 0;
		// var $items = new Array();
		// $('#home > .grid-wrapper > div[data-link]').each(function() {
		// 	$items[$i] = $(this);
		// 	$i++;
		// });
		// $i--;
		// $('.idle-highlight').find('.highlight-hand').remove();
		// $('.idle-highlight').removeClass('idle-highlight');
		// var $random_item = Math.floor(Math.random() * $i);
		// $items[$random_item].addClass('idle-highlight').append('<div class="highlight-hand"></div>');

		$(".category-bloc .txt-default").animate({
			'top': '-100%'
		}, 500, function(){
			var $txt = $items[$current].html();
			var $words = $items[$current].attr('data-words');
			$current++;
			console.log('txt : '+$txt+' & word : '+$words+' & current : '+$current);
			if($current>$item_count-1){$current=0;}
			$('.word').addClass('hide');
			$('.'+$words).removeClass('hide');
			if($(".category-bloc .txt-newline").length){
				$(".category-bloc .txt-newline").remove();
			}
			$.each($('.'+$words).parent().parent(), function(i, el){
				setTimeout(function(){
					$(el).addClass('flip');							
				},0 + ( i * 100 ));
			});
			var $newline = $('<div class="txt-newline"></div>');
			$(".category-bloc").append($newline);
			$newline.append("<p>"+$txt+"</p>").animate({
				'top': '0'
			},500, function(){
				$(this).delay(5000).animate({
					'top': '-100%'
				},500, function(){
					$('.idle-highlight').find('.highlight-hand').remove();
					$('.idle-highlight').removeClass('idle-highlight');
					$(".category-bloc .txt-default").animate({
						'top': '0'
					}, 500, function(){
						$('.grid-item').removeClass('flip');
						$('.word').addClass('hide');							
					});
				});
			});
		});
	}
}

function idle_time_stop() {
	// $('body').removeClass('idle');
	// $('.idle-highlight').find('.highlight-hand').remove();
	// $('.idle-highlight').removeClass('idle-highlight');
	// clearInterval($idleTimeAnimInterval);
	// $idleTimeAnimInterval = setInterval(function() {
	// 	idle_time_anim_loop()
	// }, 2000);
	$('body').removeClass('idle');
	$('.idle-highlight').find('.highlight-hand').remove();
	$('.idle-highlight').removeClass('idle-highlight');
	$('.grid-item').removeClass('flip');
	$('.word').addClass('hide');
	$('.txt-newline').remove();
	$current = 0;
	$(".category-bloc .txt-default").css('top','0').show();
	clearInterval($idleTimeAnimInterval);
	$idleTimeAnimInterval = setInterval(function() {
		idle_time_anim_loop()
	}, 16000);
}





//=======================================================================================
//                         FONCTION MAIL (début)
//=======================================================================================
var idinputmail = "";
var valeurpardefaut = "adresse@mail.com";
/*if (boutique == "") {
	boutique = "non défini";
}*/
var boutique = boutique || "non défini";

/*function popupmail(name) {
	document.getElementById('mail_' + name).style.display = 'block';
	document.getElementById('enveloppe_' + name).style.display = 'none';
}
function renitmail() {
	$(".inputmail").each(function() {
		this.value = this.defaultValue;
	})
	$(".divblocmail").each(function() {
		this.style.display = "none";
	})
	$(".alertmail").each(function() {
		this.style.display = "none";
	})
	$(".maildebase").each(function() {
		this.style.display = "block";
	})
}
*/
var $list_pictomail = new Array();
var $count_pictomail = 0;
function maildebase($idbloc){
	$('#enveloppe_'+$idbloc).hide(0, function(){
		$('#pictomail_'+$idbloc).animate({
			top: '10%'
		}, 200, function(){
			$(this).animate({height: '18%'},500, function(){
				$('#mail_'+$idbloc).fadeIn(300);
			});
		});   		
		$list_pictomail[$count_pictomail] = $('#pictomail_'+$idbloc);
		$count_pictomail++;
	});
}

function renitmail(){
	$(".inputmail").val('');
	$.each( $list_pictomail, function( $key, $value ) {
		$value.css({top: '0', height: '100%'});	
	});
	$('.divblocmail, .alertmail').hide();
	$('.maildebase').show();
}


/*function testConnection(nompetal, fiche, couleur) {
	var xhr = new XMLHttpRequest();
	// var file = "http://cb.orange.fr/boutiques/test.png";
	var file = "http://dev.particules-interactives.fr/clients/orange_bloom_4petales/img/grid_picto_maison.png";
	// var file = "http://www.google.fr";
	var randomNum = Math.round(Math.random() * 10000);

	xhr.open('HEAD', file + "?rand=" + randomNum, false);

	try {
		xhr.send();
		// alert('xhr.status = '+xhr.status);
		if (xhr.status >= 200 && xhr.status < 304) {
			mesmodulesmail(nompetal, fiche, couleur);
		} else {
			document.write("<div class='grid-item desktop-only' data-ol='3' data-om='9' data-os='9'></div>");
		}
	} catch (e) {
		document.write("<div class='grid-item desktop-only' data-ol='3' data-om='9' data-os='9'></div>");
	}
}

function mesmodulesmail(nompetal, fiche, couleur) {
	alert('mesmodulesmail(' + nompetal + ', ' + fiche + ', ' + couleur + ')');
	if (boutique == "") {
		boutique = "non défini";
	}
	var module_mail = ("<div class='grid-item desktop-only " + couleur + "' style='position:relative;' data-ol='3' data-om='9' data-os='9'>" +
		"<div class='maildebase' id='enveloppe_" + fiche + "' onclick='javascript:popupmail(\"" + fiche + "\");'>" +
		"<svg style='position:absolute;top:0;' version='1.1'  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='100%' viewBox='0 0 214 214' enable-background='new 0 0 214 214' xml:space='preserve'>" +
		"<path fill='#FFFFFF' d='M107.905,79.572C100.109,79.572,70,54.31,61,47.031v60.843c0,2.084,1.615,4.125,3.699,4.125h84.908 c2.084,0,3.394-2.041,3.394-4.125V46.867c0-0.102,0.202-0.202,0.193-0.301C143.989,54.72,115.521,79.572,107.905,79.572z'/>" +
		"<path fill='#FFFFFF' d='M107.938,77.214c6.203,0,36.192-25.811,44.722-33.105c-0.686-0.944-1.797-2.108-3.054-2.108H64.699 c-1.338,0-2.511,1.245-3.181,2.296C68.46,49.972,101.46,77.214,107.938,77.214z'/>" +
		"</svg>" +
		"<p class='txtmail'>Envoyer cette fiche<br/>par e-mail</p>" +
		"</div>" +
		"<div id='mail_" + fiche + "' class='divblocmail'>" +
		"<form style='display:block;width:100%;text-align:center;' action='http://uc-orange.com/mail/mail.php' method='post' id='formmail'>" +
		"<p class='alertmail'>adresse mail incorrect</p>" +
		"<p class='mailtxt'>Saisissez votre e-mail:</p><br/><input class='inputmail' type='text' id='inputmail_" + fiche + "' name='to' value='" + valeurpardefaut + "' onFocus='if (this.value==this.defaultValue) this.value = \"\"; idinputmail=this.id;' onblur='if (this.value==\"\") this.value = this.defaultValue' autocomplete='off'><br>" +
		"<input type='hidden' name='url' value='http://cb.orange.fr/boutiques/applis/" + nompetal + "/index.html?p=obj-" + fiche + "'><br>" +
		"<input type='hidden' name='appli' value='" + nompetal + "'><br>" +
		"<input type='hidden' name='fiche' value='" + fiche + "'><br>" +
		"<input type='hidden' name='idboutique' value='" + boutique + "'>" +
		"<input type='submit' value='Submit'>" +
		"</form>" +
		"</div>" +
		"<div class='divblocmail reponsemail' onclick='javascript:renitmail();'>" +
		"<p class='mailtxt'><br/><br/><br/>Votre mail est envoyé</p>" +
		"</div>" +
		"</div>");
	document.write(module_mail);
}*/

//=======================================================================================
//                         FONCTION MAIL (fin)
//=======================================================================================

// Script Gestion Lampes (ancien script)
// ---------------------

// var _urlLamps = 'http://192.168.1.21/lamp';
// var _urlLamps = 'http://dev.particules-interactives.fr/clients/orange_homelive_lamps';
// var __tabManagedLamps;

// function _etatLamps (pNoLamp, pEtat){
// 	if(pNoLamp === undefined){
// 		pNoLamp = 'all';
// 	}
// 	if(pEtat !== 'on'){
// 		pEtat = 'off';
// 	}
// 	var urlDest = _urlLamps+'/'+pEtat+'/'+pNoLamp;
// 	$.get( urlDest, function() {
// 		console.log( 'Lamp OK : ' + pNoLamp+ ' / '+pEtat);
// 	});
// }

// function _chainEtatLamps (pArrayNoLamp){
// 	__tabManagedLamps = Array.isArray(pArrayNoLamp) ? pArrayNoLamp : null;
// 	_callLamp('INIT');
// }

// function _callLamp(pInit){
// 	var urlDest;
// 	var currentLamp;
// 	if(pInit === 'INIT'){
// 		urlDest = _urlLamps+'/off/all';
// 		console.log( 'Lampes : EXTINCTION DE TOUTES LES LAMPES'+ ' ('+urlDest+')');
// 	}else if(__tabManagedLamps.length > 0) {
// 		currentLamp = __tabManagedLamps.pop();
// 		urlDest = _urlLamps+'/on/'+currentLamp;
// 		console.log( 'Lampe : allume : ' + currentLamp+ ' ('+urlDest+')');
// 	}
// 	if(urlDest !== undefined){
// 		$.ajax({
// 			url: urlDest,
// 			success: _callLamp,
// 			error: _callLamp
// 		});
// 	}
// }