import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.css";

export default function ImageSlider() {
  //objs are always const
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="img-slider">
        <img src={process.env.PUBLIC_URL + "/images/ecom-plant-pic-1.jpeg"} />
      </div>
      <div className="img-slider">
        <img src={process.env.PUBLIC_URL + "/images/ecom-plant-pic-2.jpeg"} />
      </div>
      <div className="img-slider">
        <img src={process.env.PUBLIC_URL + "/images/ecom-plant-pic-3.jpeg"} />
      </div>
      <div className="img-slider">
        <img src={process.env.PUBLIC_URL + "/images/ecom-plant-pic-4.jpeg"} />
      </div>
    </Slider>
  );
}
