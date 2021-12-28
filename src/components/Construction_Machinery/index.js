
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Construction_Machinery from './Find_Best_Vehicles';
import ConcreteMachinery from './pages/ConcreteMachinery/ConcreteMachinery';
import Special_Cars from './pages/Special/Special';


const ConstructionMachinery = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Construction Machinery">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles_Construction_Machinery/>
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
export default ConstructionMachinery;