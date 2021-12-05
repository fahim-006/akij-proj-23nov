import img1 from '../image/img5-min.PNG'

const ServicingAreas = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
          
                <div className="col-lg-6 col-md-12 col-sm-12" >
                <img style={{marginTop: "97px"}} src={img1} width="100%"/>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="aboutusHeading1">Our Servicing Areas</p>
                <ul class="list-group list-group-flush" style={{marginTop: "97px", textAlign: "center"}}>
                    <li class="list-group-item">
                        <a style={{textDecoration:"none", color: "#000000"}} 
                        href="https://www.google.com/maps/place/Akij+Service+center/@23.7568695,90.3974739,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b89b8a62f22d:0xb122b1a382b00117!8m2!3d23.7567709!4d90.3996438!5m1!1e1" target="_black"> 
                        Akij Service center- Dhaka</a></li>
                    <li class="list-group-item"><a style={{textDecoration:"none", color: "#000000"}} href="https://www.google.com/maps/place/Akij+Motors+-+Moghbazar/@23.7490737,90.4032497,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b88fa0a4536b:0x20907d944d80d06f!8m2!3d23.7490688!4d90.4054384" target="_black"> Akij Motors - Moghbazar</a></li>
                    <li class="list-group-item"><a style={{textDecoration:"none", color: "#000000"}} href="https://www.google.com/maps/place/Akij+Motors+-+Komlapur/@23.7282517,90.4209073,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b84541dba625:0x3c3a53e61a148147!8m2!3d23.7283179!4d90.4231001" target="_black">Akij Motors - Komlapur</a></li>
                    <li class="list-group-item"><a style={{textDecoration:"none", color: "#000000"}} href="https://www.google.com/maps/place/Akij+Motors+-+Dhanmondi/@23.7406919,90.3788459,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b64729f3bb:0xd8f888fbf1198992!8m2!3d23.7406671!4d90.380929" target="_black">Akij Motors - Dhanmondi</a></li>
                    <li class="list-group-item"><a style={{textDecoration:"none", color: "#000000"}} href="https://www.google.com/maps/place/Akij+Motors+-+Ketun/@23.8784919,90.4889847,17z/data=!3m1!4b1!4m5!3m4!1s0x3755d3c267d226bf:0xe7fdacab70078e61!8m2!3d23.8784858!4d90.4910995" target="_black">Akij Motors - Ketun</a></li>
                </ul>
                </div>
            </div>
        </div>  
    );
}

export default ServicingAreas;