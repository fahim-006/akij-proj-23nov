import { Link } from "react-router-dom";

const SubSide10 = () => {
    return(
        
            <div class="flex-container-main-subsidebar">
			<div class="flex-item-main-subsidebar">
            <Link to="/wrecker" style={{color: "#000000"}}> Concrete Pump</Link>
			</div>

			<div class="flex-item-main-subsidebar">
            <Link to="/wrecker" style={{color: "#000000"}}> Batching Plant </Link> 
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/wrecker" style={{color: "#000000"}}>Truck Mounted Boom Pump </Link>
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/wrecker" style={{color: "#000000"}}> Truck Mounted Concrete Pump  </Link>     
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/wrecker" style={{color: "#000000"}}>Concrete Road Paver     </Link>   
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/wrecker" style={{color: "#000000"}}> All Terrain Crane    </Link>   
			</div>
		</div>
    )
}

export default SubSide10;