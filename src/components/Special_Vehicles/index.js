
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Special_Vehicles from './Find_Best_Vehicles';
import ConcreteMachinery from '../Construction_Machinery/pages/ConcreteMachinery/ConcreteMachinery';


const SpecialVehicles = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Special Vehicles">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                 <Carousel/>
                 <Find_Best_Vehicles_Special_Vehicles/>
                 <ConcreteMachinery/>
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
export default SpecialVehicles;