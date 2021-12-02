import { Switch, Route, Redirect} from 'react-router-dom'
import About from './about/About';
import CategoryClick from './categoryClick';
import MiniTruck from './Sidebar/subCategoryDetails/components/Link1/mini_truck_1000kg_diesel';
import Home from './home/Home'
import Druti from './Sidebar/subCategoryDetails/components/Link2/Druti';
import PonkhirajPlus from './Sidebar/subCategoryDetails/components/Link4/PonkhirajPlus.js';
import BijoyderTon from './Sidebar/subCategoryDetails/components/Link5/BijoyderTon';
import BijoyTinTon from './Sidebar/subCategoryDetails/components/Link6/BijoyTinTon';
import PrivateVehicles from './Private_vehicles';
import CommercialVehicles from './Commercial_Vehicles';
import ContactwithUs from './pages/Contact';
import MotorServicing from './Motor_Servicing'
import GarageEquipment from './Garage_Equipment'
import ElectricMotorcyle from './Electric_Motors'
import Forlift from './FortLift';
import ConstructionMachinery from './Construction_Machinery';
import SpecialVehicles from './Special_Vehicles';
import SpareParts from './Spare_Parts'

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
            <Route path= "/private_vehicles" component={PrivateVehicles}/>
            <Route path= "/commercial_vehicles" component={CommercialVehicles}/>
            <Route path= "/motor_servicing" component={MotorServicing}/>
            <Route path= "/garage_equipment" component={GarageEquipment}/>
            <Route path= "/spare_parts" component={SpareParts}/>
            <Route path= "/electric_motorcycle" component={ElectricMotorcyle}/>
            <Route path= "/construction_machinery" component={ConstructionMachinery}/>
            <Route path= "/forlift" component={Forlift}/>
            <Route path= "/special_vehicles" component={SpecialVehicles}/>
            <Route path= "/contactUs" component={ContactwithUs}/>
        </Switch>
    </div>
    )
}

export default Main;
