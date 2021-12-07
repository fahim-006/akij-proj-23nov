import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Details_Heavy_Duty_Cargo_Truck_23 = () => {
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
                      <img src="productImages/singleProduct.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft"><br/>
                            {/* add name here*/}
                          <h6>Heavy Duty Cargo Truck (Bahadur) 6x4 Diesel</h6> <br/><br/><br/><br/>
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
                    <li>Registration & Insurance are free of charge.</li>
                   
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
                                      <h6> 	বাহাদুর ২৩ টন</h6>
                                    </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h6>ইঞ্জিন</h6>
                    <h6>উইচাই  WP6.340E32, ৬ ইন-লাইন,ওয়াটার কুলিং,ইজিআর, এয়ার ইন্টারকুলার, টার্বোচার্জড </h6>
                  </div>
                  <div className="even__content">
                    <h6>পিস্টন ডিসপ্লেসমেন্ট</h6>
                    <h6>	৯৭২৬ সিসি</h6>
                  </div>
                  <div className="even__content">
                    <h6> পাওয়ার</h6>
                    <h6>২৫০ কিলো-ওয়াট (৩৪০ হর্স পাওয়ার ) @ ২২০০ আর পি এম</h6>
                  </div>
                  <div className="even__content">
                    <h6>টর্ক</h6>
                    <h6>১৩৫০ এন এম @ ১২০০ - ১৬০০ আর পি এম </h6>
                  </div>
                  <div className="even__content">
                    <h6>ট্রান্সমিশন</h6>
                    <h6>FAST 8JS10ST (৮ ফরওয়ার্ড স্পীড +২ রিভার্স স্পীড)</h6>
                  </div>
                  
                  <div className="even__content">
                    <h6>সর্বোচ্চ আরোহনের ঢাল</h6>
                    <h6> 	৩০% </h6>
                  </div>
                  
                  <div className="even__content">
                    <h6>ক্লাচ</h6>
                    <h6> ৪৩০  মি.মি , ড্রাই টাইপ, সিঙ্গেল প্লেট ড্রাই কয়েল স্প্রিং, ডায়াফ্রাম স্প্রিং ক্লাচ, হাইড্রলিক </h6>
                  </div>
                  <div className="even__content">
                    <h6>স্টিয়ারিং</h6>
                    <h6>ইন্টিগ্রেটেড পাওয়ার স্টিয়ারিং</h6>
                  </div>
                  <div className="even__content">
                    <h6>ওভার অল ডায়মেনশন</h6>
                    <h6>দৈর্ঘ্য ৯৩৫০  x  প্রস্থ ২৫৫০  x উচ্চতা ৩৩০০ মি.মি</h6>
                  </div>
                  
                  <div className="even__content">
                    <h6>কেবিন</h6>
                    <h6> ৪৪ ডিগ্রি , ইন্টিগ্রেট ফ্রন্ট টিল্টেবল  </h6>
                  </div>
                 
                  <div className="even__content">
                    <h6>সর্বোচ্চ গতি</h6>
                    <h6> 	ঘণ্টায় ৭৫ কিঃ মিঃ </h6>
                  </div>
                  <div className="even__content">
                    <h6>হুইলবেস</h6>
                    <h6> ৪১০০ + ১৩৫০ মি.মি  </h6>
                  </div>
                  
                  <div className="even__content">
                    <h6>পে-লোড</h6>
                    <h6>৪৫০০০ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6>কার্ব ওয়েট</h6>
                    <h6>  ৯৯২০ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6>ফ্রেম</h6>
                    <h6>সাইড রিলস,পাঞ্ছিং এবং রিভেটেড কন্সট্রাকশন (৮+৮) </h6>
                  </div>
                  <div className="even__content">
                    <h6>সর্বোচ্চ  ফ্রন্ট এক্সেল</h6>
                    <h6>৯০০০ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6> রিয়ার এক্সেল রেশিও</h6>
                    <h6>৫.৯২১</h6>
                  </div>
                  <div className="even__content">
                    <h6>সর্বোচ্চ  রিয়ার এক্সেল</h6>
                    <h6>১৬০০০x২  কেজি </h6>
                  </div>
                  <div className="even__content">
                    <h6>গ্রাউন্ড ক্লিয়ারেন্স</h6>
                    <h6> ৩১৪ মি.মি </h6>
                  </div>
                  <div className="even__content">
                    <h6>সাসপেনশন</h6>
                    <h6>লিফ স্প্রিং, বগি টাইপ</h6>
                  </div>
                  <div className="even__content">
                    <h6>টায়ার</h6>
                    <h6>১১.০০ R২০, (১০+১)</h6>
                  </div>
                
                  <div className="even__content">
                    <h6>ফুয়েল ট্যাঙ্ক</h6>
                    <h6> 	৪০০ লিটার</h6>
                  </div>
                  <div className="even__content">
                    <h6>ফ্রন্ট হুইল ট্র্যাক</h6>
                    <h6> ২০২০   মি.মি</h6>
                  </div>
                  <div className="even__content">
                    <h6>রিয়ার হুইল ট্র্যাক</h6>
                    <h6> ১৮৮০  মি.মি </h6>
                  </div>
                  <div className="even__content">
                    <h6>গাড়ীর সর্বমোট ওজন </h6>
                    <h6>  	৫৫০০০ কেজি</h6>
                  </div>
                  <div className="even__content">
                    <h6>সর্বোচ্চ গতি</h6>
                    <h6>	ঘণ্টায় ৭৫ কিঃ মিঃ </h6>
                  </div>

                  <div className="even__content">
                    <h6>ব্যাটারী</h6>
                    <h6>(২ x ১২) ২৪ ভোল্ট,  ১৮০  এম্পিয়ার</h6>
                  </div>
                  <div className="even__content">
                    <h6>ড্রাইভিং</h6>
                    <h6>  	৬x ৪</h6>
                  </div>
                  
                  <div className="even__content">
                    <h6>চলমান অবস্থা</h6>
                    <h6> বাংলাদেশের  আবহাওয়া এবং রাস্তার  উপযোগী করে তৈরী যা বহন করতে পারে  বালি,মাটি,পাথর,কয়লা। </h6>
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

export default Details_Heavy_Duty_Cargo_Truck_23;