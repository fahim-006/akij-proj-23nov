import { Link } from "react-router-dom";

const SubSide5 = () => {
    return(
   
            <div class="flex-container-main-subsidebar">
			<div class="flex-item-main-subsidebar">
            <Link to="/kamla_3.5_cmb" style={{color: "#000000"}}>Kamla 3.5 CBM  </Link>
			</div>

			<div class="flex-item-main-subsidebar">
            <Link to="/kamla_plus_tipper" style={{color: "#000000"}}>Kamla Plus 3.5/5.0 CBM  </Link>
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/heavy_duty_cargo_truck_23Ton" style={{color: "#000000"}}>Shaktiman 11 CBM </Link>  
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/heavy_duty_cargo_truck_23Ton" style={{color: "#000000"}}> Pahloan 16 CBM    </Link>
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/heavy_duty_cargo_truck_23Ton" style={{color: "#000000"}}>  Pahloan20 CBM     </Link>
			</div>
		</div>
    )
}

export default SubSide5;