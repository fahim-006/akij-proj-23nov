import image from './newRelease/greatest_pleasure_image.PNG'
import Writing from "./Writing";

const Greatest_Pleasure = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <Writing/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{alignItems: "center", marginTop: "5%"}}>
                    <img src={image} alt="newRelease Image" style={{marginTop: "100px"}}/>
            </div>
            </div>
        </div>
    )
}
export default Greatest_Pleasure;