import NewReleaseWriting from "./newReleaseWriting"

const BijoyTruck = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <NewReleaseWriting/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{alignItems: "center", marginTop: "10%"}}>
                    <img src='/images/Commercial_Vehicles/bijoy.png' alt="newRelease Image" className="Commercial_Vehicles_bijoy"/>
            </div>
            </div>
        </div>
    )
}
export default BijoyTruck;