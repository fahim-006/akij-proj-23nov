import blog1 from "../../images/blog/blog1.PNG";
import blog2 from "../../images/blog/blog2.PNG";
import blog3 from "../../images/blog/blog3.PNG";
import { BsArrowRight } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";

const BlogsandNews = () => {
    return(
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
    )
}

export default BlogsandNews;