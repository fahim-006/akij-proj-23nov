import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';


const Carousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear"
      };
      return (
        <div style={{overflow: 'hidden'}}>
          <Slider  {...settings}>

          <div className="slider-image">
                <img src="images/akij motor banner-04.jpg" alt="" srcset="" />
            </div>
            <div className="slider-image" style={{border:'1px solid red'}}>
              <img src="images/akij motor banner-01.jpg" alt="" srcset="" />
            </div>
        
            <div className="slider-image">
                <img src="images/akij motor banner-03.jpg" alt="" srcset="" />
            </div>
           
            <div className="slider-image">
                <img src="images/akij motor banner-05.jpg" alt="" srcset="" />
            </div>
          </Slider>
        </div>
      );
};

export default Carousel;
