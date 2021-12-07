import { useCallback, useState } from 'react';
import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';
import CategoryClick from '../../../../categoryClick';
import Footer from '../../../../Footer/Footer';
import Details_Kamla_3Point5_CMB from './details';
 
const Kamla_3Point5_CMB = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | Kamla 3.5 CBM (ISUZU original) Dump Truck">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Details_Kamla_3Point5_CMB/>
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

export default Kamla_3Point5_CMB;