import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Assignment,
  ExpandLess,
  ExpandMore,
  FlightTakeoff,
  Settings,
  Storefront,
} from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(9),
  },
  hightList: {
    fontWeight: "500",
  },
}));

function NavListUI(prors) {
  const { toogleAddProductDiaglePror } = prors;
  const classes = useStyles();
  const [OpenQLSP, setOpenQLSP] = useState(true);
  const toggleQLSP = () => setOpenQLSP((state) => (state = !state));
  const [OpenVC, setOpenVC] = useState(true);
  const toggleVC = () => setOpenVC((state) => (state = !state));
  const [OpenDH, setOpenDH] = useState(true);
  const toggleDH = () => setOpenDH((state) => (state = !state));
  return (
    <>
      <List component="nav" dense={true}>
        <ListItem button onClick={toggleQLSP}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography classes={{ root: classes.hightList }}>
                Quản lý sản phẩm
              </Typography>
            }
          />
          {OpenQLSP ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={OpenQLSP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Tất cả sản phẩm" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={toogleAddProductDiaglePror}
            >
              <ListItemText primary="Thêm sản phẩm" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Sản phẩm vi phạm" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={toggleDH}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography classes={{ root: classes.hightList }}>
                Quản lý đơn hàng
              </Typography>
            }
          />
          {OpenDH ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={OpenDH} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Tất cả" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Đơn hủy" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Trả hàng \ hoàn tiền" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={toggleVC}>
          <ListItemIcon>
            <FlightTakeoff />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography classes={{ root: classes.hightList }}>
                Vận chuyển
              </Typography>
            }
          />
          {OpenVC ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={OpenVC} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Quản lý vận chuyển" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem disabled className={classes.nested}>
              <ListItemText primary="Giao hàng loạt" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem disabled button={true} className={classes.nested}>
              <ListItemText primary="Cài đật vận chuyển" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography classes={{ root: classes.hightList }}>
                Thiết lập shop
              </Typography>
            }
          />
        </ListItem>
      </List>
    </>
  );
}

export default NavListUI;
