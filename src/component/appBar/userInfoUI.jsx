import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Popover,
} from "@material-ui/core";
import {
  AccountCircle,
  AssignmentInd,
  Favorite,
  ListAlt,
  Person,
  Storefront,
} from "@material-ui/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  userButton: {
    textTransform: "capitalize",
  },
  cardHeader: {
    // justifyContent: "center",
    paddingBottom: "0px",
  },
  cardContext: {
    padding: "0px",
  },
  cardActions: {
    justifyContent: "center",
  },
  small: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
}));

function UserInfoUI(props) {
  const { user, handleLogOutProp } = props;
  const { firstName, lastName } = user;
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeAndLogOut = () => {
    setAnchorEl(null);
    handleLogOutProp();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Button
        color="inherit"
        onClick={handleClick}
        startIcon={
          <Avatar variant="square" className={classes.small}>
            {firstName[0]}
          </Avatar>
        }
        classes={{ root: classes.userButton }}
      >
        {`${lastName} ${firstName}`}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card>
          <CardHeader
            avatar={<Avatar variant="square">{user.firstName[0]}</Avatar>}
            title={`${lastName} ${firstName}`}
            classes={{ root: classes.cardHeader }}
          />
          <CardContent classes={{ root: classes.cardContext }}>
            <List component="nav">
              <ListItem
                button
                component={NavLink}
                to={"/myStore"}
                onClick={handleClose}
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
          </CardContent>
          <CardActions classes={{ root: classes.cardActions }}>
            <Button size="small" onClick={closeAndLogOut}>
              Đăng xuất
            </Button>
          </CardActions>
        </Card>
      </Popover>
    </>
  );
}

export default UserInfoUI;
