import React from "react";
import enrollment from "../../assets/images/home/enrollment.png";
import {
  DashboardCard,
  SummaryCard,
  Title,
  WithPadding
} from "../../components";

function Cards(): React.ReactElement {
  return (
    <div>
      <WithPadding p="30px 15px">
        <Title label="Dashboard Cards" />
        <DashboardCard
          icon={enrollment}
          title="Enrollment"
          value="27"
          leftLabel="Total"
          program="programId"
          formLink="#"
          listLink="#"
        />
      </WithPadding>
      <hr />

      <WithPadding p="30px 15px">
        <Title label="Summary Cards" />
        <div className="d-flex">
          <SummaryCard value={347} label="Success" color="success" />
          <SummaryCard value={347} label="Error" color="error" />
          <SummaryCard value={347} label="Primary" color="primary" />
          <SummaryCard value={347} label="Warning" color="warning" />
          <SummaryCard value={347} label="Default" color="default" />
        </div>
      </WithPadding>
    </div>
  );
}
export default Cards;
