import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PreButton from './preButton';
import NextButton from './nextButton';
import { makeStyles } from '@material-ui/core';
import CardUI from '../card/cardUI';

const useStyle = makeStyles((theme) => ({
  customDot: {
    '&:before': {
      color: theme.palette.text.secondary + ' !important',
    },
  },
}));

function SlickUI() {
  const classes = useStyle();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <PreButton />,
    nextArrow: <NextButton />,
    customPaging: function (i) {
      return <button className={classes.customDot}></button>;
    },
  };
  return (
    <Slider {...settings}>
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
    </Slider>
  );
}

export default SlickUI;
