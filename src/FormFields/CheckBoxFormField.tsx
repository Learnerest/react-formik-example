import React from "react";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { FieldProps, getIn } from "formik";
import { FormHelperText } from "@material-ui/core";
// Inspired by blueprintjs

interface CheckBoxProps {
  options: Array<{ value: string; labelText: string }>;
  setOnCheckBox: React.Dispatch<React.SetStateAction<string>>;
  isSubProject: boolean;
}

export const CheckBoxFormField: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
  }
> = ({ field, form, label, options, icon, checkedIcon, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl
      component="fieldset"
      style={{ height: "100%", maxHeight: "fit-content" }}
      required
    >
      <RadioGroup
        {...field}
        {...props}
        style={{ maxHeight: "100%", flexWrap: "nowrap" }}
      >
        {options.map((option) => {
          return (
            <>
              <FormControlLabel
                value={option.value}
                control={
                  <Radio
                    defaultChecked
                    icon={icon}
                    checkedIcon={checkedIcon}
                    color="primary"
                  />
                }
                label={option.label}
              />
            </>
          );
        })}
      </RadioGroup>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};
