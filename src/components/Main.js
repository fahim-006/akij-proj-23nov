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
import Light_Duty_Truck from './Sidebar/Light_Duty_truck';
import Medium_Duty_Truck from './Sidebar/Medium_Duty_Truck';
import Heavy_Duty_Truck from './Sidebar/Heavy_Duty_Cargo_Truck';
import Dump_Truck from './Sidebar/Dump_Truck';
import Prime_mover from './Sidebar/Prime_Mover';
import Microbus from './Sidebar/Microbus';
import Special_Purpose_Vehicles from './Sidebar/Special_Purpose_Vehicles';
import RMC from './Sidebar/RMC';
import Construction_Machinery from './Sidebar/Construction_Machinery'
import Concrete_Machinery from './Sidebar/Concrete_Machinery';
import ForkLift_Sidebar from './Sidebar/ForkLift';
import Electric_Motorcycle_sidebar from './Sidebar/Electric_Motorcycle';
import Garage_Equipment_sidebar from './Sidebar/Garage_Equipment';
import Motor_Servicing_sidebar from './Sidebar/Motor_Servicing';
import SpareParts_sidebar from './Spare_Parts';
import Battery_Sidebar from './Sidebar/Battery';
import Akij_CNG_Sidebar from './Sidebar/Akij_CNG';


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

            <Route path= "/commercial_vehicles_sidebar_mini_truck" component={CommercialVehicles}/>
            <Route path= "/light_duty_sidebar" component={Light_Duty_Truck}/>
            <Route path= "/meduim_duty_sidebar" component={Medium_Duty_Truck}/>
            <Route path= "/heavy_duty_sidebar" component={Heavy_Duty_Truck}/>
            <Route path= "/dump_truck" component={Dump_Truck}/>
            <Route path= "/prime_mover" component={Prime_mover}/>
            <Route path= "/microbus" component={Microbus}/>
            <Route path= "/special_vehicle_sidebar" component={Special_Purpose_Vehicles}/> 
            <Route path= "/rmc_sidebar" component={RMC}/>
            <Route path= "/concrete_sidebar" component={Concrete_Machinery}/>
            <Route path= "/construction_sidebar" component={Construction_Machinery}/> 
            <Route path= "/forklit_sidebar" component={ForkLift_Sidebar}/>            
            <Route path= "/electric_motorcycle_sidebar" component={Electric_Motorcycle_sidebar}/>
            <Route path= "/garage_equipment_sidebar" component={Garage_Equipment_sidebar}/>      
            <Route path= "/motor_servicing_sidebar" component={Motor_Servicing_sidebar}/> 
            <Route path= "/spareparts_sidebar" component={SpareParts_sidebar}/>
            <Route path= "/battery_sidebar" component={Battery_Sidebar}/>
            <Route path= "/akij_cng_sidebar" component={Akij_CNG_Sidebar}/>
           
           

            <Route path= "/contactUs" component={ContactwithUs}/>
        </Switch>
    </div>
    )
}

export default Main;
