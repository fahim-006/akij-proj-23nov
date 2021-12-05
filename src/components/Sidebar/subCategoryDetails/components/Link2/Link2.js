import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

function Link2() {
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
                      <img src="images/Commercial_Vehicles/4.PNG" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft"><br/>
                            {/* add name here*/}
                          <h4>AKIJ Pickup/Covered Van (Druti) 1.0 Ton Petrol/CNG/LPG</h4> <br/><br/><br/><br/>
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
                    <li>Delivery on both cash and hire purchase.</li>
                    <li>Installment period maximum upto 36 months.</li>
                    <li>6 times free services</li>
                    <li>For covered van body making charge is applicable.</li>
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
                                      <h3>মডেল</h3>
                                      <h3>দ্রুতি ১ টন পিকআপ (পেট্রোল/সিএনজি/এলপিজি)</h3>
                                    </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h3>ইঞ্জিন</h3>
                    <h3>EQ465i-21, ৪ সিলিন্ডার, ফোর স্টোক, ওয়াটার কুল, টপ ক্যাম, ইলেকট্রিক ইনজেকশন</h3>
                  </div>
                  <div className="even__content">
                    <h3>পাওয়ার</h3>
                    <h3>৩৮.৫ কিলো-ওয়াট, ৫২.৪ এইচ পি</h3>
                  </div>
                  <div className="even__content">
                    <h3>পিস্টন ডিসপ্লেসমেন্ট</h3>
                    <h3>১০৫১ সিসি</h3>
                  </div>
                  <div className="even__content">
                    <h3>জ্বালানী</h3>
                    <h3>পেট্রোল/সিএনজি/এলপিজি</h3>
                  </div>
                  <div className="even__content">
                    <h3>আর পি এম</h3>
                    <h3>৭৫০+/- ৫০</h3>
                  </div>
                  <div className="even__content">
                    <h3>গিয়ার</h3>
                    <h3>(৫+১)</h3>
                  </div>
                  <div className="even__content">
                    <h3>ক্লাচ</h3>
                    <h3>সিংগেল প্লেট, ড্রাই ফ্রিকশন ডায়াফ্রাম</h3>
                  </div>
                  <div className="even__content">
                    <h3>স্টিয়ারিং</h3>
                    <h3>মেকানিক্যাল</h3>
                  </div>
                  <div className="even__content">
                    <h3>সাসপেনশন</h3>
                    <h3>কয়েল স্প্রিং</h3>
                  </div>
                  <div className="even__content">
                    <h3>সর্বোচ্চ গতি</h3>
                    <h3>ঘণ্টায় ১০০ কিঃমিঃ</h3>
                  </div>
                  <div className="even__content">
                    <h3>হুইল বেজ</h3>
                    <h3>২৭৬০ মিঃ মিঃ</h3>
                  </div>
                  <div className="even__content">
                    <h3>কার্গো বডি ডাইমেনশন</h3>
                    <h3>দৈর্ঘ্য ৮.২০ ফিট x প্রস্থ ৪.৭২ ফিট x উচ্চতা ১.১২ ফিট</h3>
                  </div>
                  <div className="even__content">
                    <h3>ওভার অল ডাইমেনশন</h3>
                    <h3>দৈর্ঘ্য ১৪.৪০ ফিট x প্রস্থ ৫.১২ ফিট x উচ্চতা ৬ ফিট</h3>
                  </div>
                  <div className="even__content">
                    <h3>কার্বওয়েট</h3>
                    <h3>৯০০ কেজি</h3>
                  </div>
                  <div className="even__content">
                    <h3>টায়ার</h3>
                    <h3>১৬৫ R13, (৪+১)</h3>
                  </div>
                  <div className="even__content">
                    <h3>ব্রেক</h3>
                    <h3>ফ্রন্ট ডিস্ক ব্রেক, রিয়ার ড্রাম ব্রেক</h3>
                  </div>
                  <div className="even__content">
                    <h3>পে-লোড</h3>
                    <h3>১০০০ কেজি</h3>
                  </div>
                  <div className="even__content">
                    <h3>ব্যাটারি</h3>
                    <h3>১২ ভোল্ট, ৬০ এম্পিয়ার</h3>
                  </div>
                  <div className="even__content">
                    <h3>ফুয়েল ট্যাঙ্ক</h3>
                    <h3>৪০ লিটার</h3>
                  </div>
                  <div className="even__content">
                    <h3>ড্রাইভিং</h3>
                    <h3>৪X২</h3>
                  </div>
        
                </div>
              </div>
 
 
 
{/* delete this portion if features are not available*/}
              <div className="col-lg-4">
                <div className="fetr__area">
                  <h1>Conversion</h1>
                  <h4>CNG conversion cost 75 Liters 65,000 Taka</h4>
                 {/*copy this portion to add new feature*/} 
                 <h4>LPG conversion cost - Taka.</h4>
                    {/*copy this portion to add new feature*/} 
                </div>
              </div>
{/* delete this portion if features are not available*/}
 
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
 
export default Link2;
