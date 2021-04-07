import {
  Box,
  Button,
  fade,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Add, Search } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    color: "inherit",
    backgroundColor: fade(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.09),
    },
    padding: theme.spacing(0.5, 1, 0.5, 1),
    margin: theme.spacing(0, 1, 0, 2),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 0, 0, 0),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
  toolBar: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: " flex-start",
      gap: "10px",
    },
  },
  box: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    gap: "10px",
  },
}));

function ToolbarTableUI(props) {
  const { handletoggleAddProdcutDiaglog } = props;
  const classes = useStyle();
  return (
    <>
      <Toolbar classes={{ root: classes.toolBar }}>
        <Typography variant="h6" id="tableTitle" component="div">
          Quản lý sản phẩm
        </Typography>
        <Box display="flex" flexGrow="1" className={classes.box}>
          <InputBase
            disabled
            startAdornment={<Search />}
            placeholder={"Tìm đơn hàng"}
            classes={{
              root: classes.root,
              inputAdornedStart: classes.searchIcon,
            }}
          />
          <Button
            size={"small"}
            onClick={handletoggleAddProdcutDiaglog}
            startIcon={<Add />}
            variant="contained"
            disableElevation
          >
            Thêm
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}

export default ToolbarTableUI;
