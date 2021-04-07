import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, FilterList } from "@material-ui/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { category, categoryText } from "../List/ListUI";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Filter() {
  const classes = useStyles();
  const [openCategory, setopenCategory] = useState(true);
  const [openPrice, setopenPrice] = useState(true);
  return (
    <>
      <List
        dense={true}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListItem>
            <ListItemIcon>
              <FilterList />
            </ListItemIcon>
            <ListItemText primary="Bộ lọc" />
          </ListItem>
        }
      >
        <ListItem button onClick={() => setopenCategory((state) => !state)}>
          <ListItemText primary="Danh mục" />
          {openCategory ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {category.map((v, i) => (
              <ListItem
                button
                key={i}
                className={classes.nested}
                component={NavLink}
                to={`/products/category/${categoryText[i]}`}
              >
                <ListItemText primary={v.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem button onClick={() => setopenPrice((state) => !state)}>
          <ListItemText primary="Khoảng giá" />
          {openPrice ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPrice} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary={"Từ"} />
              <TextField
                size="small"
                margin="dense"
                id="outlined-basic"
                variant="outlined"
                disabled
              />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemText primary={"Đến"} />
              <TextField
                size="small"
                margin="dense"
                id="outlined-basic"
                variant="outlined"
                disabled
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </>
  );
}

export default Filter;
