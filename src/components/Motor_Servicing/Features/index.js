import FeaturesWriting from "./FeaturesWriting"
import image from '../image/img3-min.PNG'

const ServicingFeatures = () => {
    return(
        <div className="container-fluid" style={{backgroundColor:"#E3E3E3"}}>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <FeaturesWriting/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{alignItems: "center", marginTop: "5%"}}>
                    <img style={{marginTop: "150px"}} src={image} alt="newRelease Image"/>
            </div>
            </div>
        </div>
    )
}
export default ServicingFeatures;