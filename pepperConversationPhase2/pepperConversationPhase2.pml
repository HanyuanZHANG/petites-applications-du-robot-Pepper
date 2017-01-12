<?xml version="1.0" encoding="UTF-8" ?>
<Package name="pepperConversationPhase2" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="pepperDialogPhase2" src="pepperDialogPhase2/pepperDialogPhase2.dlg" />
    </Dialogs>
    <Resources>
        <File name="pepperdialog" src="pepperdialog.py" />
        <File name="dialog1" src="dialogText/dialog1.txt" />
        <File name="dialog2" src="dialogText/dialog2.txt" />
        <File name="icon" src="icon.png" />
        <File name="dialog3" src="dialogText/dialog3.txt" />
        <File name="InnovationDays" src="html/img/InnovationDays.png" />
    </Resources>
    <Topics>
        <Topic name="pepperDialogPhase2_frf" src="pepperDialogPhase2/pepperDialogPhase2_frf.top" topicName="pepperDialogPhase2" language="fr_FR" />
    </Topics>
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
</Package>
