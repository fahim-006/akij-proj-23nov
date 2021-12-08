
const data = [
    {
        name: "Microbus (Janata) 7 Seat (Petrol/CNG/LPG)",
        img:  '/images/Private_Vehicles/1.PNG',
        url: 'vip_microbus'
    },

    {
        name: "Microbus (Janata) 14 Seat (Petrol/CNG/LPG)",
        img: '/images/Private_Vehicles/2.PNG',
        url: 'druti_1000_kg_petrol'
    },
   
    {
        name: "Hiace Microbus 12/14 Seat Diesel",
        img: '/images/Private_Vehicles/3.PNG',
        url: 'vip_microbus'
    },

    {
        name: "VIP Microbus 5/8 Seats Diesel/Petrol",
        img: '/images/Private_Vehicles/4.PNG',
        url: 'druti_1000_kg_petrol'
    },          

    {
        name: "Mini-Ambulance SHEBA (Petrol/CNG)",
        img: '/images/Private_Vehicles/5.PNG',
        url: 'vip_microbus'
    },

    {
        name: "Hiace-Type Ambulance Varosa Petrol/Gasoline",
        img: '/images/Private_Vehicles/6.PNG',
        url: 'vip_microbus'
    },

    {
        name: "Hiace Ambulance Diesel",
        img: '/images/Private_Vehicles/7.PNG',
        url: 'druti_1000_kg_petrol'
    },
    
  
]


const TopVehicles = () => {
    return(
        <>
        <div className="grid-container-topVehicles">
         
                {data.map((item)=>(
                       <div>
                        <a href={item.url} className="anchorTag"> 
                            <img src ={item.img} style={{width: "284px"}}/>
                            <p style={{textAlign: "center"}}>{item.name}</p>
                        </a> 
                    </div>
                ))}
    
         </div>
        </>
    )
}

export default TopVehicles;