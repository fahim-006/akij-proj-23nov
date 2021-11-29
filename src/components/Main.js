import { Switch, Route, Redirect} from 'react-router-dom'
import About from './about/About';
import CategoryClick from './categoryClick';
import MiniTruck from './Sidebar/subCategoryDetails/components/Link1/mini_truck_1000kg_diesel';
import Home from './home/Home'
import Druti from './Sidebar/subCategoryDetails/components/Link2/Druti';
import PonkhirajPlus from './Sidebar/subCategoryDetails/components/Link4/PonkhirajPlus.js';
import BijoyderTon from './Sidebar/subCategoryDetails/components/Link5/BijoyderTon';
import BijoyTinTon from './Sidebar/subCategoryDetails/components/Link6/BijoyTinTon';

const Main = () => {
    return (
    <div>
        <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/aboutus" exact component={About} />
            <Route path= "/navbarclick" component={CategoryClick}/>
            <Route path= "/PONKHIRAJ_1000KG_DIESEL" component={MiniTruck}/>
            <Route path= "/druti_1000_kg_petrol" component={Druti}/>    
            <Route path= "/duronto_1000_kg" component={Druti}/>  
            <Route path= "/PONKHIRAJ_PLUS_TON_DIESEL" component={PonkhirajPlus}/>
            <Route path= "/bijoyderton" component={BijoyderTon}/>
            <Route path= "/bijoytinton" component={BijoyTinTon}/>
        </Switch>
    </div>
    )
}

export default Main;
