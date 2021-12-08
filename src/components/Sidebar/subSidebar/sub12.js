import { Link } from "react-router-dom";

const SubSide12 = () => {
    return(
   
            <div class="flex-container-main-subsidebar">

            <div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
                    JAPAN MADE ISUZU DIESEL
			</div>

			<div class="flex-item-main-subsidebar" style={{marginLeft: "0px"}}>
                    2.0 ~ 5.0 TON
			</div>

            <div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
                    JAPAN MADE NISSAN PETROL
			</div>
                        
	        <Link to="/forklift_mojdur" style={{color: "#000000"}}><div class="flex-item-main-subsidebar" style={{marginLeft: "0px"}}>
                        2.0 ~ 3.5 TON
	        </div></Link>

            <div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
                    ELECTRIC/BATTERY FORKLIFT
			</div>

			<div class="flex-item-main-subsidebar" style={{marginLeft: "0px"}}>
                     2.0 ~ 2.5 TON
			</div>

            <div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
                    ELECTRIC STACKER
			</div>

			<div class="flex-item-main-subsidebar" style={{marginLeft: "0px"}}>
                    1.5 TON
			</div>

            <div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
                    HAND PALLET
			</div>

			<div class="flex-item-main-subsidebar" style={{marginLeft: "0px"}}>
                    3 TON
			</div>

            <div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
                        MANUAL STACKER
			</div>

			<div class="flex-item-main-subsidebar" style={{marginLeft: "0px"}}>
                        1.5 TON
			</div>
     
		</div>
    )
}

export default SubSide12;