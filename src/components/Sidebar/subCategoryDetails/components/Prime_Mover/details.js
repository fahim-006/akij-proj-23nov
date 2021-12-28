import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import "../../ProductDetails.scss";

const Details_Prime_Mover = () => {
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
                      <img src="image/prime-mover-4x2-hati.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="productDetails__content">
                      <div className="top__product__content d-flex">
                        <div className="top__lft">
                          <br />
                          {/* add name here*/}
                          <h4>Prime Mover (Hati) 4x2</h4> <br />
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
                    <h3>মডেল</h3>
                    <h3> হাতি</h3>
                  </div>
                  {/* add this portion if new specification is added*/}
                  <div className="even__content">
                    <h3>ইঞ্জিন</h3>
                    <h3>
                      YC6A260-33, ৬ ইন-লাইন,ওয়াটার কুলিং,ইজিআর, এয়ার
                      ইন্টারকুলার, টার্বোচার্জড{" "}
                    </h3>
                  </div>
                  <div className="even__content">
                    <h3> পাওয়ার</h3>
                    <h3>১৯১ কিলো-ওয়াট (২৬০ হর্স পাওয়ার ) @ ২৩০০ আর পি এম</h3>
                  </div>
                  <div className="even__content">
                    <h3>টর্ক</h3>
                    <h3>১০০০ এন এম @ ১২০০ - ১৬০০ আর পি এম </h3>
                  </div>
                  <div className="even__content">
                    <h3>পিস্টন ডিসপ্লেসমেন্ট</h3>
                    <h3> ৭২৫৫ সিসি </h3>
                  </div>

                  <div className="even__content">
                    <h3>ট্রান্সমিশন</h3>
                    <h3> FAST 8JS118T (৮ ফরওয়ার্ড স্পীড +১ রিভার্স স্পীড) </h3>
                  </div>

                  <div className="even__content">
                    <h3>সর্বোচ্চ আরোহনের ঢাল</h3>
                    <h3> 28% </h3>
                  </div>

                  <div className="even__content">
                    <h3>ক্লাচ</h3>
                    <h3>
                      {" "}
                      ৩৯৫ মি.মি , ড্রাই টাইপ, সিঙ্গেল প্লেট ড্রাই কয়েল স্প্রিং,
                      ডায়াফ্রাম স্প্রিং ক্লাচ, হাইড্রলিক কন্ট্রোল্ড এয়ার এডেড
                      পাওয়ার অপারেটিং{" "}
                    </h3>
                  </div>
                  <div className="even__content">
                    <h3>স্টিয়ারিং</h3>
                    <h3> পাওয়ার স্টিয়ারিং</h3>
                  </div>
                  <div className="even__content">
                    <h3>সাসপেনশন</h3>
                    <h3>লিফ স্প্রিং</h3>
                  </div>
                  <div className="even__content">
                    <h3>ফ্রেম</h3>
                    <h3>সাইড রিলস, পাঞ্ছিং এবং রিভেটেড কন্সট্রাকশন </h3>
                  </div>
                  <div className="even__content">
                    <h3>সর্বোচ্চ লোডিং ফ্রন্ট এক্সেল</h3>
                    <h3>৬০০০ কেজি</h3>
                  </div>
                  <div className="even__content">
                    <h3>সর্বোচ্চ লোডিং রিয়ার এক্সেল</h3>
                    <h3> ১৩০০০ কেজি </h3>
                  </div>
                  <div className="even__content">
                    <h3> রিয়ার এক্সেল রেশিও</h3>
                    <h3>৬.৩৩</h3>
                  </div>
                  <div className="even__content">
                    <h3>হুইলবেস</h3>
                    <h3> ৩৬০০ মি.মি </h3>
                  </div>
                  <div className="even__content">
                    <h3>সর্বোচ্চ গতি</h3>
                    <h3> ঘণ্টায় ৮০ কিঃ মিঃ </h3>
                  </div>
                  <div className="even__content">
                    <h3>কেবিন</h3>
                    <h3> এইচ 5 ক্যাব এবং স্লিপার ও টিল্টটেবল কেবিন </h3>
                  </div>
                  <div className="even__content">
                    <h3>ফ্রন্ট হুইল ট্র্যাক</h3>
                    <h3> ২০৫০ মি.মি</h3>
                  </div>

                  <div className="even__content">
                    <h3>রিয়ার হুইল ট্র্যাক</h3>
                    <h3> ১৮৪৭ মি.মি </h3>
                  </div>
                  <div className="even__content">
                    <h3>ওভার অল ডায়মেনশন</h3>
                    <h3>দৈর্ঘ্য ৫৯১৫ x প্রস্থ ২৫০০ x উচ্চতা ৩০৫০ মি.মি</h3>
                  </div>
                  <div className="even__content">
                    <h3>কার্ব ওয়েট</h3>
                    <h3> ৫৭০০ কেজি</h3>
                  </div>
                  <div className="even__content">
                    <h3>টায়ার</h3>
                    <h3>১০.০০ R২০, (৬+১) </h3>
                  </div>

                  <div className="even__content">
                    <h3>ব্রেক সিস্টেম </h3>
                    <h3>এয়ার প্রেশার ব্রেক</h3>
                  </div>

                  <div className="even__content">
                    <h3>পে-লোড</h3>
                    <h3> ৩৯৩০০ কেজি </h3>
                  </div>
                  <div className="even__content">
                    <h3>গাড়ীর সর্বমোট ওজন </h3>
                    <h3> ৪৫০০০ কেজি </h3>
                  </div>

                  <div className="even__content">
                    <h3>গ্রাউন্ড ক্লিয়ারেন্স</h3>
                    <h3> ২৯০ মি.মি </h3>
                  </div>
                  <div className="even__content">
                    <h3>ব্যাটারী</h3>
                    <h3>(২ x ১২) ২৪ ভোল্ট, ১৬৫ এম্পিয়ার</h3>
                  </div>

                  <div className="even__content">
                    <h3>ফুয়েল ট্যাঙ্ক</h3>
                    <h3> ৩০০ লিটার</h3>
                  </div>

                  <div className="even__content">
                    <h3>ড্রাইভিং</h3>
                    <h3> ৪ x ২ </h3>
                  </div>

                  <div className="even__content">
                    <h3>চলমান অবস্থা</h3>
                    <h3>
                      {" "}
                      বাংলাদেশি আবহাওয়া এবং রাস্তার উপযোগী করে তৈরী যা বহন করতে
                      পারে সকল ধরনের ট্রেইলর।{" "}
                    </h3>
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
          <h3 className="mt-5 btm__item">
            *Please be informed "AKIJ Motors" has every rights to change the
            content without any prior notice.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Details_Prime_Mover;
