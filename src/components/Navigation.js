import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({onToggle}) => {
      const [show, setShow] = useState("false");

      const toggleClass = () => {
            setShow(!show);
          };
      
    return(
          <div>     
            <div className="container-fluid navCategory grid-container">
                  <div className="item1" onClick={onToggle} >
                        <svg
                              
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 412"
                              height="1em"
                              width="2em"
                              xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                              fill="none"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="48"
                              d="M88 152h336M88 256h336M88 360h336"
                        ></path>
                        </svg> CATEGORIES
                        </div>
                              <div className="Navitem">COMMERCIAL VEHICLE</div>
                              <Link to="/private_vehicles"> <div className="Navitem">PRIVATE VEHICLE</div></Link>
                              <div className="Navitem">MOTOR SERVICING</div>  
                              <div className="Navitem">GARAGE EQUIPMENTS</div>
                              <div className="Navitem">SPARE PARTS</div>
                              <div className="Navitem">ELECTRIC MOTORCYCLE</div>
                              <div className="Navitem">FORLIFT/STACKER</div>
                              <div className="Navitem">CONSTRUCTION MACHINERY</div>
                              <div className="Navitem">SPECIAL VEHICLE</div>
                        </div>

              </div>
    )
}

export default Navigation;