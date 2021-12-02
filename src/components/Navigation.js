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
                              <Link to="/commercial_vehicles" style={{textDecoration: "none"}}><div className="Navitem">COMMERCIAL VEHICLE</div></Link>
                              <Link to="/private_vehicles" style={{textDecoration: "none"}}> <div className="Navitem">PRIVATE VEHICLE</div></Link>
                              <Link to="/motor_servicing" style={{textDecoration: "none"}}> <div className="Navitem">MOTOR SERVICING</div></Link>
                              <Link to="/garage_equipment" style={{textDecoration: "none"}}><div className="Navitem">GARAGE EQUIPMENTS</div></Link>
                              <Link to="/spare_parts" style={{textDecoration: "none"}}><div className="Navitem">SPARE PARTS</div></Link>
                              <Link to="/electric_motorcycle" style={{textDecoration: "none"}}><div className="Navitem">ELECTRIC MOTORCYCLE</div></Link>
                              <Link to="/forlift" style={{textDecoration: "none"}}><div className="Navitem">FORKLIFT/STACKER</div></Link>
                              <Link to="/construction_machinery" style={{textDecoration: "none"}}><div className="Navitem">CONSTRUCTION MACHINERY</div></Link>
                              <Link to="/special_vehicles" style={{textDecoration: "none"}}><div className="Navitem">SPECIAL VEHICLE</div></Link>
                        </div>

              </div>
    )
}

export default Navigation;