
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Electric_Motor from './Find_Best_Vehicles';
import New_Release_Electric_motor from './components/New_Release';
import MotorSathi from './components/motorSathi';
import Choose from './components/Choose';
import Benefits from './components/benefits';

const ElectricMotorcyle = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Electric Motorcycle">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles_Electric_Motor/>
                <New_Release_Electric_motor/>
                <MotorSathi/>
                <Choose/>
                <Benefits/>
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
export default ElectricMotorcyle;