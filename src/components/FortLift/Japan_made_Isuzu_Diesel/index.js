import image from '../images/1.jpg'

const Japan_made_Isuzu_Diesel = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12">
                        <img style={{marginTop: "150px"}} src={image} alt="newRelease Image"/>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12" style={{textAlign: "center", marginTop: "100px"}}>
                <p className="aboutusHeading1">Japan Made ISUZU Diesel Engine(2.0 ~ 5.0 Ton)</p>
                <ul style={{listStyleType: "none"}}>
                    <li>Model: LG20D(T)/LG30D(T)/LG50D(T)</li>
                    <li>Engine Model(Diesel): Isuzu C240 or Isuzu 6BG1</li>
                    <li>Load center distance (mm): 500 and 600</li>
                    <li>Rated/Load Capacity (kg): 2000 to 5000</li>
                    <li>Free Lift Height: 110 to 200</li>
                    <li>Overall max lifting height (mm): 3000</li>
                    <li>Fork Dimensions (hook type): LG20D(T)</li>
                    <li>L5xWxT (mm): 1070x120x40,1070x125x45,1220x150x60 </li>
                    <li>Fuel Tank (L): 45 to 150</li>

                </ul>
                </div>
            </div>
        </div>
    )
}

export default Japan_made_Isuzu_Diesel;