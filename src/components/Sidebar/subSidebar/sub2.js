import { Link } from "react-router-dom";

const SubSide2 = () => {
    return(
   
            <div class="flex-container-main-subsidebar">
			<div class="flex-item-main-subsidebar">
				<Link to="/PONKHIRAJ_PLUS_TON_DIESEL" style={{color: "#000000"}}> PONKHIRAJ PLUS 1.2 TON DIESEL  </Link>
			</div>

			<div class="flex-item-main-subsidebar">
			<Link to="/bijoyderton" style={{color: "#000000"}}> BIJOY 1.5 TON DIESEL  </Link>
				
			</div>

			<div class="flex-item-main-subsidebar">
				<Link to="/boraktinton" style={{color: "#000000"}}> BORAK 3.0 TON DIESEL </Link>
			</div>
			
            <div class="flex-item-main-subsidebar">
			<Link to="/rajdut_4_ton" style={{color: "#000000"}}>RAJDUT 4.0TON DIESEL</Link>
			</div>
		</div>
    )
}

export default SubSide2;