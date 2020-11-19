import React from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Container,
} from '@material-ui/core';
import { Person, Notifications, LocationOn, Search } from '@material-ui/icons';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    color: 'inherit',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    padding: theme.spacing(0.5, 1, 0.5, 1),
    margin: theme.spacing(0, 3, 0, 4),
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
}));

function CustomAppBar() {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <Typography variant="h6" noWrap>
            Tiki
          </Typography>
          <InputBase
            startAdornment={<Search />}
            placeholder="Search…"
            classes={{
              root: classes.root,
              inputAdornedStart: classes.searchIcon,
            }}
          />
          <Button startIcon={<LocationOn />} color="inherit" size="small">
            Theo giỏi
          </Button>
          <Button startIcon={<Notifications />} color="inherit" size="small">
            Thông báo
          </Button>
          <Button startIcon={<Person />} color="inherit" size="small">
            Đăng nhập
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CustomAppBar;
