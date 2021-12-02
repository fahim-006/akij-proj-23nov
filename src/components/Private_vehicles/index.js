
import TopSliderPrivateVehicles from "./Components/TopSlider/TopSlider";
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Featured_Private_Vehicles from "./Components/Featured_Private_Vehicles";
import Ambulance_Performance from "./Components/Ambulance_Performance";
import Hiace_Type_Microbus from "./Components/Hiace_Type_Microbus";
import Akij_New_Car from "./Components/Akij_New_car";
import Blog from '../Blog'
import Greatest_Pleasure from "./Components/Greatest Pleasure";
import Carousel from '../home/Carousel'

const PrivateVehicles = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Private Vehicles">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
               <Carousel/>
                <Featured_Private_Vehicles/>
                <Ambulance_Performance/>
                <Hiace_Type_Microbus/>
                <Akij_New_Car/>
                <Greatest_Pleasure/>
                <Blog/>
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