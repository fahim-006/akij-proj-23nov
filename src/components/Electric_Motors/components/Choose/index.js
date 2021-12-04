import Ebike from "../../images/motorcycle/e-bike.PNG";

const Choose = () =>{
    return(
        <div className="choose">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="choose__imgarea">
                <div className="choose__bg"></div>
                <div className="choose__img">
                  <img src={Ebike} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Why you choose electric bike?</h3>
              <p>
                Akij electric bike is a new generation. It is easy to use and
                beneficial for reducing nature pollution. Some points why we
                should choose electric bike are given below:
              </p>
              <ol>
                <li>Less sound pollution occurs and echo-friendly</li>
                <li>Minimun 70 km can travel in a session of charge</li>
                <li>High quality of battery, motor and controller</li>
                <li>Different kind of seven model</li>
                <li>Three wheel facility for aged people</li>
                <li>Scooty for girls</li>
                <li>High quality security system, less chance of robbery</li>
                <li>Hydraulic brake system.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
}   

export default Choose;