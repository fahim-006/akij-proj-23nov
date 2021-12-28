import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner__side1 from "../../images/banner1.PNG";

import "./TopSlider.scss";
function TopSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        <div className="slider-image" style={{ border: "1px solid red" }}>
          <img src={banner__side1} alt="" srcset="" />
        </div>
        <div className="slider-image" style={{ border: "1px solid red" }}>
          <img src={banner__side1} alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
}

export default TopSlider;
