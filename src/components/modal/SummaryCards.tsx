import React from "react";
import { ButtonStrip } from "@dhis2/ui";
import SummaryCard from "../card/SummaryCard";

interface SummaryCardsProps {
  created: number
  updated: number
  conflicts: number
  duplicates: number
}

function SummaryCards(values: SummaryCardsProps): React.ReactElement {
  const { created, updated, conflicts, duplicates } = values;
  return (
    <ButtonStrip>
      <SummaryCard color="success" label="New students" value={created} />
      <SummaryCard color="primary" label="Updates" value={updated} />
      <SummaryCard color="warning" label="Possible duplicates" value={duplicates} />
      <SummaryCard color="error" label="Conflicts" value={conflicts} />
    </ButtonStrip>
  );
}

export default SummaryCards;
