import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchInputUI from "../appBar/searchInputUI";
import SearchProduct from "../appBar/searchProduct";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    color: "inherit",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
    margin: theme.spacing(0, -1, 0, -1),
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
}));

function SearchBar() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <SearchProduct />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SearchBar;
