import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { makeStyles, fade } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import InfoUser from "./userInfo";
import CartInfo from "./cartInfo";
import { useHistory } from "react-router";
import SearchProduct from "./searchProduct";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    color: "inherit",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    padding: theme.spacing(0.5, 1, 0.5, 1),
    margin: theme.spacing(0, 3, 0, 4),
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
  pointer: {
    cursor: "pointer",
  },
}));

function CustomAppBar(props) {
  const { handleToggleLogin, user } = props;
  const { firstName, lastName } = user;
  const classes = useStyle();
  const history = useHistory();
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <Typography
            variant="h6"
            noWrap
            onClick={() => {
              history.push("/");
            }}
            className={classes.pointer}
          >
            PhaKe
          </Typography>
          <SearchProduct />

          <CartInfo />
          {firstName !== "" && lastName !== "" ? (
            <InfoUser user={user} />
          ) : (
            <Button
              startIcon={<Person />}
              color="inherit"
              size="small"
              onClick={handleToggleLogin}
            >
              <FormattedMessage id="appBar.logIn" defaultMessage="Log In" />
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CustomAppBar;
