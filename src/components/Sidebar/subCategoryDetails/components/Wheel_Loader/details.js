import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Details_Wheel_Loader  = () => {
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
                      <img src="images/wheel-loader.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft"><br/>
                            {/* add name here*/}
                          <h4>Wheel Loader CDM 853</h4> <br/><br/><br/><br/>
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
                                      <h3>Model</h3>
                                      <h3> 	LONKING CDM 853</h3>
                                    </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h3>Engine</h3>
                    <h3>   	Weichai</h3>
                  </div>
                  <div className="even__content">
                    <h3> CC (L)</h3>
                    <h3>9.3

                      </h3>
                  </div>
                  <div className="even__content">
                    <h3>KW(Rated/Net)</h3>
                    <h3> 	

                      162</h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>HP</h3>
                    <h3> 	

                      220</h3>
                  </div>

                  <div className="even__content">
                    <h3>Bucket Size m3</h3>
                    <h3> 3 </h3>
                  </div>

                  <div className="even__content">
                    <h3>Operating Weight (kg)</h3>
                    <h3> 	

                      15,950</h3>
                  </div>
                  
                  <div className="even__content">
                    <h3>Fuel tank (L)</h3>
                    <h3>  	360</h3>
                  </div>
                  <div className="even__content">
                    <h3>Engine Oil (L)</h3>
                    <h3> 	

                      20</h3>
                  </div>
                
                  <div className="even__content">
                    <h3>Hydraulic Oil (L)</h3>
                    <h3>360</h3>
                  </div>
                  <div className="even__content">
                    <h3>Payload (kg)</h3>
                    <h3>5000 </h3>
                  </div>
                  <div className="even__content">
                    <h3>Transmission</h3>
                    <h3> 	Lonking Transmission </h3>
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
    </div>
    </div>
          </>
  );
}

export default Details_Wheel_Loader;