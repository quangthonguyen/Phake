import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreButton from "./preButton";
import NextButton from "./nextButton";
import { makeStyles } from "@material-ui/core";
import CardForSlider from "../card/cardForSilder";

const useStyle = makeStyles((theme) => ({
  customDot: {
    "&:before": {
      color: theme.palette.text.secondary + " !important",
    },
  },
}));

function SlickUI(props) {
  const { data } = props;
  const classes = useStyle();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PreButton />,
    nextArrow: <NextButton />,
    customPaging: function (i) {
      return <button className={classes.customDot}></button>;
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.length > 0
        ? data.map((v, i) => <CardForSlider key={i} product={v} />)
        : [1, 2, 3, 4, 5, 6].map((v, i) => <CardForSlider key={i} />)}
    </Slider>
  );
}

export default SlickUI;
