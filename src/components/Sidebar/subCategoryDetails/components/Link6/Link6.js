import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Link6 = () => {
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
                      <img src="images/Commercial_Vehicles/9.PNG" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft">
                          <br />
                          {/* add name here*/}
                          <h4>AKIJ Pickup (Borak) 3.0 Ton Diesel</h4> <br />
                          <br />
                          <br />
                          <br />
                          {/*  add name here*/}
                        </div>
                        <div className="Share__icon">
                          <AiOutlineShareAlt className="icn" />
                        </div>
                      </div>
                      <div className="btm__content mt-5">
                        <h6>For more information</h6>
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
                  <h6>Conditional warranty:</h6>
                </div>
                <small>
                  {/* add  new Terms & Conditions: is added*/}
                  <ol>
                    <li>Delivery on both cash and hire purchase.</li>
                    <li>For hire purchase, minimum down payment is 30%..</li>
                    <li>Registration &amp; Insurance are free of charge.</li>

                    <li>Installment period maximum upto 36 months.</li>
                    <li>6 times free services</li>
                    <li> For covered van body making charge is applicable.</li>

                    {/*copy*/}
                    <li>Delivery on both cash and hire purchase.</li>
                    {/*copy*/}
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
                    <h6>বোরাক ৩ টন পিকআপ</h6>
                  </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h6>ইঞ্জিন</h6>
                    <h6>
                      ইসুজু, JE493ZlQ3A, ৪ সিলিন্ডার, ওয়াটার কুল, ইন্টার কুলার,
                      টার্বো চার্জার
                    </h6>
                  </div>
                  <div className="even__content">
                    <h6>পাওয়ার</h6>
                    <h6>৭৫ কে ডব্লিউ (১০২ এইচ পি) @ ৩৬০০ আর পি এম</h6>
                  </div>
                  <div className="even__content">
                    <h6>টর্ক</h6>
                    <h6> ২৪০ এন এম ২০০০ আর পি এম</h6>
                  </div>
                  <div className="even__content">
                    <h6>পিস্টন ডিসপ্লেসমেন্ট</h6>
                    <h6> ২৭৭১ সিসি</h6>
                  </div>
                  <div className="even__content">
                    <h6>গিয়ার</h6>
                    <h6>LC5T28 (5+1)</h6>
                  </div>
                  <div className="even__content">
                    <h6>ক্লাচ</h6>
                    <h6> ২৬৫ মিঃ মিঃ</h6>
                  </div>
                  <div className="even__content">
                    <h6>স্টিয়ারিং</h6>
                    <h6>হাইড্রোলিক পাওয়ার স্টিয়ারিং</h6>
                  </div>
                  <div className="even__content">
                    <h6>সাসপেনশন</h6>
                    <h6>
                      লিফ স্প্রিং, ফ্রন্ট ৬+ শক এবজার্বার, রিয়ার ৯+৫ শক
                      এবজার্বার
                    </h6>
                  </div>
                  <div className="even__content">
                    <h6>গ্রেডিয়েবিলিটি</h6>
                    <h6> ২৯.০০%</h6>
                  </div>
                  <div className="even__content">
                    <h6>রিয়ার এক্সেল রেশিও</h6>
                    <h6> ৬.১৬৭</h6>
                  </div>

                  <div className="even__content">
                    <h6>সর্বোচ্চ গতি</h6>
                    <h6> ১০৪ কে.এম.পি</h6>
                  </div>
                  <div className="even__content">
                    <h6>কেবিন</h6>
                    <h6> ১৯০০ মিঃ মিঃ, এরোডাইনামিক ইনক্লুড এক্সহস্ট সিস্টেম</h6>
                  </div>
                  <div className="even__content">
                    <h6>হুইলবেস</h6>
                    <h6> ৩৩৬০ মিঃ মি/৯.৩৫ ফিট</h6>
                  </div>
                  <div className="even__content">
                    <h6>কার্গো বডি ডাইমেনশন</h6>
                    <h6>
                      দৈর্ঘ্য ৪২০০ মিঃমিঃ x প্রস্থ ২০৫০ মিঃমিঃ x উচ্চতা ৪০০
                      মিঃমিঃ
                    </h6>
                  </div>
                  <div className="even__content">
                    <h6>টোটাল ডাইমেনশন</h6>
                    <h6>
                      দৈর্ঘ্য ৫৯৯৭ মিঃমিঃ x প্রস্থ ২০৫০ মিঃমিঃ x উচ্চতা ২৩৬৫
                      মিঃমিঃ
                    </h6>
                  </div>
                  <div className="even__content">
                    <h6>কার্বওয়েট</h6>
                    <h6> ২৭৫০ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6>টায়ার</h6>
                    <h6> ৭.০০ R16LT, (৬+১)</h6>
                  </div>
                  <div className="even__content">
                    <h6>ব্রেক সিস্টেম</h6>
                    <h6> এয়ার ব্রেক</h6>
                  </div>
                  <div className="even__content">
                    <h6>পে-লোড</h6>
                    <h6> ২৯৯৫ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6>জি ভি ডব্লিউ</h6>
                    <h6> ৫৯৪৫ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6>ব্যাটারি</h6>
                    <h6>১২ ভোল্ট, ১০০ এম্পিয়ার</h6>
                  </div>
                  <div className="even__content">
                    <h6>ফুয়েল ট্যাংক</h6>
                    <h6> ১২০ লিটার</h6>
                  </div>
                  <div className="even__content">
                    <h6>ড্রাইভিং</h6>
                    <h6> ৪ x ২</h6>
                  </div>
                  <div className="even__content">
                    <h6>অন্যান্য</h6>
                    <h6>
                      {" "}
                      ওয়ার্মার, রেডিও, স্পেয়ার হুইল, এডজাস্টেবল স্টিয়ারিং হুইল
                    </h6>
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

export default Link6;
