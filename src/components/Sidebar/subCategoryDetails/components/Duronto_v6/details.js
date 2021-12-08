import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Details_Duronto_V6  = () => {
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
                    <img src="/images/ELECTRIC_MOTORCYCLE/7.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="productDetails__content">
                    <div className="top__product__content d-flex">
                      <div className="top__lft"><br/>
                          {/* add name here*/}
                        <h6>Electric Motorcycle Durdanto V6</h6> <br/><br/><br/><br/>
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
                <h5>Conditional warranty:</h5>
              </div>
              <small>
          {/* add  new Terms & Conditions: is added*/}
                <ol>
                  <li>Delivery on both cash and hire purchase.</li>
                  <li>For hire purchase, minimum down payment is 30%..</li>
                  <li>Registration &amp; Insurance are free of charge.</li>
                 
                  <li>Installment period maximum upto 36 months.</li>
                  <li>6 times free services</li>
                  <li> For covered van body making charge is applicable.
                  </li>
                 
                 {/*copy*/}<li>Delivery on both cash and hire purchase.</li>{/*copy*/} 
                </ol>
                {/* add  new Terms & Conditions: is added*/}
                
              </small>
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
                                      <h6>মডেল</h6>
                                      <h6> 	3000 W</h6>
                                    </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h6>Top Speed</h6>
                    <h6>	80-90 KM/H </h6>
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
          <h6 className="mt-5 btm__item">
            *Please be informed "AKIJ Motors" has every rights to change the
            content without any prior notice.
          </h6>
        </div>
      </div>
  </>
  );
}

export default Details_Duronto_V6;