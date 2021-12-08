import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Details_Wracker  = () => {
  return (
    <>
      <div className="product__details__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="productDetails__card">
                <div className="row d-flex ">
                  <div className="col-md-6">
                    <div className="productDetailsCard__img"><br/><br/>
                      <img src="images/3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft"><br/>
                            {/* add name here*/}
                          <h4>Wrecker</h4> <br/><br/><br/><br/>
                            {/*  add name here*/}
                        </div>
                        <div className="Share__icon">
                          <AiOutlineShareAlt className="icn" />
                        </div>
                      </div>
                      <div className="btm__content mt-5">
                        <h5>For more information</h5>
                        <h6>
                          <BsTelephoneFill className="me-3" />
                          +88 01777-773452
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="batch">
                <div className="batch__header">
                  <img src="productImages/batch.jpeg" alt="" />
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spcification">
        <div className="container">
          <div className="title__spc">
            <h1>Specification</h1>
          </div>
          <div className="spc__content">
            <div className="row">
              <div className="col-lg-8">
                <div className="right__spc">
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                                      <h3>Outline size(L×W×H) (mm)</h3>
                                      <h3> 9280×2495×3120</h3>
                                    </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h3>Rating mass(kg) / Empty mass(Kg)</h3>
                    <h3>14370</h3>
                  </div>
                  <div className="even__content">
                    <h3> Full mass(kg)</h3>
                    <h3>16000</h3>
                  </div>
                  <div className="even__content">
                    <h3>Emission standard</h3>
                    <h3> 	

                      Euro 2   </h3>
                  </div>
                  <div className="even__content">
                    <h3>Engine</h3>
                    <h3>WD615.62 ((weichai)  </h3>
                  </div>
                  
                  
                  <div className="even__content">
                    <h3>Type</h3>
                    <h3>6 Cylinder Diesel engine   </h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Power/displacement(KW/ML)</h3>
                    <h3> 9726 </h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Wheelbase(mm)</h3>
                    <h3>  	

                      5600 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Axle load(kg) F/R Front/ Rear</h3>
                    <h3> 7000/13500</h3>
                  </div>
                  <div className="even__content">
                    <h3>Tire</h3>
                    <h3> 11.00-20,11.00R20</h3>
                  </div>
                  <div className="even__content">
                    <h3>Max speed (km/h)</h3>
                    <h3> 	

                      90 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Front overhang(mm)</h3>
                    <h3> 1560</h3>
                  </div>
                  <div className="even__content">
                    <h3>Rear

                      overhang(mm)</h3>
                    <h3>
                      2120 </h3>
                  </div>
                  <div className="even__content">
                    <h3> Front track(mm)</h3>
                    <h3>1958,1939</h3>
                  </div>
                  <div className="even__content">
                    <h3>Rear track(mm)</h3>
                    <h3>1800 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Approach angel(°)</h3>
                    <h3>15  </h3>
                  </div>
                  <div className="even__content">
                    <h3>Departure angle(°)</h3>
                    <h3>    	

                      20 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Steering</h3>
                    <h3>  Power steering</h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Brake</h3>
                    <h3>   Air brake  </h3>
                  </div>
                  <div className="even__content">
                    <h3>Cabin</h3>
                    <h3>Straight head ,single row with bed</h3>
                  </div>
                  <div className="even__content">
                    <h3>Rating lifting capacity(kg)</h3>
                    <h3> 1500</h3>
                  </div>
                  <div className="even__content">
                    <h3>Maximum crane height(mm)</h3>
                    <h3> 	5000  </h3>
                  </div>
                
                  <div className="even__content">
                    <h3>Bracket arm extend-retract distance (mm)</h3>
                    <h3> 700</h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Crane arm extend-retract distance (mm) </h3>
                    <h3> 3000 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Bracket arm maximum length(mm) </h3>
                    <h3> 3100 </h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Maximum towing speed(km/h)</h3>
                    <h3>  	

                      40 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Maximum crane capacity(kg)</h3>
                    <h3>8000×2 NO.</h3>
                  </div>
                  
                
                  <div className="even__content">
                    <h3>Support leg</h3>
                    <h3> 2</h3>
                  </div>
                  
                  
                  
                
                  
                  <div className="even__content">
                    <h3>Rating towing capacity(kg)</h3>
                    <h3>  8000×2 </h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Leg span(mm)</h3>
                    <h3> 800 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Steel wire rope length(m)</h3>
                    <h3>  40 </h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Maximum support strength(KN)</h3>
                    <h3>120 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Wire rope speed(m/min)</h3>
                    <h3>8 </h3>
                  </div>


                </div>
              </div>
             
 
 

            </div>
          </div>
          <p>
            AKIJ Motors, one of the biggest auto mobile companies in Bangladesh.
            It has been working since 2016 with trust &amp; reputation. Akij Motors
            solely believes in total customer satisfaction with "Trust &amp; Mutual
            Benefit".The mission is to become an enterprise which fulfills its
            customers' needs and aspirations for the automobile with innovative
            technologies &amp; services. Our vision is mobility and powerful
            Bangladesh, powered by "Akij Motors" &amp; "Car for all" (সবার জন্য
            গাড়ী). Read More...
          </p>
          <h3 className="mt-5 btm__item">
            *Please be informed "AKIJ Motors" has every rights to change the
            content without any prior notice.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Details_Wracker;