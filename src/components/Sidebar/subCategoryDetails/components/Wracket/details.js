import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Details_Wracker = () => {
  return (
    <>
      <div className="product__details__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="productDetails__card">
                <div className="row d-flex ">
                  <div className="col-md-6">
                    <div className="productDetailsCard__img">
                      <img src="images/3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft">
                          <br />
                          {/* add name here*/}
                          <h4>Wrecker</h4> <br />
                          <br />
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
                    <h6>Outline size(L×W×H) (mm)</h6>
                    <h6> 9280×2495×3120</h6>
                  </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h6>Rating mass(kg) / Empty mass(Kg)</h6>
                    <h6>14370</h6>
                  </div>
                  <div className="even__content">
                    <h6> Full mass(kg)</h6>
                    <h6>16000</h6>
                  </div>
                  <div className="even__content">
                    <h6>Emission standard</h6>
                    <h6>Euro 2 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Engine</h6>
                    <h6>WD615.62 ((weichai) </h6>
                  </div>

                  <div className="even__content">
                    <h6>Type</h6>
                    <h6>6 Cylinder Diesel engine </h6>
                  </div>

                  <div className="even__content">
                    <h6>Power/displacement(KW/ML)</h6>
                    <h6> 9726 </h6>
                  </div>

                  <div className="even__content">
                    <h6>Wheelbase(mm)</h6>
                    <h6>5600 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Axle load(kg) F/R Front/ Rear</h6>
                    <h6> 7000/13500</h6>
                  </div>
                  <div className="even__content">
                    <h6>Tire</h6>
                    <h6> 11.00-20,11.00R20</h6>
                  </div>
                  <div className="even__content">
                    <h6>Max speed (km/h)</h6>
                    <h6>90 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Front overhang(mm)</h6>
                    <h6> 1560</h6>
                  </div>
                  <div className="even__content">
                    <h6>Rear overhang(mm)</h6>
                    <h6>2120 </h6>
                  </div>
                  <div className="even__content">
                    <h6> Front track(mm)</h6>
                    <h6>1958,1939</h6>
                  </div>
                  <div className="even__content">
                    <h6>Rear track(mm)</h6>
                    <h6>1800 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Approach angel(°)</h6>
                    <h6>15 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Departure angle(°)</h6>
                    <h6>20 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Steering</h6>
                    <h6> Power steering</h6>
                  </div>

                  <div className="even__content">
                    <h6>Brake</h6>
                    <h6> Air brake </h6>
                  </div>
                  <div className="even__content">
                    <h6>Cabin</h6>
                    <h6>Straight head ,single row with bed</h6>
                  </div>
                  <div className="even__content">
                    <h6>Rating lifting capacity(kg)</h6>
                    <h6> 1500</h6>
                  </div>
                  <div className="even__content">
                    <h6>Maximum crane height(mm)</h6>
                    <h6> 5000 </h6>
                  </div>

                  <div className="even__content">
                    <h6>Bracket arm extend-retract distance (mm)</h6>
                    <h6> 700</h6>
                  </div>

                  <div className="even__content">
                    <h6>Crane arm extend-retract distance (mm) </h6>
                    <h6> 3000 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Bracket arm maximum length(mm) </h6>
                    <h6> 3100 </h6>
                  </div>

                  <div className="even__content">
                    <h6>Maximum towing speed(km/h)</h6>
                    <h6>40 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Maximum crane capacity(kg)</h6>
                    <h6>8000×2 NO.</h6>
                  </div>

                  <div className="even__content">
                    <h6>Support leg</h6>
                    <h6> 2</h6>
                  </div>

                  <div className="even__content">
                    <h6>Rating towing capacity(kg)</h6>
                    <h6> 8000×2 </h6>
                  </div>

                  <div className="even__content">
                    <h6>Leg span(mm)</h6>
                    <h6> 800 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Steel wire rope length(m)</h6>
                    <h6> 40 </h6>
                  </div>

                  <div className="even__content">
                    <h6>Maximum support strength(KN)</h6>
                    <h6>120 </h6>
                  </div>
                  <div className="even__content">
                    <h6>Wire rope speed(m/min)</h6>
                    <h6>8 </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            AKIJ Motors, one of the biggest auto mobile companies in Bangladesh.
            It has been working since 2016 with trust &amp; reputation. Akij
            Motors solely believes in total customer satisfaction with "Trust
            &amp; Mutual Benefit".The mission is to become an enterprise which
            fulfills its customers' needs and aspirations for the automobile
            with innovative technologies &amp; services. Our vision is mobility
            and powerful Bangladesh, powered by "Akij Motors" &amp; "Car for
            all" (সবার জন্য গাড়ী). Read More...
          </p>
          <h6 className="mt-5 btm__item">
            *Please be informed "AKIJ Motors" has every rights to change the
            content without any prior notice.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Details_Wracker;
