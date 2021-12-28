import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import leftImg from './images/forklift.png'

const ServicingPart1 = () => {
    return(
        <div className="container-fluid servicingPart1">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={leftImg} className="servicingPart1_img"/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 rightDivSerivinfPart1">
                    <div className="grid-container-servicing">
                            <div>
                                <img src={img1}/>
                                <h6>Powerful engines, strong chassis</h6>
                                <p>We use engines which follow garmany technologies. We also have original ichijo engines(japan), Nishan petrol pump engines(japan), single weichai engines e.t.c. </p>
                            </div>

                            <div>
                                <img src={img2}/>
                                <h6>Fuel efficiency &amp; eco-friendly</h6>
                                <p>Our products cost less fuel to run the vehicle. So it burns less diesel or gas. what reduces pollution and maintains a healthy environment. </p>
                            </div>

                            <div>
                                <img src={img3}/>
                                <h6>Low maintenance cost</h6>
                                <p>Our vehicles costes less fuel so it reduces maintenance cost. On the other hand, spare parts are easily found on our site. </p>
                           </div>

                            <div>
                                <img src={img4}/>
                                <h6>Easy payment plan</h6>
                                <p>We have facilities to provide payment at a time or customer-friendly installment.. </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicingPart1;