import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import React from "react";

function CustomOutlinedInput(props) {
  const { label, name, inputRef, errors, disabled, type } = props;
  return (
    <FormControl
      fullWidth
      size="small"
      margin="dense"
      variant="outlined"
      error={!!errors}
      disabled={disabled}
    >
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        name={name}
        label={label}
        inputRef={inputRef}
        type={type}
      />
      <FormHelperText error>{errors ? errors.message : " "}</FormHelperText>
    </FormControl>
  );
}

export default CustomOutlinedInput;
