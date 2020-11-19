import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
} from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    minWidth: '100px',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  clampTitle: {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    overflow: 'hidden',
    height: theme.typography.h2.fontSize * theme.typography.h2.lineHeight,
  },
  price: {
    color: '#ee4d2d',
  },
  cardContentRoot: {
    padding: theme.spacing(1),
  },
}));

function CardUI() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cf.shopee.vn/file/55bca951c83ecb13d12ac62c831ccf2b_tn"
          title="Procduct Image"
        />
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <Typography
            gutterBottom
            component="h2"
            className={classes.clampTitle}
          >
            Xe vision 2020 - soc gia 100%
          </Typography>
          <Typography
            gutterBottom
            component="h2"
            className={classes.price}
            noWrap
          >
            {new Intl.NumberFormat('vi-VI', {
              style: 'currency',
              currency: 'VND',
            }).format(10000000)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUI;
