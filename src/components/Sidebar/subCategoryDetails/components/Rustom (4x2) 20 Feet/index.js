import { useCallback, useState } from 'react';

import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';

import Footer from '../../../../Footer/Footer';
import Details_Rustom_20_Feet from './details';
import CategoryClick from '../../../../categoryClick';
 
const Rustom_20_Feet = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | RofRof_(4x2)_17_Feet">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Details_Rustom_20_Feet/>
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

export default Rustom_20_Feet;