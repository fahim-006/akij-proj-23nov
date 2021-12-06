
import image from '../images/3.jpg'

const Electric_Battery_Forklift = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12">
                        <img style={{marginTop: "150px"}} src={image} alt="newRelease Image" className="newReleaseImg"/>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12" style={{textAlign: "center", marginTop: "50px"}}>
                <p className="aboutusHeading1">Electric/Battery Forklift(2.0 ~ 2.5 Ton)</p>
                <ul style={{listStyleType: "none", marginTop:"150px"}}>
                    <li>Model: LG20B</li>
                    <li>Power Type: Electric(AC)</li>
                    <li>Load Center Distance (mm): 500</li>
                    <li>Rated/Load Capacity (kg): 2000 to 2500</li>
                    <li>Free Lift Height: 110</li>
                    <li>Overall max lifting height (mm): 3000</li>
                    <li>Fork Dimensions (hook type): LG20D(T)</li>
                    <li>L5xWxT (mm): 1070x120x40 </li>
                    <li>Fuel Tank (L): 48/600</li>

                </ul>
                </div>
            </div>
        </div>
    )
}

export default Electric_Battery_Forklift;