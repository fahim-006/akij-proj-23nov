import { Link } from "react-router-dom";

const SubSide6 = () => {
    return(
   
            <div class="flex-container-main-subsidebar">
			<div class="flex-item-main-subsidebar">
            <Link to="/prime_mover" style={{color: "#000000"}}>Prime Mover 4x2 </Link>
			</div>

			<div class="flex-item-main-subsidebar">
            <Link to="/prime_mover" style={{color: "#000000"}}>Prime Mover 6x4 </Link>
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/prime_mover" style={{color: "#000000"}}> Two-Axle Trailer 40 Feet  </Link>
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/prime_mover" style={{color: "#000000"}}> Multi-Axle Trailer 40 Feet   </Link>  
			</div>
		</div>
    )
}

export default SubSide6;