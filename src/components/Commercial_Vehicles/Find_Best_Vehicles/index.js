import SidebarTopVehicles from "./SidebarTopVehicles";
import TopVehicles from "./TopVehicles";

const Find_Best_Vehicles_Commercial = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p
            className="aboutusHeading1"
            style={{
              textAlign: "center",
              marginTop: "28px",
              marginBottom: "28px",
            }}
          >
            Find Best Vehicles
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-12 col-sm-12 ">
          {/*sidebar of TOP Vehicles*/}
          <SidebarTopVehicles />
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12">
          {/*Actual Top Vehicles*/}
          <TopVehicles />
        </div>
      </div>
    </div>
  );
};

export default Find_Best_Vehicles_Commercial;
