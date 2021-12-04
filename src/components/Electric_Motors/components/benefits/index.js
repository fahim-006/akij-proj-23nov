import banner from "../../images/motorcycle/b-banner.PNG";
import hbike1 from "../../images/motorcycle/h-bike1.PNG";
import hbike2 from "../../images/motorcycle/h-bike2.PNG";
import jacket from "../../images/motorcycle/jacket.png";
import haritage from "../../images/motorcycle/haritage.png";
import blog1 from "../../images/blog/blog1.PNG";
import blog2 from "../../images/blog/blog2.PNG";
import blog3 from "../../images/blog/blog3.PNG";
import Title from "../../components/Title/Title";
import { BsArrowRight } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";

const Benefits = () => {
    return(
        <>
        <div className="benefit-e-bike mt-5">
        <div className="b-banner">
          <img className="b-banner-img" src={banner} alt="" />
        </div>
        <div className="b-card-container pt-5">
          <Title title="Benefit of electric bike" />
          <div className="container">
            <div className="b-cards">
              <div className="row">
                <div className="col-lg-3">
                  <div className="b-card text-center">
                    <h2 className="order">01</h2>
                    <h5 className="b-card-title">Eco Friendly</h5>
                    <p className="b-desc">
                      Eco-friendly literally means earth-friendly or not harmful
                      to the environment , also green living or practices that
                      help conserve resources like water and energy.
                      Eco-friendly products also prevent contributions to air,
                      water and land pollution.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="b-card text-center">
                    <h2 className="order">02</h2>
                    <h5 className="b-card-title">Modern Desing</h5>
                    <p className="b-desc">
                      In Akij Motors there’s seven different designs for
                      different age groups. Specially designed for aged people
                      and girls within their comfort and style.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="b-card text-center">
                    <h2 className="order">03</h2>
                    <h5 className="b-card-title">Best Price</h5>
                    <p className="b-desc">
                      In terms of comfort and effectiveness it may cost more but
                      we are providing quality parts of products at a minimum
                      price. So Akij Motors is best for quality products.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="b-card text-center">
                    <h2 className="order">04</h2>
                    <h5 className="b-card-title">Soundless</h5>
                    <p className="b-desc">
                      Usually we see bikes create a kind of sound that is noisy
                      for others and also create sound pollution. Our electric
                      motorcycles don't produce any noise which is beneficial
                      for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="history__area pt-5">
        <div className="container pt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="history__card">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="history__content text-center p-3">
                      <h3>History of Electric Motorcycle</h3>
                      <p>
                        The creation of the battery as a stable supply of
                        electric current led to a dramatic increase in research
                        with electricity. By 1802 Humphrey Davy exhibited the
                        first incandescent light (a thin platinum strip
                        stretched between electric wires), and the first
                        electric arc lamp in 1806. It’s difficult today to
                        imagine the impact of such inventions on the mindset of
                        people in the day: no longer would our activities be
                        limited to the cycles of nature – humans would soon
                        dominate nature. ”
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="history__img">
                      <img src={hbike1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-10">
              <div className="history__card">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="history__content text-center p-3">
                      <h3>History of Electric Motorcycle</h3>
                      <p>
                        The creation of the battery as a stable supply of
                        electric current led to a dramatic increase in research
                        with electricity. By 1802 Humphrey Davy exhibited the
                        first incandescent light (a thin platinum strip
                        stretched between electric wires), and the first
                        electric arc lamp in 1806. It’s difficult today to
                        imagine the impact of such inventions on the mindset of
                        people in the day: no longer would our activities be
                        limited to the cycles of nature – humans would soon
                        dominate nature. ”
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="history__img">
                      <img src={hbike2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="haritage-container d-flex">
        <div className="haritage d-flex">
          <div className="h-texts">
            <p className="h-style">New Style Haritage Bike</p>
            <h1 className="h-title">Haritage Bike</h1>
            <button className="h-btn">Shop Now</button>
          </div>
          <div className="h-img">
            <img src={haritage} alt="" />
          </div>
        </div>
        <div className="jacket d-flex">
          <div className="h-texts">
            <p className="h-style">Power tools of next level</p>
            <h1 className="h-title">Biker Jacket</h1>
            <button className="h-btn">Shop Now</button>
          </div>
          <div className="h-img">
            <img src={jacket} alt="" />
          </div>
        </div>
      </div>


      <div className="blog">
        <div className="blog-text text-center">
          <p className="news">BLOG AND NEWS</p>
          <h1 className="blog-title">LATEST NEWS</h1>
        </div>

        <div className="blog-cards">
          <div class="card" style={{ width: "18rem" }}>
            <img src={blog1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">The Top Ten Custom Motorcycles of 2020</h5>
              <p className="date">
                {" "}
                <BsFillCalendarFill className="me-3" />
                July 8, 2021
              </p>
              <p class="card-text">
                News &amp; Event The Top 10 Custom Motorcycles of 2020 Mauris
                Molestie blandit suscipit lorem ipsum dolor sit
              </p>
              <a href="#" class="b-btn ">
                Read More
                <BsArrowRight className="ms-3" />
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={blog2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">The Best of The One Motorcycle Contest</h5>
              <p className="date">
                {" "}
                <BsFillCalendarFill className="me-3" />
                July 8, 2021
              </p>
              <p class="card-text">
                News &amp; Event The Best of Teh One Motorcycle Show of 2020 Mauris
                Molestie blandit suscipit lorem ipsum dolor sit
              </p>
              <a href="#" class="b-btn ">
                Read More
                <BsArrowRight className="ms-3" />
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={blog3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                How to Become A Professional Custom Builder
              </h5>
              <p className="date">
                {" "}
                <BsFillCalendarFill className="me-3" />
                July 8, 2021
              </p>
              <p class="card-text">
                News &amp; Event The Best of Teh One Motorcycle Show of 2020 Mauris
                Molestie blandit suscipit lorem ipsum dolor sit
              </p>
              <a href="#" class="b-btn ">
                Read More <BsArrowRight className="ms-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Benefits;