import { useCallback, useState } from 'react';

import Layout from '../../../../Layout';
import Navigation from '../../../../Navigation';
import CategoryClick from '../../../../categoryClick';
import Footer from '../../../../Footer/Footer';
import Link2 from './Link4';
import Link4 from './Link4';

 
const PonkhirajPlus = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);

    return( 
        <Layout title="Akij Motors | Home">
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Link4/>
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

export default PonkhirajPlus;