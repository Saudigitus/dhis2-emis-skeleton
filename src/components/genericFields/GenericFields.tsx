import React from "react";
import InputText from "./fields/InputText.js";
import { type CustomAttributeProps } from "../../types/table/attributeColumns.js";

interface GenericFieldsProps {
  attribute: CustomAttributeProps
  disabled?: boolean
  valueType: CustomAttributeProps["valueType"]
}
function GenericFields(props: GenericFieldsProps) {
  const { attribute, disabled } = props;

  return (
    <div>
      <InputText {...attribute} disabled={disabled} />
    </div>
  );
}

export default GenericFields;
