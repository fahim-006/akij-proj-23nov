import PrivacyPolicy from "./PrivacyPolicy";
import Layout from '../../Layout';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation';
import CategoryClick from '../../categoryClick';
import { useCallback, useState } from "react";

const MainPrivacy = () =>{
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return(
        <Layout title="Akij Motors | Contact Us">
                      
        {show && <div>
            <Navigation onToggle = {handleToggle}/>
            <PrivacyPolicy/>
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

export default MainPrivacy;