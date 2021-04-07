import React from "react";
import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ListUI from "../List/ListUI";
import SlickUI from "../slick/SlickUI";
import SlickImageUI from "../slick/SlickImageUI";
import Footer from "../footer";

const useStyle = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(5.5, 0, 8.5, 0),
      padding: theme.spacing(0, 1),
    },
  },
  gridContainer: {
    padding: theme.spacing(1, 0),
  },
  displayContainer: {
    padding: theme.spacing(1, 1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1, 0.25),
    },
  },
  Slick: {
    [theme.breakpoints.down("md")]: {},
  },
  title: {
    padding: theme.spacing(0, 1),
  },
}));

function HomeUI(props) {
  const { newProduct } = props;
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          classes={{ container: classes.gridContainer }}
          spacing={2}
        >
          <Hidden mdDown>
            <Grid item xs={12} lg={3}>
              <Paper>
                <ListUI />
              </Paper>
            </Grid>
          </Hidden>
          <Grid item xs={12} lg={9} classes={{ item: classes.Slick }}>
            <SlickImageUI
              image={[
                "http://icms-image.slatic.net/images/ims-web/d96537bd-372b-499d-99e4-74c0ba439503.jpg",
                "http://icms-image.slatic.net/images/ims-web/b9680d33-f9ed-4709-a3a2-ca9378857959.jpg_1200x1200.jpg",
              ]}
              slidesToShow={1}
              aspectRatio={16 / 7.7}
            />
          </Grid>
        </Grid>
        {/* <Grid container classes={{ container: classes.gridContainer }}>
          <Breadcrumbs>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>
        </Grid> */}
        <Paper elevation={2}>
          <Grid container classes={{ container: classes.displayContainer }}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              classes={{ root: classes.title }}
            >
              Sản phẩm mới nhất
            </Typography>
            <Grid item xs={12}>
              <SlickUI data={newProduct.data} />
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={2}>
          <Grid container classes={{ container: classes.displayContainer }}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              classes={{ root: classes.title }}
            >
              Sản phẩm nổi bật
            </Typography>
            <Grid item xs={12}>
              <SlickUI data={[...newProduct.data].reverse()} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
      {/* <LoginAndRegisterUI /> */}
    </>
  );
}

export default HomeUI;
