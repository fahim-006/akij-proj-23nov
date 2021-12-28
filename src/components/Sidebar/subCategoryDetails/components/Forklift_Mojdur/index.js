import { useCallback, useState } from 'react';

import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';
import CategoryClick from '../../../../categoryClick';
import Footer from '../../../../Footer/Footer';
import Details_Forklift_Mojdur from './details';
 
const Forklift_Mojdur = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | Forklift (MOZDUR) Gasoline/CNG">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Details_Forklift_Mojdur/>
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

export default Forklift_Mojdur;