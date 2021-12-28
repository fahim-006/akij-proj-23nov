import React from "react";
import Title from "../../components/Title/Title";
import fuel from "../../images/fuel-tanker.jpg";
import Capture from "../../images/Capture.PNG";
import Capture1 from "../../images/Capture1.PNG";
import Capture2 from "../../images/Capture2.PNG";
import fire from "../../images/fire-fighting.jpg";
import refrigerator from "../../images/refrigerator-van.jpg";
import mounted from "../../images/tuck-mounted-crane.jpg";
import wrecker from "../../images/wrecker-forland.jpg";
import garbage from "../../images/garbage-truck.jpg";

import "./ConcreteMachinery.scss";
import TruckSlider from "../../components/TruckSlider/TruckSlider";
import Btn from "../../components/Btn/Btn";
function ConcreteMachinery() {
  return (
    <div className="concrete__area">
      <div className="container">
        <div className="fuel__truck">
          <div className="row">
            <div className="col-md-6">
              <div className="fuel__img">
                <img src={fuel} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="fuel__title">
                <Title title="Fuel/Oil/Water Tanker" />
              </div>
              <div className="features mt-3">
                <div className="feature">
                  <p>Wheel base (mm)</p>
                  <p>4500</p>
                </div>
                <div className="feature">
                  <p>Dimensions (mm)</p>
                  <p>8126X2500X3160</p>
                </div>
                <div className="feature">
                  <p>Curb weight （kg</p>
                  <p>7950</p>
                </div>
                <div className="feature">
                  <p>Front overhang/rear overhang (mm)</p>
                  <p>1410/2216</p>
                </div>
                <div className="feature">
                  <p>Approach angle/Departure angle</p>
                  <p>26/25</p>
                </div>
                <div className="feature">
                  <p>Min. Ground clearance (mm)</p>
                  <p>500</p>
                </div>
              </div>
              <div className="feature__img">
                <img src={Capture} alt="" />
                <img src={Capture1} alt="" />
                <img src={Capture2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gurbage">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="gurbage__img">
                <img src={garbage} alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="features">
                <div className="rooler__title">
                  <Title title="Garbage Truck (4x2)" />
                </div>
                <div className="feature pt-4">
                  <p>Wheel base (mm)</p>
                  <p>4500</p>
                </div>
                <div className="feature">
                  <p>Dimensions (mm)</p>
                  <p>8620X2500X3260</p>
                </div>
                <div className="feature">
                  <p>Curb weight （kg</p>
                  <p>7950</p>
                </div>
                <div className="feature">
                  <p>Front overhang/rear overhang (mm)</p>
                  <p>1410/2216</p>
                </div>
                <div className="feature">
                  <p>Approach angle/Departure angle</p>
                  <p>26/25</p>
                </div>
                <div className="feature">
                  <p>Min. Ground clearance (mm)</p>
                  <p>500</p>
                </div>
                <div className="text-center">
                  <Btn />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="new">
        <div className="container">
          <div className="new__title d-flex flex-column align-items-center">
            <Title title="New Release Vehicle" />
            <p className="mt-3">
              Cycling requires no gasoline and, therefore, no harmful vehicle
              emissions
              <br /> or smog are released into the air when a person is riding
              his or her bicycle
            </p>
          </div>
          <div className="slider pt-5">
            <TruckSlider
              image1={refrigerator}
              image2={mounted}
              image3={wrecker}
              title2="Special Mounted Crane"
              title1="Refrigerator VAN"
              title3="Wrecker"
            />
          </div>
        </div>
      </div>
      <div className="fire">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="fire__title">
                <h1 className="text-center">Fire Fighting and Rescue</h1>
              </div>
              <div className="features pt-5">
                <div className="feature">
                  <p>Truck dimensxxvs</p>
                  <p>6790X2180X2900 mm</p>
                </div>
                <div className="feature">
                  <p>Water tank dimensions</p>
                  <p>Depend on design</p>
                </div>
                <div className="feature">
                  <p>Water tank capacity</p>
                  <p>4 3 cubic motor</p>
                </div>
                <div className="feature">
                  <p>Thickness of water tank body</p>
                  <p>4.5mm</p>
                </div>
                <div className="feature">
                  <p>Foam tank capacity</p>
                  <p>0 5 cubic meter</p>
                </div>
                <div className="feature">
                  <p>water tank material</p>
                  <p>stainless steel Q235B</p>
                </div>
              </div>
              <div className="text-center">
                <Btn />
              </div>
            </div>
            <div className="col-md-6">
              <div className="fire__img">
                <img src={fire} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConcreteMachinery;
