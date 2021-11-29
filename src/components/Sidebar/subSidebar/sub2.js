import { Link } from "react-router-dom";

const SubSide2 = () => {
    return(
   
            <div class="flex-container-main-subsidebar">
			<div class="flex-item-main-subsidebar">
				<Link to="/PONKHIRAJ_PLUS_TON_DIESEL" style={{color: "#000000"}} target="_blank"> PONKHIRAJ PLUS 1.2 TON DIESEL  </Link>
			</div>

			<div class="flex-item-main-subsidebar">
			<Link to="/bijoyderton" style={{color: "#000000"}} target="_blank"> BIJOY 1.5 TON DIESEL  </Link>
				
			</div>

			<div class="flex-item-main-subsidebar">
				BORAK 3.0 TON DIESEL
			</div>

            <div class="flex-item-main-subsidebar">
				RAJDUT 4.0TON DIESEL
			</div>
		</div>
    )
}

export default SubSide2;