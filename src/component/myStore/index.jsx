import { Container, Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import AddProductDialog from "./addProductDialog";
import CustomTable from "./customTable";
import NavList from "./navList";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(5, 0, 7.5, 0),
      padding: theme.spacing(0, 1),
    },
  },
  gridContainer: {
    padding: theme.spacing(2, 0),
  },
}));

function MyStore() {
  const classes = useStyle();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  useEffect(() => {
    user._id === "" && history.push("/home");
  }, [user._id]);
  return (
    <>
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Grid
          container
          spacing={2}
          classes={{ container: classes.gridContainer }}
        >
          <Hidden smDown>
            <Grid item md={3} xs={12}>
              <Paper>
                <NavList />
              </Paper>
            </Grid>
          </Hidden>
          <Grid item md={9} xs={12}>
            <Paper>
              <CustomTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <AddProductDialog />
    </>
  );
}

export default MyStore;
