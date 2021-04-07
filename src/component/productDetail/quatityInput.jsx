import {
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
const useStyle = makeStyles((theme) => ({
  stockInput: {
    padding: "0px",
    minWidth: "130px",
    width: "min-content",
  },
  IconsStock: {
    padding: "7px",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0px",
  },
}));
function QuatityInput(props) {
  const { value, plusClick, minuClick } = props;
  const classes = useStyle();
  return (
    <>
      <OutlinedInput
        classes={{ root: classes.stockInput }}
        inputProps={{
          style: { textAlign: "center" },
        }}
        margin="dense"
        value={value}
        startAdornment={
          <InputAdornment position="start" onClick={minuClick}>
            <IconButton classes={{ root: classes.IconsStock }}>
              <Remove />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end" onClick={plusClick}>
            <IconButton classes={{ root: classes.IconsStock }}>
              <Add />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}

export default QuatityInput;
