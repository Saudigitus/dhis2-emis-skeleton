import React, { useState } from "react";
import { IconAddCircle24, Button, Label } from "@dhis2/ui";
import { ModalComponent, ModalSummaryContent, Title, WithPadding } from "../../components";

const summaryData = {
  created: 347,
  updated: 347,
  duplicates: 347,
  conflicts: 347
}
function SummaryModal(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <WithPadding p="30px 15px">
      <Title label="Summary Modal Component" /><br />
      <Label>Click to open the Modal</Label> <hr />
      <Button icon={<IconAddCircle24 />} onClick={() => { setOpen(true); }}>Open Modal</Button>

      {open && <ModalComponent title="Bulk Enrollment Summary" open={open} setOpen={setOpen}><ModalSummaryContent setOpen={setOpen} summaryData={summaryData} /></ModalComponent>}
    </WithPadding>
  );
}

export default SummaryModal;
