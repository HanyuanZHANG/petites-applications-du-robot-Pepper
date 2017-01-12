<?xml version="1.0" encoding="UTF-8" ?>
<Package name="naoConversation" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="pythonDialog" src="pythonDialog/pythonDialog.dlg" />
    </Dialogs>
    <Resources>
        <File name="serveur" src="serveur.py" />
        <File name="serveur_old" src="serveur_old.py" />
        <File name="10 - Bee Gees - Night Fever" src="behavior_1/10 - Bee Gees - Night Fever.mp3" />
    </Resources>
    <Topics>
        <Topic name="pythonDialog_enu" src="pythonDialog/pythonDialog_enu.top" topicName="pythonDialog" language="en_US" />
        <Topic name="pythonDialog_frf" src="pythonDialog/pythonDialog_frf.top" topicName="pythonDialog" language="fr_FR" />
    </Topics>
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
</Package>
