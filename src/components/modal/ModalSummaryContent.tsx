import React, { useState } from "react";
import { Divider, IconCheckmarkCircle16, IconInfo16, Tag, ModalActions, Button, ButtonStrip } from "@dhis2/ui";
import WithPadding from "../template/WithPadding";
import styles from "./modal.module.css";
import { ButtonActionProps } from "../../types/buttons/ButtonActions";
import Title from "../text/Title";
import SummaryCards from "./SummaryCards";
import { Collapse } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";

interface ModalContentProps {
  setOpen: (value: boolean) => void
  summaryData: any
}
function ModalSummaryContent(props: ModalContentProps): React.ReactElement {
  const { setOpen, summaryData } = props;
  const [showDetails, setShowDetails] = useState(false)
  const handleShowDetails =()=> {
    setShowDetails(!showDetails);
  }

  const modalActions: ButtonActionProps[] = [
    { label: "Cancel", disabled: false, onClick: () => { setOpen(false) } },
    { label: "Confirm", primary: true, disabled: false, onClick: () => { setOpen(false) } }
  ];

  return (
    <div>
      <Tag positive icon={<IconCheckmarkCircle16 />} className={styles.tagContainer}> Students import preview </Tag>
      
      <WithPadding />
      <Title label="Summary" />
      <WithPadding />

      <SummaryCards {...summaryData} />

      <WithPadding />
      <WithPadding />
      <ButtonStrip>
        <Button small icon={<InfoOutlined className={styles.infoIcon} />} onClick={handleShowDetails}>More details</Button>
      </ButtonStrip>
      
      <WithPadding />
      <Collapse in={showDetails}>
        <div className={styles.detailsContainer}>
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />
          Display here summary details <br />

        </div>
      </Collapse>
      
      <Divider />
      <ModalActions>
        <ButtonStrip end>
          {modalActions.map((action, i) => (
            <Button
              key={i}
              {...action}
            >
              {action.label}
            </Button>
          ))}
        </ButtonStrip>
      </ModalActions>
    </div>
  );
}

export default ModalSummaryContent;
