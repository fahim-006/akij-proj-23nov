import { useCallback, useState } from 'react';
import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';
import CategoryClick from '../../../../categoryClick';
import Footer from '../../../../Footer/Footer';
import Details_Heavy_Duty_Cargo_Truck from './details';
 
const Heavy_Duty_Cargo_Truck_23 = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | Heavy_Duty_Cargo_Truck">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Details_Heavy_Duty_Cargo_Truck/>
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

export default Heavy_Duty_Cargo_Truck_23;