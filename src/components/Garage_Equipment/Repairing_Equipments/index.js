import image from '../images/2.png'

const Repairing_Equipments = () => {
    return(
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-6 col-sm-12 col-md-12" style={{textAlign: "center", marginTop: "100px"}}>
                <p className="aboutusHeading1">Repairing Equipments</p>
                <p>Auto Colussion Recair System. Mia Mag Werder Spot Welder. Hat Stapler Plastic Weder, Sant We der. Disc Aligner. Plasma Cutter. Car Body Repair System.Dent Puling System, Tyre Changer Paint Booth, Paint Mixture Multifunctional Shormave nfrared Paint Curing Lap.
CL</p>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                        <img style={{marginTop: "150px"}} src={image} alt="newRelease Image"/>
                </div>
            </div>
        </div>
    )
}

export default Repairing_Equipments;