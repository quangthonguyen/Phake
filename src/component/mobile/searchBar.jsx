import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import SearchProduct from "../appBar/searchProduct";

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
