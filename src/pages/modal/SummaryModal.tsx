import React, { useState } from "react";
import { IconAddCircle24, Button, Label } from "@dhis2/ui";
import { ModalComponent, ModalSummaryContent, Title, WithPadding } from "../../components";
import { type ButtonActionProps } from "../../types/buttons/ButtonActions";

function SummaryModal(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const modalActions: ButtonActionProps[] = [
    { label: "Close", disabled: false, onClick: () => { setOpen(false) } },
    { label: "Save and add new", primary: true, disabled: false, onClick: () => { setOpen(false) } },
    { label: "Save and close", primary: true, disabled: false, onClick: () => { setOpen(false) } }
  ];

  return (
    <WithPadding p="30px 15px">
      <Title label="Summary Modal Component" /><br />
      <Label>Click to open the Modal</Label> <hr />
      <Button icon={<IconAddCircle24 />} onClick={() => { setOpen(true); }}>Open Modal</Button>

      {open && <ModalComponent title="Single Student Enrollment" open={open} setOpen={setOpen} actions={modalActions}><ModalSummaryContent /></ModalComponent>}
    </WithPadding>
  );
}

export default SummaryModal;
