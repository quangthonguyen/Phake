import { Container } from "@material-ui/core";
import React from "react";
import AppBar from "../appBar/appBar";
import Footer from "../footer";
import HomeUI from "../Home/homeUI";
import SettingBar from "../settingBar";

function Desktop() {
  return (
    <>
      <SettingBar />
      <AppBar />
    </>
  );
}

export default Desktop;
