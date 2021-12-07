
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Special_Vehicles from './Find_Best_Vehicles';
import Special_Cars from '../Construction_Machinery/pages/Special/Special';


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
                 <Special_Cars/>
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