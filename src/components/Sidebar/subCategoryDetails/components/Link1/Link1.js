import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Link1  = () => {
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
                          <img src="/images/Commercial_Vehicles/mini_truck_pankhiuraj_1ton_duesel.PNG" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="productDetails__content">
                          <div className="top__product__content d-flex">
                            <div className="top__lft"><br/>
                                {/* add name here*/}
                              <h6>AKIJ Pickup/Mini Truck (Ponkhiraj Plus) 1.2 Ton Diesel</h6> <br/><br/><br/><br/>
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
                                          <h6>পঙ্খিরাজ ১.২ টন</h6>
                                        </div>
                      {/* add this portion if new specification is added*/}
                      <div className="even__content">
                        <h6>ইঞ্জিন</h6>
                        <h6> 	সুজুকি টেকনোলজি, QC480Q, ভাটিকাল, ইন-লাইন ফোর সিলিন্ডার, ফোর স্টোক,ডাইরেক্ট ইনজেকশন ।</h6>
                      </div>
                      <div className="even__content">
                        <h6>পাওয়ার</h6>
                        <h6>২৯ কিলো-ওয়াট (৪০ হর্স পাওয়ার ) @ ৩০০০ আর পি এম</h6>
                      </div>
                      <div className="even__content">
                        <h6>টর্ক</h6>
                        <h6>১০৪ এন এম @ ২০০০ আর পি এম</h6>
                      </div>
                      <div className="even__content">
                        <h6>পিস্টন ডিসপ্লেসমেন্ট</h6>
                        <h6>১৮০৯ সিসি</h6>
                      </div>
                      <div className="even__content">
                        <h6>গিয়ার</h6>
                        <h6>LG515QX3 (5+1)</h6>
                      </div>
                      <div className="even__content">
                        <h6>ক্লাচ</h6>
                        <h6>ডায়াফ্রাম স্প্রিং টাইপ</h6>
                      </div>
                      <div className="even__content">
                        <h6>স্টিয়ারিং</h6>
                        <h6>মেকানিক্যাল</h6>
                      </div>
                      <div className="even__content">
                        <h6>সাসপেনশন</h6>
                        <h6>লিফ স্প্রিং, ফ্রন্ট ৬, রিয়ার ৫+৩</h6>
                      </div>
                      <div className="even__content">
                        <h6>ফ্রন্ট এক্সেল</h6>
                        <h6>স্টিল টিউব ওয়েলডেট টাইপ</h6>
                      </div>
                      <div className="even__content">
                        <h6>রিয়ার এক্সেল রেশিও</h6>
                        <h6>৫.৮৩৩</h6>
                      </div>
                      <div className="even__content">
                        <h6>শক এবজর্বার</h6>
                        <h6>হাইড্রোলিক ডাবল এক্টিং টেলিস্কোপিক টাইপ</h6>
                      </div>
                      <div className="even__content">
                        <h6>সর্বোচ্চ গতি</h6>
                        <h6>ঘণ্টায় ৯০ কিঃমিঃ</h6>
                      </div>
                      <div className="even__content">
                        <h6>কেবিন</h6>
                        <h6>টিল্ট টাইপ, ১৫৫০ মিঃমিঃ , এয়ারকাট সিস্টেম</h6>
                      </div>
                      <div className="even__content">
                        <h6>হুইলবেস</h6>
                        <h6>২৪০০ মিঃমিঃ</h6>
                      </div>
                      <div className="even__content">
                        <h6>কার্গো বডি ডাইমেনশন</h6>
                        <h6>দৈর্ঘ্য ২৯৩০ মিঃমিঃ x প্রস্থ ১৬১০ মিঃমিঃ x উচ্চতা ৩৬০ মিঃমিঃ</h6>
                      </div>
                      <div className="even__content">
                        <h6>টোটাল ডাইমেনশন</h6>
                        <h6>দৈর্ঘ্য ৪৬৩০ মিঃমিঃ x প্রস্থ ১৭৪০ মিঃমিঃ x উচ্চতা ২০৪০ মিঃমিঃ</h6>
                      </div>
                      <div className="even__content">
                        <h6>কার্বওয়েট</h6>
                        <h6>১৬৫০ কেজি</h6>
                      </div>
                      <div className="even__content">
                        <h6>টায়ার</h6>
                        <h6>৬.০০ R14 ,  ৬ টায়ার</h6>
                      </div>
                      <div className="even__content">
                        <h6>ব্রেক সিস্টেম</h6>
                        <h6>হাইড্রোলিক ড্রাম অয়েল ব্রেক</h6>
                      </div>
                      <div className="even__content">
                        <h6>পে-লোড</h6>
                        <h6>১২০০ কেজি</h6>
                      </div>
                      <div className="even__content">
                        <h6>গাড়ীর সর্বমোট ওজন</h6>
                        <h6> ২৯৮০ কেজি</h6>
                      </div>
                      <div className="even__content">
                        <h6>ব্যাটারি</h6>
                        <h6>১২ ভোল্ট, ৮০ এম্পিয়ার</h6>
                      </div>
                      <div className="even__content">
                        <h6>ফুয়েল ট্যাংক</h6>
                        <h6>৪০ লিটার (অ্যালুমিনিয়াম বডি)</h6>
                      </div>
    
                    </div>
                  </div>
     
     
     
    {/* delete this portion if features are not available*/}
                  <div className="col-lg-4">
                    <div className="fetr__area">
                      <h1>Conversion</h1>
                      <h6>CNG conversion cost 75 Liters 65,000 Taka</h6>
                     {/*copy this portion to add new feature*/} 
                     <h6>LPG conversion cost - Taka.</h6>
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
              <h6 className="mt-5 btm__item">
                *Please be informed "AKIJ Motors" has every rights to change the
                content without any prior notice.
              </h6>
            </div>
          </div>
        </>
      );
    
}

export default Link1;