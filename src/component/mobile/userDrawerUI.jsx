import {
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Settings,
  Person,
  GTranslate,
  AssignmentInd,
  ListAlt,
  Favorite,
  Storefront,
} from "@material-ui/icons";
import React from "react";
import LangMenu from "../settingBar/langMenu";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    minWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function UserDrawerUI(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { handleToggleDialog, user, toggleDrawer } = props;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <FormattedMessage
              id="userDrawer.title"
              defaultMessage="User & setting"
            />
          </ListSubheader>
        }
        className={classes.root}
      >
        {user._id !== "" ? (
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <Avatar variant="square">{user.firstName[0]}</Avatar>
              </ListItemIcon>
              <ListItemText primary={`${user.lastName} ${user.firstName}`} />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to={"/myStore"}
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Cửa hàng của bạn" />
            </ListItem>

            <ListItem disabled>
              <ListItemIcon>
                <AssignmentInd />
              </ListItemIcon>
              <ListItemText primary="Quản lý tài khoản" />
            </ListItem>
            <ListItem disabled>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="Quản lý đơn hàng" />
            </ListItem>
            <ListItem disabled>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Danh sách yêu thich" />
            </ListItem>
          </List>
        ) : (
          <ListItem button onClick={handleToggleDialog}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText
              primary={
                <FormattedMessage
                  id="userDrawer.logIn"
                  defaultMessage="Log In"
                />
              }
            />
          </ListItem>
        )}

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText
            primary={
              <FormattedMessage
                id="userDrawer.setting"
                defaultMessage="Setting"
              />
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <GTranslate />
              </ListItemIcon>
              <ListItemText primary={<LangMenu />} />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </>
  );
}

export default UserDrawerUI;
