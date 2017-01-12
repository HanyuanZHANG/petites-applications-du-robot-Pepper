<?xml version="1.0" encoding="UTF-8" ?>
<Package name="pepperConversation_koen" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="PepperDialog" src="PepperDialog/PepperDialog.dlg" />
        <Dialog name="PepperDialog2" src="PepperDialog2/PepperDialog2.dlg" />
        <Dialog name="PepperDialog3" src="PepperDialog3/PepperDialog3.dlg" />
        <Dialog name="PepperDialog4" src="PepperDialog4/PepperDialog4.dlg" />
    </Dialogs>
    <Resources>
        <File name="naopepperdialog" src="naopepperdialog.py" />
        <File name="LeverNao" src="dialogText/LeverNao.txt" />
        <File name="dialog2" src="dialogText/dialog2.txt" />
        <File name="epicsax" src="behavior_1/epicsax.ogg" />
        <File name="Click2-Sebastian-759472264" src="html/Click2-Sebastian-759472264.mp3" />
        <File name="change_screen" src="html/change_screen.ogg" />
        <File name="bootstrap.min" src="html/css/bootstrap.min.css" />
        <File name="styles" src="html/css/styles.css" />
        <File name="styles_orignal" src="html/css/styles_orignal.css" />
        <File name="index" src="html/index.htm" />
        <File name="jquery-1.11.0.min" src="html/js/jquery-1.11.0.min.js" />
        <File name="jquery-2.1.4.min" src="html/js/jquery-2.1.4.min.js" />
        <File name="qimessaging_helper" src="html/js/qimessaging_helper.js" />
        <File name="robotutils.qim1" src="html/js/robotutils.qim1.js" />
        <File name="agenda" src="dialogText/agenda.txt" />
        <File name="loiRobotique" src="dialogText/loiRobotique.txt" />
        <File name="SommaireRobots" src="html/img/SommaireRobots.png" />
        <File name="icon" src="icon.png" />
        <File name="InnovationDays" src="html/img/InnovationDays.png" />
        <File name="Agenda-10janv-robots" src="html/img/Agenda-10janv-robots.png" />
    </Resources>
    <Topics>
        <Topic name="PepperDialog_enu" src="PepperDialog/PepperDialog_enu.top" topicName="PepperDialog" language="en_US" />
        <Topic name="PepperDialog2_frf" src="PepperDialog2/PepperDialog2_frf.top" topicName="PepperDialog2" language="fr_FR" />
        <Topic name="PepperDialog3_frf" src="PepperDialog3/PepperDialog3_frf.top" topicName="PepperDialog3" language="fr_FR" />
        <Topic name="PepperDialog4_frf" src="PepperDialog4/PepperDialog4_frf.top" topicName="PepperDialog4" language="fr_FR" />
    </Topics>
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
</Package>
