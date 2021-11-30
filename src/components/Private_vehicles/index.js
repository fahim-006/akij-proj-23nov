
import TopSliderPrivateVehicles from "./Components/TopSlider/TopSlider";
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Featured_Private_Vehicles from "./Components/Featured_Private_Vehicles";
import Ambulance_Performance from "./Components/Ambulance_Performance";
import Hiace_Type_Microbus from "./Components/Hiace_Type_Microbus";


const PrivateVehicles = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Private Vehicles">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <TopSliderPrivateVehicles/>
                <Featured_Private_Vehicles/>
                <Ambulance_Performance/>
                <Hiace_Type_Microbus/>
                <Footer/>
                </div>
                }

            {!show && <div>
                <Navigation onToggle = {handleToggle}/>
                <CategoryClick/>
                </div>
                }       
           
        </Layout>
        </>
    )
    }
export default PrivateVehicles;