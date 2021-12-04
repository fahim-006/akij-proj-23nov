const data = [
    {
        name: "Durjoy 775 KG Diesel",
        img:  '/images/Commercial_Vehicles/Durjoy_775_KG_Diesel.PNG'
    },

    {
        name: "Covered Van (Durbar) 775Kg Diesel",
        img:  '/images/Commercial_Vehicles/Covered_van_durbar_775KG_Diesel.PNG'
    },

    
    {
        name: "Mini Truck (Pankhiraj) 1.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/mini_truck_pankhiuraj_1ton_duesel.PNG'
    },

    {
        name: "Mini Truck (Ponkhiraj Plus) 1.2 Ton",
        img:  '/images/Commercial_Vehicles/mini_truck_ponkhiraj_plus_1.2ton.PNG'
    },

    {
        name: "Covered Van (Druti) 1.0 Ton Petrol/CNG/LPG",
        img:  '/images/Commercial_Vehicles/4.PNG'
    },

    {
        name: "AKIJ Tempu (Durjoy) 775 Kg Diesel",
        img:  '/images/Commercial_Vehicles/5.PNG'
    },

    {
        name: "AKIJ Tempu (Durdanto) 775 Kg Diesel",
        img:  '/images/Commercial_Vehicles/6.PNG'
    },

    {
        name: "Human Hauler (Duronto) 1.0 Ton Petrol/CNG/LPG",
        img:  '/images/Commercial_Vehicles/7.PNG'
    },

    {
        name: "AKIJ Pickup (Bijoy) 1.5 Ton Diesel",
        img:  '/images/Commercial_Vehicles/8.PNG'
    },
    {
        name: "AKIJ Pickup (Borak) 3.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/9.PNG'
    },

    {
        name: "AKIJ Light Truck (Rofrof) 5.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/10.PNG'
    },

    {
        name: "Rustom Cargo Truck 4x2 15 Ton Diesel",
        img:  '/images/Commercial_Vehicles/11.PNG'
    },

    {
        name: "AKIJ Medium Duty Cargo Truck (Rof Rof Plus) 7.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/12.PNG'
    },

    {
        name: "Cargo Truck (4x2) 10 Ton Diesel",
        img:  '/images/Commercial_Vehicles/13.PNG'
    },

    {
        name: "Heavy Duty Cargo Truck 6x4 Diesel",
        img:  '/images/Commercial_Vehicles/14.PNG'
    },

    {
        name: "Heavy Duty Cargo Truck (Bahadur) 6x4 Diesel",
        img:  '/images/Commercial_Vehicles/15.PNG'
    },

    {
        name: "Kamla 3.5 CBM (ISUZU original) Dump Truck",
        img:  '/images/Commercial_Vehicles/16.PNG'
    },

    {
        name: "Dump Truck 3.5/5.0 CBM - Kamla Plus| Tipper",
        img:  '/images/Commercial_Vehicles/17.PNG'
    },

    {
        name: "AKIJ Dump Truck (Shaktiman 4x2) 11 CBM",
        img:  '/images/Commercial_Vehicles/19.PNG'
    },

    {
        name: "AKIJ Dump Truck (Shaktiman 4x2) 11 CBM",
        img:  '/images/Commercial_Vehicles/20.PNG'
    },

    {
        name: "Dump Truck 16 CBM Diesel",
        img:  '/images/Commercial_Vehicles/21.PNG'
    },

    {
        name: "AKIJ Dump Truck (Pahloan) 20 CBM (6x4)",
        img:  '/images/Commercial_Vehicles/22.PNG'
    },
    {
        name: "Prime Mover (Hati) 4x2",
        img:  '/images/Commercial_Vehicles/23.PNG'
    },

    {
        name: "Prime Mover (Hati +) 6x4 Diesel",
        img:  '/images/Commercial_Vehicles/24.PNG'
    },

    {
        name: "Semi Trailer 20/40'",
        img:  '/images/Commercial_Vehicles/25.PNG'
    },

    {
        name: "Multi Axle - Trailer",
        img:  '/images/Commercial_Vehicles/26.PNG'
    },
]


const TopVehicles = () => {
    return(
        <>
        <div class="grid-container-topVehicles">
         
                {data.map((item)=>(
                       <div> 
                        <img src ={item.img} style={{width: "284px"}}/>
                        <p style={{textAlign: "center"}}>{item.name}</p>
                    </div>
                ))}
    
         </div>
        </>
    )
}

export default TopVehicles;