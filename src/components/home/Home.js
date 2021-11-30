import Layout from '../Layout';
import Footer from '../Footer/Footer';
import HomeCover from './homeCover';
import UnderSelectType from './underSelectType';
import AboutusDiv3 from '../about/aboutusDiv3';
import AboutUsDiv4 from '../about/aboutusDiv4';
import AboutDiv8 from '../about/aboutDiv8/aboutDiv8';
import Servicing from './servicing';
import Largest from './selectLargect';
import Navigation from '../Navigation';
import { useCallback, useState } from 'react';
import CategoryClick from '../categoryClick';
import Find_Best_Vehicles from './Find_Best_Vehicles';
import NewRelease from './newRelease/index'
import Carousel from './Carousel'
import Blog from '../Blog'



const Home = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <Layout title="Akij Motors | Home">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <Carousel/>
                <Find_Best_Vehicles/>
                <NewRelease/>
                <AboutusDiv3/>
                <Servicing/> 
                <Largest/>
                <Blog/>
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
export default Home;
