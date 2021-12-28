
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Garage_Equipment from './Find_Best_Vehicles';
import Diagnosis from './disgnosis';
import Repairing_Equipments from './Repairing_Equipments';
import Lifting_Equipment from './Lifting_Equipment';
import Supporting_Equipments from './Supporting_Equipments';
import Blog from '../Blog'

const GarageEquipment = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Garage Equipment">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles_Garage_Equipment/>
                <Diagnosis/>
                <Repairing_Equipments/>
                <Lifting_Equipment/>
                <Supporting_Equipments/>
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
export default GarageEquipment;