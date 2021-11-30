import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner__side0 from "../../../images/img1.PNG";
import banner__side1 from "../../../images/banner__side1.jpg";
import banner__side2 from "../../../images/banner__side2.jpg";
import banner__side3 from "../../../images/banner__side3.jpg";
import "./TopSlider.scss";

function TopSliderPrivateVehicles() {
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
          <img src={banner__side0} alt="" srcset="" />
        </div>
        <div className="slider-image">
          <img src={banner__side2} alt="" srcset="" />
        </div>
        <div className="slider-image">
          <img src={banner__side3} alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
}

export default TopSliderPrivateVehicles;
