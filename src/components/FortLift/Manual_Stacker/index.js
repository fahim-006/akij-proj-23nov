
import image from '../images/4.jpg'

const Manual_Stacker = () => {
    return(
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12" style={{textAlign: "center", marginTop: "100px"}}>
                <p className="aboutusHeading1">Stacker 1.5 Ton (Manual)</p>
                <ul style={{listStyleType: "none"}}>
                    <li>Model: WRSD1500</li>

                    <li>Capacity (kg): 1500</li>
                    <li>Lifting Height (mm): 1600</li>
                    <li>Overall (LxWxH):1433x720x1960  </li>
                    <li>Fork (LxW) (mm): 900x150</li>
                    <li>Net Weight (kg): 212</li>
                    <li>Min. /Max Fork Distance: 310/696 (mm)</li>
                </ul>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                        <img style={{marginTop: "150px"}} src={image} alt="newRelease Image"/>
                </div>

             
            </div>
        </div>
    )
}

export default Manual_Stacker;