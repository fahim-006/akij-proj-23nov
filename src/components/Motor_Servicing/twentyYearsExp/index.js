import image from "../image/img4-min.PNG";

const TwentyYearsExp = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#E3E3E3" }}>
      <div className="row">
        <div
          className="col-lg-6 col-md-12 col-sm-12"
          style={{ textAlign: "center", marginTop: "210px" }}
        >
          <h1>
            We are a team of handy
            <br /> mechanics with more than
            <br /> 20 years experience.
          </h1>
          <p>
            We love to fix cars and <br /> we are committed ti the job with
            <br /> excellent result.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img
            style={{ marginTop: "150px" }}
            src={image}
            alt="newRelease Image"
            className="newReleaseImg"
          />
        </div>
      </div>
    </div>
  );
};

export default TwentyYearsExp;
