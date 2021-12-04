import nr from "../../images/nr-bike.png";
import '../../motorCss.scss'

const New_Release_Electric_motor = () => {
    return(
        <div className="new__relese">
        <div className="container">
          <h3 className="text-center pt-4">New Release</h3>
          <div className="row mt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="new__relese__content text-center">
                <h3 className="mb-4">Duranto V6</h3>

                <p>Motor Power 3000 W</p>
                <p>Top Speed 80-90 KM/H</p>
                <p>Battery Capacity 72V 24Ah</p>
                <p> Stylish designs.</p>
                <p>No chain sprocket &amp; eco-friendly.</p>
                <p>Hassle free smooth driving.</p>
                <p>No cost for fuel.</p>
                <p>No sound Pollution.</p>
                <p>Hydraulic brake system.</p>
                <p>Very effective with minimum cost.</p>
                <p>6-month warranty for Battery, Motor and Controller.</p>
                <button className="feater__btn mt-4">Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="new__release__img">
                <img src={nr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default New_Release_Electric_motor;