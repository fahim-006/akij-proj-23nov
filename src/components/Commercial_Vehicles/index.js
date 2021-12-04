
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Commercial from './Find_Best_Vehicles'
import MediumAndHeavyDutyTruck from './MediumAndHeavyDutyTruck';
import Rofrof from './rofrof';
import BijoyTruck from './bijoy/newRelease';
import Four_Trucks from './four_trucks';
import Blog from '../Blog'

const CommercialVehicles = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Commercial Vehicles">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles_Commercial/>
                <MediumAndHeavyDutyTruck/>
                <Rofrof/>
                <BijoyTruck/>
                <Four_Trucks/>
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
export default CommercialVehicles;