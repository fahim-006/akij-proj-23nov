import React from "react";
import Title from "./components/Title/Title";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Dealer.scss";
function Dealer() {
  return (
    <div>
      <div className="top__contact d-flex justify-content-center align-items-center">
        <div className="title__area">
          <div className="title">
            <div className="title__underline">
              <h1 className="text-white">Welcome to Akij Motors</h1>
              <h3>Our Dealers</h3>
            </div>
          </div>
          <div className="__title"></div>
        </div>
      </div>
      <div className="showroom">
        <div className="container">
          <h3>AKIJ MOTORS SHOWROOM IN BANGLADESH</h3>
          <p className="mt-5">
            Locate and find Akij Motors showrooms in Bangladesh with their
            address and contact information. Akij Motors gives you easy access
            to the addresses and contact details of Akij Motors Dealer Showrooms
            in Bangladesh.
          </p>
        </div>
      </div>
      <div className="location">
        <div className="container">
          <div className="location__wrapped">
            <div className="division">
              <Title title={"Division"} />
              <div className="division__btn">
                <button>DHAKA</button>
                <button>CHITTAGONG</button>
                <button>RAJSHAHI</button>
                <button>KHULNA</button>
                <button>BARISHAL</button>
                <button>SYLHET</button>
                <button>COMILLA</button>
                <button>RANGPUR</button>
                <button>MYMENSHING</button>
              </div>
            </div>
            <div className="district">
              <Title title={"District"} />
              <div className="district__btn">
                <button className="single__district">DHAKA</button>

                <button className="single__district">FARIDPUR</button>

                <button className="single__district">GAZIPUR</button>

                <button className="single__district">SHARIATPUR</button>

                <button className="single__district">NARSINGDI</button>

                <button className="single__district">MADARIPUR</button>

                <button className="single__district ">RAJBARI</button>

                <button className="single__district lst">MANIKGANJ</button>

                <button className="single__district">TANGAIL</button>

                <button className="single__district">MADARIPUR</button>

                <button className="single__district">NARAYANGANJ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="container">
          <Title title={"Dealer information"} />
          <div className="row mt-5 d-flex justify-content-between">
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Two Wheeler</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Damurhuda, Hasina Super Market, Chuadanga
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01918043322
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>M M Enterprise</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Chakrampur, Dhaka Road, Natore
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01716334671
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Green Taget</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Kadirgonj, Chal Potti, GPO Boalia, Rajshahi
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01972892892
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Bandhon Auto</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Hazi Bhaban, ZelKhanar More, Vela Nagar, Norshingdi.
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01716767000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Taj Emterprise</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Bypass Road, Hobigonj Bus Stand, Hobigonj.
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01712184324
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Raiyan Motors</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Adi Tangail, Delduar Road, Tangail
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01716004570
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Md Shoaib Iftekhar</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Shahi Masjid Road, Uttar Balu Bari. Dinajpur Sadar
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01717071908
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Taj Motors</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    Gohail Road, Bogura Sadar, Bogura
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01622213529
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="info__card">
                <div className="lft__side">
                  <h2>Sirajgonj E Bike Center</h2>
                </div>
                <div className="rgt__side">
                  <p className="d-flex">
                    <div className=" me-2">
                      <MdOutlineLocationOn className="loc__icn" />
                    </div>
                    New Dhaka Road, Kata Khali, Rail Gate, Sirajgonj.
                  </p>
                  <p>
                    <BsEnvelopeOpen className=" me-2" /> example@gmail.com
                  </p>
                  <p>
                    <FiPhoneCall className=" me-2" /> 01722418029
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="show__btn">
            <button>SHOW MORE</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dealer;
