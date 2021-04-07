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
import { Skeleton } from "@material-ui/lab";
const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0.7),
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

function CardForSlider(props) {
  const {
    product = { image: [""], productName: "", price: 0, _id: 0 },
  } = props;
  const { image = [""], productName = "", price = 0, _id = 0 } = product;
  const history = useHistory();
  const classes = useStyle();
  return (
    <Card
      elevation={2}
      className={classes.root}
      onClick={() => (_id === 0 ? true : history.push(`/product/${_id}`))}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image[0]}
          title={productName}
        />
        <CardContent classes={{ root: classes.cardContentRoot }}>
          {productName !== "" ? (
            <Typography
              gutterBottom
              component="h2"
              className={classes.clampTitle}
            >
              {productName}
            </Typography>
          ) : (
            <Skeleton variant="text" height="53.6px" />
          )}
          {price !== 0 ? (
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
          ) : (
            <Skeleton variant="text" height="29.6px" />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardForSlider;
