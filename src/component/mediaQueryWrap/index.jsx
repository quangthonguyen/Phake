import { useMediaQuery } from "@material-ui/core";
import React from "react";
import Desktop from "../desktop";
import Mobile from "../mobile";

function MediaQueryWrap() {
  const matches = useMediaQuery(
    (theme) => {
      return theme.breakpoints.up("md");
    },
    { noSsr: true }
  );
  return <>{matches ? <Desktop /> : <Mobile />}</>;
}

export default MediaQueryWrap;
