import {
    ReactFinalForm,
    InputFieldFF,
    composeValidators,
    hasValue,
    string
} from '@dhis2/ui'
import React from 'react'
import style from "./fields.module.css";
import { type CustomAttributeProps } from '../../../types/table/attributeColumns';

interface InputtTextProps {
    required?: boolean | string
    disabled?: boolean
    valueType?: CustomAttributeProps["valueType"]
}

const { Field } = ReactFinalForm

const VALIDATOR = composeValidators(string, hasValue)

function InputText(props: InputtTextProps) {
    return (
        <Field
            {...props}
            component={InputFieldFF}
            // eslint-disable-next-line react/prop-types
            validate={(props.required === true) && VALIDATOR}
            type="text"
            required
            label={null}
            className={style.textfield}
            disabled={props.disabled}
        />
    )
}

export default InputText
