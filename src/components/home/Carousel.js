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

      let currentURL = window.location.href;
      const currentURLSplit = currentURL.split("/");



      return (
        <div style={{overflow: 'hidden'}}>
         
         {currentURLSplit[1] == ""?  
              <>
               <Slider  {...settings}>

               <div className="slider-image">
               <img src="images/slider/Home/1-min.jpg" alt="" srcset="" />
             </div>
             <div className="slider-image" style={{border:'1px solid red'}}>
             <img src="images/slider/Home/2-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/3-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/4-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/5-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/6-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/7-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/8-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/9-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/10-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/11-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/12-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image">
             <img src="images/slider/Home/13-min.jpg" alt="" srcset="" />
             </div>

           
             </Slider>

             </>
        : ""}

         

        </div>
      );
};

export default Carousel;
