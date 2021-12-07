import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./TruckSlider.scss";
function TruckSlider({ image1, image2, image3, title1, title2, title3 }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="row">
      <div className="col-md-4">
        <div className="slider__img pe-3">
          <img src={image1} alt="" />
          <h3 className="text-center mt-4" style={{ color: "#14478d" }}>
            {title1}
          </h3>
        </div>
      </div>
      <div className="col-md-4 pe-3">
        <div className="slider__img">
          <img src={image2} alt="" />
          <h3 className="text-center mt-4" style={{ color: "#14478d" }}>
            {title2}
          </h3>
        </div>
      </div>
      <div className="col-md-4 pe-3">
        <div className="slider__img">
          <img src={image3} alt="" />
          <h3 className="text-center mt-4" style={{marginLeft: "30px", color: "#14478d" }}>
            {title3}
          </h3>
        </div>
      </div>
      <div className="col-md-4">
        <div className="slider__img pe-3">
          <img src={image2} alt="" />
          <h3 className="text-center mt-4" style={{ color: "#14478d" }}>
            {title2}
          </h3>
        </div>
      </div>
    </Slider>
  );
}

export default TruckSlider;
