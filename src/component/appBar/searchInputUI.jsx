import {
  Avatar,
  ClickAwayListener,
  fade,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router";
const useStyle = makeStyles((theme) => ({
  dropDown: {
    position: "absolute",
    width: "calc(100% - 58px)",
    top: "36px",
    left: "32px",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% + 14px)",
      top: "36px",
      left: "-8px",
    },
  },
  container: {
    position: "relative",
    flexGrow: 1,
    display: "flex",
  },
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
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, -1, 0, -1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
}));

function SearchInputUI(prors) {
  const classes = useStyle();
  const { data, handleSearch } = prors;
  const intl = useIntl();
  const history = useHistory();
  const p = intl.formatMessage({
    id: "appBar.search",
    defaultMessage: "Search ...",
  });
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div className={classes.container}>
          <InputBase
            startAdornment={<Search />}
            placeholder={p}
            classes={{
              root: classes.root,
              inputAdornedStart: classes.searchIcon,
            }}
            onFocus={handleOpen}
            onChange={(event) => handleSearch(event.target.value)}
          />
          {open && (
            <Paper square elevation={2} classes={{ root: classes.dropDown }}>
              <List dense>
                {data.length === 0 && (
                  <ListItem button>
                    <ListItemText primary={""} />
                  </ListItem>
                )}
                {data.map((v, i) => (
                  <ListItem
                    key={i}
                    button
                    onClick={() => {
                      history.push(`/product/${v._id}`);
                      handleClose();
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        alt="product image"
                        src={v.image[0]}
                      />
                    </ListItemAvatar>
                    <div class={classes.cartText}>
                      <ListItemText primary={`${v.productName}`} />
                    </div>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
}

export default SearchInputUI;
