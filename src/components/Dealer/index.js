import Dealer from "./Dealer";
import Layout from '../Layout';
import Footer from '../Footer/Footer';
import { useCallback, useState } from "react";
import Navigation from '../Navigation';
import CategoryClick from "../categoryClick";

const DealerPage = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <Layout title="Akij Motors | Dealers">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Dealer/>
                <Footer/>
                </div>
                }

            {!show && <div>
                <Navigation onToggle = {handleToggle}/>
                <CategoryClick/>
                </div>
                }       
           
        </Layout>
    )
}

export default DealerPage;