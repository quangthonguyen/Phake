import {
  Box,
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
const useStyle = makeStyles((theme) => ({
  select: {
    padding: "8px 14px",
  },
  toolBar: {
    padding: "8px 20px",
    gap: "10px",
    alignItems: "baseline",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
}));
function Toolbar(props) {
  const { sort, page, type } = props;
  const classes = useStyle();
  const history = useHistory();
  return (
    <Box display="flex" alignItems="baseline" className={classes.toolBar}>
      <p style={{ margin: "0px" }}> Sắp xếp theo:</p>

      <Button
        variant="contained"
        size="small"
        disableElevation
        color={sort === "common" ? "secondary" : "default"}
        onClick={() =>
          history.push(`/products/category/${type}/${page}/common`)
        }
      >
        Phổ biến
      </Button>
      <Button
        variant="contained"
        size="small"
        disableElevation
        color={sort === "new" ? "secondary" : "default"}
        onClick={() => history.push(`/products/category/${type}/${page}/new`)}
      >
        Mới nhất
      </Button>
      <FormControl
        size="small"
        margin="dense"
        variant="outlined"
        style={{ width: "160px" }}
      >
        <InputLabel>Giá</InputLabel>
        <Select
          label="Giá"
          classes={{ root: classes.select }}
          defaultValue={
            (sort === "incPrice" && "Thấp đến cao") ||
            (sort === "desPrice" && "Cao đến thấp") ||
            ""
          }
          onChange={(event) => {
            history.push(
              `/products/category/${type}/${page}/${event.target.value}`
            );
          }}
        >
          {[
            ["Thấp đến cao", "incPrice"],
            ["Cao đến thấp", "desPrice"],
          ].map((v, i) => (
            <MenuItem key={i} value={v[1]}>
              {v[0]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Toolbar;
