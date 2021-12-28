import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact__area">
      <div className="top__contact d-flex justify-content-center align-items-center">
        <div className="title__area">
          <div className="title">
            <div className="title__underline">
              <h1 className="text-white">Contact Us</h1>
            </div>
          </div>
          <div className="__title"></div>
        </div>
      </div>
      <div className="contact__content mt-5 pt-5">
        <div className="container">
          <div className="top__header d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-center">Get in Touch with us</h3>
            <div className="__title text-"></div>
            <p className="text-center pt-4">
              We have the best experts to elevate your desired products or
              elevate your business <br />
              buying wholesale products. <br /> Let's communicate ... you are
              most welcome!
            </p>
          </div>
        </div>
        <div className="main__contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <form action="/action_page.php" method="get">
                  <br />

                  <input
                    className="input__field"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Your Name"
                  />

                  <br />

                  <input
                    className="input__field"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                  <br />
                  <textarea
                    className="text__area"
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Drop your message"
                  ></textarea>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <small>
                    Save my name,email and website in this browser for the next
                    time I comment
                  </small>
                  <br />
                  <button className="submit__btn mb-3 mt-3">
                    SEND A MESSAGE
                  </button>
                </form>
              </div>
              <div className="col-md-6">
                <div className="address">
                  <h2>ADDRESS</h2>
                  <h5 className="mt-4">Corporate Office</h5>
                  <h5>AKIJ Center, 97 Shaheed Tajuddin</h5>
                  <h5>Ahamed Sharoni, Satrastar More,</h5>
                </div>
                <div className="phone mt-5 pt-3">
                  <h2>PHONE</h2>
                  <h5 className="mt-3">+8801755-662545</h5>
                </div>
                <div className="email mt-5 pt-5">
                  <h2 className="mt-5">EMAIL</h2>
                  <h5 className="mt-3">info@akijmotors.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
