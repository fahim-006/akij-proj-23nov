import { useCallback, useState } from 'react';
import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';
import CategoryClick from '../../../../categoryClick';
import Footer from '../../../../Footer/Footer';
import Details_Kamla_Plus_Tipper from './details';
 
const Kamla_Plus_Tipper = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | Kamla 3.5 CBM (ISUZU original) Dump Truck">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Details_Kamla_Plus_Tipper/>
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

export default Kamla_Plus_Tipper;