import image from "./newRelease/greatest_pleasure_image.PNG";
import Writing from "./Writing";

const Greatest_Pleasure = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Writing />
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12"
          style={{ alignItems: "center", marginTop: "5%" }}
        >
          <img
            src={image}
            alt="newRelease Image"
            style={{ marginTop: "100px", width: "100%" }}
            className="image_greatest_pleasure"
          />
        </div>
      </div>
    </div>
  );
};
export default Greatest_Pleasure;
