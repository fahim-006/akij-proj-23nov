import { Link } from "react-router-dom";

const SubSide1 = () => {
    return(
   
            <div class="flex-container-main-subsidebar">
				<div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
				 	Pickup/Covered Van Diesel 
				</div>
				<div class="flex-item-main-subsidebar" >
					<Link to="/PONKHIRAJ_1000KG_DIESEL" style={{color: "#000000"}} target="_blank"> PONKHIRAJ 1000KG DIESEL </Link>
				</div>
				<div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
					Pickup Petrol/CNG/LPG 
				</div>
				<div class="flex-item-main-subsidebar">
				<Link to="/druti_1000_kg_petrol" style={{color: "#000000"}} target="_blank"> DRUTI 1000KG PETROL/CNG/LPG </Link>
					
				</div>
				<div class="flex-item-main-subsidebar" style={{fontWeight: "bold"}}>
					Human Hauler/Tempu 
				</div>
				<div class="flex-item-main-subsidebar">
				<Link to="/duronto_1000_kg" style={{color: "#000000"}} target="_blank"> DURONTO 1000KG </Link>
					
				</div>
		</div>
    )
}

export default SubSide1;