<?xml version="1.0" encoding="UTF-8" ?>
<Package name="demo" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="ExampleDialog" src="behavior_1/ExampleDialog/ExampleDialog.dlg" />
        <Dialog name="serviceDemande" src="serviceDemande/serviceDemande.dlg" />
    </Dialogs>
    <Resources />
    <Topics>
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="ExampleDialog_frf" src="behavior_1/ExampleDialog/ExampleDialog_frf.top" topicName="ExampleDialog" language="fr_FR" />
        <Topic name="serviceDemande_enu" src="serviceDemande/serviceDemande_enu.top" topicName="serviceDemande" language="en_US" />
        <Topic name="serviceDemande_frf" src="serviceDemande/serviceDemande_frf.top" topicName="serviceDemande" language="fr_FR" />
    </Topics>
    <IgnoredPaths>
        <Path src=".metadata" />
    </IgnoredPaths>
</Package>
