import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreButton from "./preButton";
import NextButton from "./nextButton";
import { makeStyles } from "@material-ui/core";
import Image from "material-ui-image";

const useStyle = makeStyles((theme) => ({
  customDot: {
    "&:before": {
      color: theme.palette.text.secondary + " !important",
    },
  },
}));

function SlickImageUI(props) {
  const {
    changeImg,
    image,
    loading,
    slidesToShow = 4,
    initSlide = 0,
    aspectRatio = 1 / 1,
  } = props;
  const classes = useStyle();
  const settings = {
    initialSlide: initSlide,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PreButton />,
    nextArrow: <NextButton />,
    customPaging: function (i) {
      return <button className={classes.customDot}></button>;
    },
  };
  return (
    <Slider {...settings}>
      {loading
        ? [1, 2, 3, 4].map((v, i) => (
            <Image
              key={i}
              src
              onClick={() => changeImg(v)}
              aspectRatio={aspectRatio}
            />
          ))
        : image.map((v, i) => (
            <Image
              key={i}
              src={v}
              onClick={() => changeImg(v)}
              aspectRatio={aspectRatio}
            />
          ))}
    </Slider>
  );
}

export default SlickImageUI;
