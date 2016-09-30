<?xml version="1.0" encoding="UTF-8" ?>
<Package name="lundi" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="boutique" src="boutique/boutique.dlg" />
        <Dialog name="ExampleDialog" src="behavior_1/ExampleDialog/ExampleDialog.dlg" />
    </Dialogs>
    <Resources />
    <Topics>
        <Topic name="boutique_enu" src="boutique/boutique_enu.top" topicName="boutique" language="en_US" />
        <Topic name="boutique_frf" src="boutique/boutique_frf.top" topicName="boutique" language="fr_FR" />
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
    </Topics>
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
</Package>
