import NewReleaseWriting from "./newReleaseWriting"
import image from './newRelease/newRelease.png'

const NewRelease = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <NewReleaseWriting/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{alignItems: "center", marginTop: "5%"}}>
                    <img src={image} alt="newRelease Image" className="newReleaseImg"/>
            </div>
            </div>
        </div>
    )
}
export default NewRelease;