<?xml version="1.0" encoding="UTF-8" ?>
<Package name="pepperConversationPhase3" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="conclusion" src="conclusion/conclusion.dlg" />
    </Dialogs>
    <Resources>
        <File name="pepperdialog" src="pepperdialog.py" />
        <File name="dialog1" src="dialogText/dialog1.txt" />
        <File name="wearethechampionscut" src="wearethechampionscut.mp3" />
        <File name="vacuum1" src="behavior_1/vacuum1.ogg" />
        <File name="epicsax" src="behavior_1/epicsax.ogg" />
        <File name="dialog2" src="dialogText/dialog2.txt" />
        <File name="icon" src="icon.png" />
        <File name="InnovationDays" src="html/img/InnovationDays.png" />
    </Resources>
    <Topics>
        <Topic name="conclusion_frf" src="conclusion/conclusion_frf.top" topicName="conclusion" language="fr_FR" />
    </Topics>
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
</Package>
