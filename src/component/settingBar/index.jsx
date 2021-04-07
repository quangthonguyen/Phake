import { AppBar, Container } from "@material-ui/core";
import React from "react";
import LangMenu from "./langMenu";

function SettingBar() {
  return (
    <AppBar position="static">
      <Container
        maxWidth="lg"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <LangMenu />
      </Container>
    </AppBar>
  );
}

export default SettingBar;
