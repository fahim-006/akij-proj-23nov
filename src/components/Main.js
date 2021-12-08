import { Switch, Route, Redirect} from 'react-router-dom'
import About from './about/About';
import DealerPage from './Dealer';
import CategoryClick from './categoryClick';
import MiniTruck from './Sidebar/subCategoryDetails/components/Link1/mini_truck_1000kg_diesel';
import Home from './home/Home'
import Duronto from './Sidebar/subCategoryDetails/components/Link3/Duronto';
import Druti from './Sidebar/subCategoryDetails/components/Link2/Druti';
import PonkhirajPlus from './Sidebar/subCategoryDetails/components/Link4/PonkhirajPlus.js';
import BijoyderTon from './Sidebar/subCategoryDetails/components/Link5/BijoyderTon';
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
import BorakTinTon from './Sidebar/subCategoryDetails/components/Link6/BorakTinTon';
import Rajdut_4ton from './Sidebar/subCategoryDetails/components/Rajdut_4.0_Ton_Diesel';
import RofRof_17_Feet from './Sidebar/subCategoryDetails/components/RofRof_(4x2)_17_Feet';
import RofRof_7_Ton from './Sidebar/subCategoryDetails/components/RofRof_7ton';
import Rustom_20_Feet from './Sidebar/subCategoryDetails/components/Rustom (4x2) 20 Feet';
import Rustom_24_Feet from './Sidebar/subCategoryDetails/components/Rustom (4x2) 24 Feet';
import Saktiman_24_Feet from './Sidebar/subCategoryDetails/components/Shaktiman (4x2) 24 Feet';
import Tufan_20_Feet from './Sidebar/subCategoryDetails/components/Tufan 20 Feet';
import Tufan_24_Feet from './Sidebar/subCategoryDetails/components/Tufan 24 Feet';
import Shaktiman_Plus_24_Feet from './Sidebar/subCategoryDetails/components/Shaktiman Plus 24 Feet';
import Heavy_Duty_Cargo_Truck from './Sidebar/subCategoryDetails/components/Bahadur Truck (6x4) 45 Ton';
import Heavy_Duty_Cargo_Truck_23 from './Sidebar/subCategoryDetails/components/Bahadur Truck (6x4) 23 Ton';
import Kamla_3Point5_CMB from './Sidebar/subCategoryDetails/components/Kamla 3.5 CBM';
import Kamla_Plus_Tipper from './Sidebar/subCategoryDetails/components/Kamla Plus_Tipper';
import VIP_Microbus from './Sidebar/subCategoryDetails/components/VIP Microbus';
import Golf from './Sidebar/subCategoryDetails/components/Golf';
import Forklift_Mojdur from './Sidebar/subCategoryDetails/components/Forklift_Mojdur';
import Duronto_V6 from './Sidebar/subCategoryDetails/components/Duronto_v6';
import Scanner_Universal from './Sidebar/subCategoryDetails/components/Scanner Universal';
import Samrat from './Sidebar/subCategoryDetails/components/Samrat';
import Wheel_Loader from './Sidebar/subCategoryDetails/components/Wheel_Loader';
import Wracker from './Sidebar/subCategoryDetails/components/Wracket';

const Main = () => {
    return (
    <div>
        <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/aboutus" exact component={About} />
            <Route path = "/dealers" exact component={DealerPage} />
            <Route path= "/navbarclick" component={CategoryClick}/>
            <Route path= "/PONKHIRAJ_1000KG_DIESEL" component={MiniTruck}/>
            <Route path= "/druti_1000_kg_petrol" component={Druti}/>    
            <Route path= "/duronto_1000_kg" component={Duronto}/>  
            <Route path= "/PONKHIRAJ_PLUS_TON_DIESEL" component={PonkhirajPlus}/>
            <Route path= "/bijoyderton" component={BijoyderTon}/>
            <Route path= "/borakTinTon" component={BorakTinTon}/>
            <Route path= "/rajdut_4_ton" component={Rajdut_4ton}/>
            <Route path= "/rofrof17feet" component={RofRof_17_Feet}/>
            <Route path= "/rofrof_7_ton" component={RofRof_7_Ton}/>
            <Route path= "/rustom_20_feet" component={Rustom_20_Feet}/>
            <Route path= "/rustom_24_feet" component={Rustom_24_Feet}/>
            <Route path= "/saktiman_24_Feet" component={Saktiman_24_Feet}/>
            <Route path= "/tufan_20_feet" component={Tufan_20_Feet}/>
            <Route path= "/tufan_24_feet" component={Tufan_24_Feet}/>
            <Route path= "/shaktiman_plus_24_feet" component={Shaktiman_Plus_24_Feet}/>
            <Route path= "/heavy_duty_cargo_truck" component={Heavy_Duty_Cargo_Truck}/>
            <Route path= "/heavy_duty_cargo_truck_23Ton" component={Heavy_Duty_Cargo_Truck_23}/>
            <Route path= "/kamla_3.5_cmb" component={Kamla_3Point5_CMB}/>
            <Route path= "/kamla_plus_tipper" component={Kamla_Plus_Tipper}/>
            <Route path= "/vip_microbus" component={VIP_Microbus}/>
            <Route path= "/golf" component={Golf}/>
            <Route path= "/forklift_mojdur" component={Forklift_Mojdur}/>
            <Route path= "/private_vehicles" component={PrivateVehicles}/>

            <Route path= "/commercial_vehicles" component={CommercialVehicles}/>
            <Route path= "/motor_servicing" component={MotorServicing}/>
            <Route path= "/garage_equipment" component={GarageEquipment}/>
            <Route path= "/spare_parts" component={SpareParts}/>
            <Route path= "/electric_motorcycle" component={ElectricMotorcyle}/>
            <Route path= "/construction_machinery" component={ConstructionMachinery}/>
            <Route path= "/forlift" component={Forlift}/>
            <Route path= "/special_vehicles" component={SpecialVehicles}/>
            <Route path= "/dutonto_v6" component={Duronto_V6}/>
            <Route path= "/wheel_loader" component={Wheel_Loader}/>
            <Route path= "/wrecker" component={Wracker}/>
            <Route path= "/scanner_universal" component={Scanner_Universal}/>
            <Route path= "/samrat" component={Samrat}/>


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
