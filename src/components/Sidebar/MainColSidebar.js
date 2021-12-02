import { useState } from "react";
import { Link } from "react-router-dom";
import SubSide1 from "./subSidebar/sub1";
import SubSide10 from "./subSidebar/sub10";
import SubSide11 from "./subSidebar/sub11";
import SubSide12 from "./subSidebar/sub12";
import SubSide13 from "./subSidebar/sub13";
import SubSide14 from "./subSidebar/sub14";
import SubSide15 from "./subSidebar/sub15";
import SubSide19 from "./subSidebar/sub19";
import SubSide2 from "./subSidebar/sub2";
import SubSide20 from "./subSidebar/sub20";
import SubSide3 from "./subSidebar/sub3";
import SubSide4 from "./subSidebar/sub4";
import SubSide5 from "./subSidebar/sub5";
import SubSide6 from "./subSidebar/sub6";
import SubSide7 from "./subSidebar/sub7";
import SubSide8 from "./subSidebar/sub8";
import SubSide9 from "./subSidebar/sub9";

const MainColSidebar = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);

    const toggleSub1 = () => {
        setShow1(!show1);
        setShow2(false);
        setShow3(false);
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
        setShow8(false)
        setShow9(false)
        setShow10(false)
        setShow11(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub2 = () => {        
        setShow1(false);
        setShow2(!show2);
        setShow3(false);
        setShow4(false);
        setShow5(false)
        setShow6(false)
        setShow7(false)
        setShow8(false)
        setShow12(false)
        setShow9(false)
        setShow10(false)
        setShow11(false)
        setShow13(false)
        setShow15(false)
        setShow14(false)
        setShow19(false)
        setShow20(false)
    }

    
    const toggleSub3 = () => {
        setShow3(!show3);
        setShow1(false);
        setShow2(false)
        setShow4(false)
        setShow7(false)
        setShow5(false)
        setShow6(false)
        setShow12(false)
        setShow8(false)
        setShow10(false)
        setShow9(false)
        setShow11(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub4 = () => {
        setShow4(!show4);
        setShow1(false);
        setShow2(false)
        setShow7(false)
        setShow3(false)
        setShow5(false)
        setShow6(false)
        setShow11(false)
        setShow8(false)
        setShow9(false)
        setShow10(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub5 = () => {
        setShow5(!show5);
        setShow1(false);
        setShow2(false)
        setShow3(false)
        setShow11(false)
        setShow7(false)
        setShow4(false)
        setShow9(false)
        setShow6(false)
        setShow8(false)
        setShow10(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub6 = () => {
        setShow6(!show6);
        setShow1(false);
        setShow2(false)
        setShow7(false)
        setShow3(false)
        setShow11(false)
        setShow4(false)
        setShow5(false)
        setShow10(false)
        setShow9(false)
        setShow8(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub7 = () => {
        setShow7(!show7);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow11(false)
        setShow5(false)
        setShow8(false)
        setShow10(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub8 = () => {
        setShow8(!show8);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow10(false)
        setShow5(false)
        setShow7(false)
        setShow11(false)
        setShow9(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub9 = () => {
        setShow9(!show9);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow10(false)
        setShow5(false)
        setShow11(false)
        setShow7(false)
        setShow8(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow19(false)
        setShow15(false)
        setShow20(false)
    }

    const toggleSub10 = () => {
        setShow10(!show10);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow11(false)
        setShow12(false)
        setShow13(false)
        setShow15(false)
        setShow14(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub11 = () => {
        setShow11(!show11);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub12 = () => {
        setShow12(!show12);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow11(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow20(false)
        setShow19(false)
    }

    const toggleSub13 = () => {
        setShow13(!show13);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow11(false)
        setShow12(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub14 = () => {
        setShow14(!show14);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow11(false)
        setShow12(false)
        setShow13(false)
        setShow15(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub15 = () => {
        setShow15(!show15);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow11(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow19(false)
        setShow20(false)
    }

    const toggleSub19 = () => {
        setShow19(!show19);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow11(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow20(false)
    }

    const toggleSub20 = () => {
        setShow20(!show20);
        setShow1(false);
        setShow2(false)
        setShow6(false)
        setShow3(false)
        setShow4(false)
        setShow9(false)
        setShow5(false)
        setShow7(false)
        setShow8(false)
        setShow10(false)
        setShow11(false)
        setShow12(false)
        setShow13(false)
        setShow14(false)
        setShow15(false)
        setShow19(false)
    }

    return(
        <div className="flex-container-main-sidebar">
		<div className="flex-item-main-sidebar" >
			<a href="/" style={{textDecoration: "none", color: "#000000"}}>
                <i className="fas fa-home"></i> 
                &nbsp; &nbsp;Home
            </a> 
            <hr/>
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub1}>
			<Link to="/commercial_vehicles_sidebar_mini_truck" style={{textDecoration: "none", color: "#000000"}}> 
            <i className="fas fa-truck-pickup"></i>&nbsp; &nbsp;Mini truck/Pickup </Link>
            {show1 &&  <SubSide1/>}           
            <hr/>
		</div>
        
		<div className="flex-item-main-sidebar" onClick={toggleSub2}>
        <Link to="/light_duty_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-truck"></i>&nbsp; &nbsp;Light Duty Truck
            </Link>
            {show2 &&  <SubSide2/>} 
            <hr/>
		</div>

        

		<div className="flex-item-main-sidebar" onClick={toggleSub3}>
        <Link to="/meduim_duty_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-truck-monster"></i>&nbsp; &nbsp;Medium Duty Truck
            </Link>
            {show3 &&  <SubSide3/>} 
            <hr/>	
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub4}>
        <Link to="/heavy_duty_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-truck-moving"></i>&nbsp; &nbsp;Heavy Duty Cargo Truck
            </Link>
            {show4 &&  <SubSide4/>} 
            <hr/>
		</div>
        
		<div className="flex-item-main-sidebar" onClick={toggleSub5}>
        <Link to="/dump_truck" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fa fa-truck" aria-hidden="true"></i>&nbsp; &nbsp;Dump Truck/Tipper
            </Link>
            {show5 &&  <SubSide5/>} 
            <hr/>
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub6}>
        <Link to="/prime_mover" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-trailer"></i>&nbsp; &nbsp;Prime Mover/Trailer
        </Link>

            {show6 &&  <SubSide6/>} 
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub7}>
        <Link to="/microbus" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fa fa-ambulance" aria-hidden="true"></i>&nbsp; &nbsp;Microbus/Ambulance
        </Link>
            {show7 &&  <SubSide7/>} 
            <hr/> 
		</div>
        
		<div className="flex-item-main-sidebar" onClick={toggleSub8}>
        <Link to="/special_vehicle_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-car-side"></i>&nbsp; &nbsp;Special Purpose Vehicle
            </Link>
            {show8 &&  <SubSide8/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub9}>
        <Link to="/rmc_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-dumpster"></i>&nbsp; &nbsp;RMC/Cement Bulk-carrier
        </Link>
            {show9 &&  <SubSide9/>}
            <hr/>
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub10}>
        <Link to="/concrete_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-wrench"></i>&nbsp; &nbsp;Concrete Machinery
            </Link>
            {show10 &&  <SubSide10/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub11}> 
        <Link to="/construction_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-hammer"></i>&nbsp; &nbsp;Construction Machinery
        </Link>
            {show11 &&  <SubSide11/>}
            <hr/> 
		</div>
        
		<div className="flex-item-main-sidebar" onClick={toggleSub12}>
        <Link to="/forklit_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-pallet"></i>&nbsp; &nbsp;Forklift/Stacker/Pallet
            </Link>
            {show12 &&  <SubSide12/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub13}>
        <Link to="/electric_motorcycle_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-motorcycle"></i>&nbsp; &nbsp;Electric Motorcycle
            </Link>
            {show13 &&  <SubSide13/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub14}>
        <Link to="/garage_equipment_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-warehouse"></i>&nbsp; &nbsp;Garage Equipment
            </Link>
            {show14 &&  <SubSide14/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub15}>
        <Link to="/motor_servicing_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-users-cog"></i>&nbsp; &nbsp;Motor Servicing
            </Link>
            {show15 &&  <SubSide15/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar">
        <Link to="/spareparts_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-tools"></i>&nbsp; &nbsp;Spare Parts
            </Link>
            <hr/>
		</div>

		<div className="flex-item-main-sidebar">
			<i className="fas fa-holly-berry"></i>&nbsp; &nbsp;Car Decoration Item
            <hr/> 
		</div>
        
		<div className="flex-item-main-sidebar" onClick={toggleSub19}>
        <Link to="/battery_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-car"></i>&nbsp; &nbsp;Battery/Electric Vehicle
            </Link>
            {show19 &&  <SubSide19/>}
            <hr/> 
		</div>

		<div className="flex-item-main-sidebar" onClick={toggleSub20}>
        <Link to="/akij_cng_sidebar" style={{textDecoration: "none", color: "#000000"}}> 
			<i className="fas fa-gas-pump"></i>&nbsp; &nbsp;AKIJ CNG/LPG Products
            </Link>
            {show20 &&  <SubSide20/>}
            <hr/> 
		</div>
	</div>
    )
}

export default MainColSidebar;