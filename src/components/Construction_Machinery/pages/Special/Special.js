import React from "react";
import Btn from "../../components/Btn/Btn";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import backhoe from "../../images/backhoe-loader.jpg";

import Title from "../../components/Title/Title";
import TruckSlider from "../../components/TruckSlider/TruckSlider";
import CDM514B from "../../images/CDM514B.jpg";
import "./Special.scss";
function Special_Cars() {
  return (
    <div className="special pt-5">
      <div className="rooler">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="features">
                <div className="rooler__title">
                  <Title title="Vibratory Rollers - CDM514B" />
                </div>
                <div className="feature pt-4">
                  <p>Model</p>
                  <p>CDM 514B</p>
                </div>
                <div className="feature">
                  <p>Engine Model</p>
                  <p>WP6G125E202</p>
                </div>
                <div className="feature">
                  <p>Capacity/Operating weight (Kg)</p>
                  <p>14000</p>
                </div>
                <div className="feature">
                  <p>KW(Rated/RPM )</p>
                  <p>92/2000</p>
                </div>
                <div className="feature">
                  <p>Static Liner Load (N/CM)</p>
                  <p>490</p>
                </div>
                <div className="feature">
                  <p>Minimum Turning Radius (MM)</p>
                  <p>6300</p>
                </div>
                <div className="text-center">
                  <Btn />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rooler__img">
                <img src={CDM514B} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="silde mt-5">
        <div className="container">
          <TruckSlider
            image1={slide1}
            image2={slide2}
            image3={slide3}
            title2="Hydraulic Excavator - CDM6225"
            title1="Vibratory Rollers CDM 5033DD"
            title3="Wheel Loader CDM 853"
          />
        </div>
      </div>








      <div className="backhoe">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="features">
                <div className="rooler__title">
                  <Title title="Backhoe Loader" />
                </div>
                <div className="feature pt-4">
                  <p>LxWxH</p>
                  <p>5899x2350x3650mm</p>
                </div>
                <div className="feature">
                  <p>Overall width (Outside of rear wheel)</p>
                  <p> 2240mm</p>
                </div>
                <div className="feature">
                  <p>Max. dumping height</p>
                  <p> 2176mm</p>
                </div>
                <div className="feature">
                  <p>Dumping distance</p>
                  <p> 819mm</p>
                </div>
                <div className="feature">
                  <p>Min. ground clearance</p>
                  <p>346mm</p>
                </div>
                <div className="feature">
                  <p>Wheel tread(front/rear)</p>
                  <p>1928/1790mm</p>
                </div>
                <div className="text-center">
                  <Btn />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="backhoe__img">
                <img src={backhoe} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special_Cars;
