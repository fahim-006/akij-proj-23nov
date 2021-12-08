import { Link } from "react-router-dom";

const SubSide19 = () => {
    return(
        <div class="flex-container-main-subsidebar">
			<div class="flex-item-main-subsidebar">
                <Link to="/dutonto_v6"> Electric Car</Link>
			</div>
            <div class="flex-item-main-subsidebar">
                Electric Car (3 Wheeler)   
			</div>

            <div class="flex-item-main-subsidebar">
                <Link to="/golf" style={{color: "#000000"}}>Golf Cart</Link>       
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/golf"> Classic/Antique Car</Link>        
			</div>

            <div class="flex-item-main-subsidebar">
            <Link to="/dutonto_v6"> Recreation/Sightseeing Car </Link>         
			</div>
		</div>
    )
}

export default SubSide19;