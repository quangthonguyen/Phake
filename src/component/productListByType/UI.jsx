import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Paper,
} from "@material-ui/core";
import Filter from "./filter";
import React from "react";
import Toolbar from "./toolbar";
import CardUI from "../card/cardUI";
import { Pagination } from "@material-ui/lab";
import { useHistory } from "react-router";
import Footer from "../footer";

const useStyle = makeStyles((theme) => ({
  gridContainer: {
    padding: theme.spacing(2, 0),
  },
  listProduct: {
    marginTop: theme.spacing(0.5),
  },
  pagination: {
    marginTop: theme.spacing(1.5),
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(5.5, 0, 8.5, 0),
    },
  },
}));

function ProductListByTypeUI(props) {
  const { pagination, sort, data, type, loading } = props;
  const classes = useStyle();
  const history = useHistory();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          spacing={2}
          classes={{ container: classes.gridContainer }}
        >
          <Hidden smDown>
            <Grid item md={3} xs={12}>
              <Paper>
                <Filter />
              </Paper>
            </Grid>
          </Hidden>

          <Grid item md={9} xs={12}>
            <Grid item xs={12}>
              <Paper>
                <Toolbar
                  sort={sort}
                  page={pagination.currentPage}
                  type={type}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} classes={{ root: classes.listProduct }}>
              <Box display="flex" flexWrap="wrap">
                {loading ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    style={{ padding: "7rem 0rem" }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  data.map((v, i) => <CardUI product={v} key={i} />)
                )}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                classes={{ root: classes.pagination }}
              >
                <Pagination
                  count={pagination.totalPage}
                  defaultPage={pagination.currentPage}
                  size="large"
                  onChange={(event, value) =>
                    history.push(`/products/category/${type}/${value}/${sort}`)
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ProductListByTypeUI;
