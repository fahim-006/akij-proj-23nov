import sathi from "../../images/motorcycle/sathi.png";

const MotorSathi = () =>{
    return(
        <div className="sathi__area">
        <div className="container">
          <div className="row g-4 d-flex align-items-center">
            <div className="col-md-6">
              <h3>Electric Motorcycle Sathi</h3>
              <p>
                The future has arrived. In this era of modernization and
                invention we have so much dependence on electricity. Sathi is a
                kind of motorbikes which is very effective for regular use. With
                very low 5-6 hours charging time it covers a minimum 55-65 km
                range per charge. Here we use Disc Brake for front brake and
                Drum brake for Rear brake. With 500 w motor power and 30-40 km/h
                top speed it is one of the best collections of us. We are
                providing a conditional 6 month warranty for Battery, Motor and
                Controller. For daily use it keeps it's name significant sathi
                means friend. <button>Read More</button>
              </p>
            </div>
            <div className="col-md-6">
              <div className="sathi__imgarea">
                <div className="sathi__bg"></div>
                <div className="sathi__img">
                  <img src={sathi} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MotorSathi;