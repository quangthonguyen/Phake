import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
const useStyle = makeStyles((theme) => ({
  root: {
    margin: "0.5%",
    flexBasis: "19%",
    [theme.breakpoints.down("md")]: {
      flexBasis: "24%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "32%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "49%",
    },
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  clampTitle: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "2",
    overflow: "hidden",
    height: theme.typography.h2.fontSize * theme.typography.h2.lineHeight,
  },
  price: {
    color: "#ee4d2d",
  },
  cardContentRoot: {
    padding: theme.spacing(1),
  },
}));

function CardUI(props) {
  const {
    product = { image: [""], productName: "", price: 0, _id: 0 },
  } = props;
  const { image = [""], productName = "", price = 0, _id = 0 } = product;
  const history = useHistory();
  const classes = useStyle();
  return (
    <Card
      className={classes.root}
      onClick={() => history.push(`/product/${_id}`)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image[0]}
          title={productName}
        />
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <Typography
            gutterBottom
            component="h2"
            className={classes.clampTitle}
          >
            {productName}
          </Typography>
          <Typography
            gutterBottom
            component="h2"
            className={classes.price}
            noWrap
          >
            {new Intl.NumberFormat("vi-VI", {
              style: "currency",
              currency: "VND",
            }).format(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUI;
