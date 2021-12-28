import React, { createRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestmonialSlider.scss";
import { IoIosArrowForward } from "react-icons/io";
function TestmonialSlider() {
  const customeSlider = createRef();
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  });
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <div className="testimonial-container">
      <div className="container">
        <div className="slider-container row d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <h6>Testimonial</h6>
            <h5>
              What our
              <br /> customer says
            </h5>
            <div className="d-flex mt-3">
              <button className="prv__btn me-2" onClick={() => gotoNext()}>
                <IoIosArrowBack className="prv__icn" />
              </button>
              <button className="fr__btn" onClick={() => gotoPrev()}>
                <IoIosArrowForward className="fr__icn" />
              </button>
            </div>
          </div>
          <Slider className="col-md-8" {...sliderSettings} ref={customeSlider}>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">01/03</h5>
                  <p class="card-text">
                    Last week I bought an antique classic car from the new
                    collection of Akij Motors. It is providing the best user in
                    my 30 years driving era. It's so stylish, fast and
                    eco-friendly. Recommending everyone to have this. Thanks to
                    Akij Motors.{" "}
                  </p>
                  <div className="client">
                    <img
                      className="testimonial-img"
                      src="images/card1.jpeg"
                      alt=""
                    />
                    <h4>Mario Selia</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">02/03</h5>
                  <p class="card-text">
                    I bought an ambulance from Akij Group. It provides a smooth
                    driving experience. Lots of love to Akij Motors.{" "}
                  </p>
                  <div id="second-card" className="client">
                    <img
                      className="testimonial-img"
                      src="images/card1.jpeg"
                      alt=""
                    />
                    <h4>Momen Ali</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">02/03</h5>
                  <p class="card-text">
                    I bought an ambulance from Akij Group. It provides a smooth
                    driving experience. Lots of love to Akij Motors.{" "}
                  </p>
                  <div id="second-card" className="client">
                    <img
                      className="testimonial-img"
                      src="images/card1.jpeg"
                      alt=""
                    />
                    <h4>Momen Ali</h4>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TestmonialSlider;

/* 

 */
