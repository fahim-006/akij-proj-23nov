
import Navigation from '../../components/Navigation';
import { useCallback, useState } from "react";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
import CategoryClick from "../categoryClick";



const Forlift = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <>
        <Layout title="Akij Motors | Forlift/Stacker">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
            
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