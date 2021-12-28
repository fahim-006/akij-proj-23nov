import { useCallback, useState } from 'react';
import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';
import CategoryClick from '../../../../categoryClick';
import Footer from '../../../../Footer/Footer';
import Details_Tufan_24_Feet from './details';
 
const Tufan_24_Feet = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | Tufan 20 Feet">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Details_Tufan_24_Feet/>
                <Footer/>
            </div>        
        }
            {!show && <div>
                <Navigation onToggle = {handleToggle}/>
                <CategoryClick/>
                </div>
            }   
            
        </Layout> 
    );
}

export default Tufan_24_Feet;