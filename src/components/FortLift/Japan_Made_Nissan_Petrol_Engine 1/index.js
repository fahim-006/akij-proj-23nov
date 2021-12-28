import image from "../images/2.jpg";

const Japan_Made_Nissan_Petrol_Engine = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-6 col-sm-12 col-md-12"
          style={{ textAlign: "center", marginTop: "100px" }}
        >
          <p className="aboutusHeading1">
            Japan Made ISUZU Diesel Engine(2.0 ~ 5.0 Ton)
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>Model: LG20GLT</li>
            <li>Engine Model(Diesel): Nissan k21</li>
            <li>Load center distance (mm): 500 </li>
            <li>Rated/Load Capacity (kg): 2000 to 3500</li>
            <li>Free Lift Height: 140 to 188</li>
            <li>Overall max lifting height (mm): 3000</li>
            <li>Fork Dimensions (hook type): LG20D(T)</li>
            <li>L5xWxT (mm): 1070x122x40/1070x125x45/1070x125x45 </li>
            <li>Fuel Tank (L): 55 to 60</li>
          </ul>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <img src={image} alt="newRelease Image" className="newReleaseImg" />
        </div>
      </div>
    </div>
  );
};

export default Japan_Made_Nissan_Petrol_Engine;
