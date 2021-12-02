
import Navigation from '../../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../../Layout";
import Footer from "../../Footer/Footer";
import CategoryClick from "../../categoryClick";
import Carousel from '../../home/Carousel'

const Mini_Truck = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Garage Equipment">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
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
export default Mini_Truck;