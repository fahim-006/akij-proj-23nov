
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Motor_Servicing from './Find_Best_Vehicles';
import Best_services from './BestServices';
import ServicingAreas from './ServicingArea';
import ServicingFeatures from './Features';
import TwentyYearsExp from './twentyYearsExp';
import Blog from '../Blog'


const MotorServicing = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Motor Servicing">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles_Motor_Servicing/>
                <Best_services/>
                <ServicingAreas/>
                <ServicingFeatures/>
                <TwentyYearsExp/>
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
export default MotorServicing;