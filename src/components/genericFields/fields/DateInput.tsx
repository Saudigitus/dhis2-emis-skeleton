import { ReactFinalForm, InputFieldFF, hasValue } from "@dhis2/ui";
import React from "react";

interface DateFieldProps {
  disabled: boolean
  required: string | boolean
}
const { Field } = ReactFinalForm;

function DateInput(props: DateFieldProps) {
  return (
    <Field
      {...props}
      type="date"
      component={InputFieldFF}
      validate={(Boolean(props.required)) && hasValue}
      disabled={props.disabled}
    />
  );
}

export default DateInput;
