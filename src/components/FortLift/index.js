
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";
import Carousel from '../home/Carousel'
import Find_Best_Vehicles_Forklift from './Find_Best_Vehicles';
import Japan_made_Isuzu_Diesel from './Japan_made_Isuzu_Diesel';
import Japan_Made_Nissan_Petrol_Engine from './Japan_Made_Nissan_Petrol_Engine 1';
import Electric_Battery_Forklift from './Electric_Battery_Forklift';
import Manual_Stacker from './Manual_Stacker';
import Blog from '../Blog'

const Forlift = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Forlift/Stacker">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles_Forklift/>
                <Japan_made_Isuzu_Diesel/>
                <Japan_Made_Nissan_Petrol_Engine/>
                <Electric_Battery_Forklift/>
                <Manual_Stacker/>
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
export default Forlift;