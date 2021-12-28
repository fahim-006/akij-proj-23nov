import Layout from '../../Layout';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation';
import CategoryClick from '../../categoryClick';
import { useCallback, useState } from "react";
import Faq from './Faq';
import Question from './Question';
import FaqQuestion from './FaqQuestions';

const MainFAQ = () =>{
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return(
        <Layout title="Akij Motors | FAQ">
                      
        {show && <div>
            <Navigation onToggle = {handleToggle}/>
           <Faq/>
           <FaqQuestion/>
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

export default MainFAQ;