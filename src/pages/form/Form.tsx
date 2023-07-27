import React from "react";
import { GroupForm, WithPadding } from "../../components";
import { type CustomAttributeProps } from "../../types/table/attributeColumns";
import { Attribute } from "../../types/generated/models";
import { Form } from "react-final-form";

function GenericForm(): React.ReactElement {
  return (
    <WithPadding>
      <Form
        onSubmit={() => {
          alert("Submitted");
        }}
      >
        {({ reset }) => (
          <form>
            <GroupForm
              name={"Basic Information"}
              fields={[
                {
                  id: "Basic Information",
                  labelName: "Name",
                  displayName: "Name",
                  header: "Name",
                  disabled: false,
                  valueType: Attribute.valueType
                    .TEXT as unknown as CustomAttributeProps["valueType"],
                  name: "eventDate",
                  required: true,
                  visible: true
                },
                {
                    id: "Basic Information",
                    labelName: "Name",
                    displayName: "Name",
                    header: "Name",
                    disabled: false,
                    valueType: Attribute.valueType
                      .DATE as unknown as CustomAttributeProps["valueType"],
                    name: "eventDate",
                    required: true,
                    visible: true
                  }
              ]}
              disabled={false}
            />
          </form>
        )}
      </Form>
    </WithPadding>
  );
}
export default GenericForm;
