import { TextField, makeStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useField, type FieldRenderProps } from "react-final-form";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A0ADBA"
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#A0ADBA"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#147CD7"
    }
  }
});

interface OptionProps {
  value: string
  label: string
}

interface OptionsetProps {
  name: string
  options?: OptionProps[]
  disabled: boolean
}

interface AutoCompleteProps {
  disabled?: boolean
  optionSet: OptionsetProps
  name: string
}

const OptionSetAutocomplete = ({ optionSet, ...props }: AutoCompleteProps) => {
  const classes = useStyles();
  const { input, meta }: FieldRenderProps<any, HTMLElement> = useField(props.name);

  const options = (optionSet.options != null)
    ? optionSet.options.map((option) => ({
        value: option.value,
        label: option.label
      }))
    : [];

  return (
    <Autocomplete
      {...props}
      classes={classes}
      options={options}
      closeIcon={null}
      disabled={optionSet.disabled}
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, value) => option.value === value.value}
      value={options.find((element) => element.value === input.value)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          name={optionSet.name}
          error={(meta.touched === true) && meta.error}
          helperText={(meta.touched === true) && meta.error}
          size="small"
          InputProps={{
            ...params.InputProps,
            style: {
              backgroundColor: "#fff"
            }
          }}
        />
      )}
      onChange={(_, value) => {
        input.onChange(value?.value);
        console.log("variables", value);
      }}
      onBlur={input.onBlur}
    />
  );
};

function SingleSelectField(props: AutoCompleteProps) {
  return (
    <div>
      <OptionSetAutocomplete name={props.name} optionSet={props.optionSet} />
    </div>
  );
}

export default SingleSelectField;
