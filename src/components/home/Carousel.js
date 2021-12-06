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
         
         {currentURLSplit[currentURLSplit.length - 1] == ""?  
              <>
               <Slider  {...settings}>

               <div className="slider-image1">
               <img src="images/slider/Home/1-min.jpg" alt="" srcset="" />
             </div>
             <div className="slider-image1" style={{border:'1px solid red'}}>
             <img src="images/slider/Home/2-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/3-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/4-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/5-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/6-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/7-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/8-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/9-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/10-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/11-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/12-min.jpg" alt="" srcset="" />
             </div>

             <div className="slider-image1">
             <img src="images/slider/Home/13-min.jpg" alt="" srcset="" />
             </div>

           
             </Slider>

             </>
        :
        currentURLSplit[currentURLSplit.length - 1] == "commercial_vehicles" || currentURLSplit[currentURLSplit.length - 1] =="commercial_vehicles_sidebar_mini_truck" ?  
              <>
       
               <Slider  {...settings}>

               <div className="slider-image1">
               <img src="images/slider/commercial/1-min.jpg" alt="" srcset="" />
             </div>
           
           
             </Slider>

             </>
             :

             currentURLSplit[currentURLSplit.length - 1] == "private_vehicles" || currentURLSplit[currentURLSplit.length - 1] == "microbus"?  
             <>
        
              <Slider  {...settings}>

              <div className="slider-image1">
              <img src="images/slider/private/1-min.jpg" alt="" srcset="" />
            </div>
          
          
            </Slider>

            </>
            :
            currentURLSplit[currentURLSplit.length - 1] == "motor_servicing" ||  currentURLSplit[currentURLSplit.length - 1] == "motor_servicing_sidebar"?  
            <>
       
             <Slider  {...settings}>

             <div className="slider-image1">
             <img src="images/slider/motor_servicing/1-min.jpg" alt="" srcset="" />
           </div>
         
         
           </Slider>

           </>
           :
           
            currentURLSplit[currentURLSplit.length - 1] == "garage_equipment" ||   currentURLSplit[currentURLSplit.length - 1] == "garage_equipment_sidebar"?  
            <>
       
             <Slider  {...settings}>

             <div className="slider-image1">
             <img src="images/slider/garage_equipment/1-min.jpg" alt="" srcset="" />
           </div>
         
         
           </Slider>
           </>
           
           :
           currentURLSplit[currentURLSplit.length - 1] == "spare_parts"  || currentURLSplit[currentURLSplit.length - 1] =="spareparts_sidebar"?  
            <>
       
             <Slider  {...settings}>

             <div className="slider-image1">
             <img src="images/slider/spare_parts/1-min.jpg" alt="" srcset="" />
           </div>
         
         
           </Slider>
           </>
           :
           currentURLSplit[currentURLSplit.length - 1] == "electric_motorcycle" ||  currentURLSplit[currentURLSplit.length - 1] == "electric_motorcycle_sidebar"?  
            <>
       
             <Slider  {...settings}>

             <div className="slider-image1">
             <img src="images/slider/electric_motorcycle/1-min.jpg" alt="" srcset="" />
           </div>
         
         
           </Slider>
           </>

           :
           
           currentURLSplit[currentURLSplit.length - 1] == "forlift" ||  currentURLSplit[currentURLSplit.length - 1] == "forklit_sidebar" ?  
           <>
      
            <Slider  {...settings}>

            <div className="slider-image1">
            <img src="images/slider/forlift/1-min.jpg" alt="" srcset="" />
          </div>
        
        
          </Slider>
          </>
          :

          currentURLSplit[currentURLSplit.length - 1] == "construction_machinery" ||currentURLSplit[currentURLSplit.length - 1] == "construction_sidebar"?  
          <>

           <Slider  {...settings}>

           <div className="slider-image1">
              <img src="images/slider/construction_machinery/1-min.jpg" alt="" srcset="" />
          </div>
         </Slider>
         </>
         :  
         currentURLSplit[currentURLSplit.length - 1] == "special_vehicles" ||   currentURLSplit[currentURLSplit.length - 1] == "special_vehicle_sidebar" ?  
         <>

          <Slider  {...settings}>

          <div className="slider-image1">
             <img src="images/slider/special_vehicles/1-min.jpg" alt="" srcset="" />
          </div>
        </Slider>
        </>
          :  
          currentURLSplit[currentURLSplit.length - 1] == "light_duty_sidebar" ||currentURLSplit[currentURLSplit.length - 1] == "meduim_duty_sidebar"?  
          <>
 
           <Slider  {...settings}>
 
           <div className="slider-image1">
              <img src="images/slider/Light_Duty_Truck/1-min.jpg" alt="" srcset="" />
           </div>
         </Slider>
         </>
         :  
         currentURLSplit[currentURLSplit.length - 1] == "heavy_duty_sidebar"?  
         <>

          <Slider  {...settings}>

          <div className="slider-image1">
             <img src="images/slider/Heavy_Duty_Truck/1-min.jpg" alt="" srcset="" />
          </div>
        </Slider>
        </>

         :  
         currentURLSplit[currentURLSplit.length - 1] == "dump_truck"?  
         <>

          <Slider  {...settings}>

          <div className="slider-image1">
             <img src="images/slider/Dump_Truck/1-min.jpg" alt="" srcset="" />
          </div>
         </Slider>
         </>

          :  
            currentURLSplit[currentURLSplit.length - 1] == "prime_mover"?  
            <>

             <Slider  {...settings}>

             <div className="slider-image1">
                <img src="images/slider/Prime_Mover/1-min.jpg" alt="" srcset="" />
             </div>
            </Slider>
            </>

:  
currentURLSplit[currentURLSplit.length - 1] == "rmc_sidebar"?  
<>

 <Slider  {...settings}>

 <div className="slider-image1">
    <img src="images/slider/RMC/1-min.jpg" alt="" srcset="" />
 </div>
</Slider>
</>

:  
currentURLSplit[currentURLSplit.length - 1] == "concrete_sidebar"?  
<>

 <Slider  {...settings}>

 <div className="slider-image1">
    <img src="images/slider/concrete/1-min.jpg" alt="" srcset="" />
 </div>
</Slider>
</>
:  
currentURLSplit[currentURLSplit.length - 1] == "battery_sidebar" || currentURLSplit[currentURLSplit.length - 1] == "akij_cng_sidebar"?  
<>

 <Slider  {...settings}>

 <div className="slider-image1">
    <img src="images/slider/Akij_CNG/1-min.jpg" alt="" srcset="" />
 </div>
</Slider>
</>
         :
          ""
      
      }
        </div>
      );
};

export default Carousel;
