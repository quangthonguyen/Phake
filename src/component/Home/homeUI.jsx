import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ListUI from '../List/ListUI';
import SlickUI from '../slick/SlickUI';
import LoginAndRegisterUI from '../loginAndRegister/loginAndRegisterUI';

const useStyle = makeStyles((theme) => ({
  gridContainer: {
    padding: theme.spacing(1, 0),
  },
}));

function HomeUI() {
  const classes = useStyle();
  return (
    <>
      <Grid
        container
        classes={{ container: classes.gridContainer }}
        spacing={2}
      >
        <Grid item xs={3}>
          <ListUI />
        </Grid>
        <Grid item xs={9}>
          <SlickUI />
        </Grid>
      </Grid>
      <Grid container classes={{ container: classes.gridContainer }}>
        <Grid item xs={12}>
          <SlickUI />
        </Grid>
      </Grid>
      <LoginAndRegisterUI />
    </>
  );
}

export default HomeUI;
