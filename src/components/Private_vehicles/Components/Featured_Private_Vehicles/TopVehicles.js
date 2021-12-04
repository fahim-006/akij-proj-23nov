
const data = [
    {
        name: "Microbus (Janata) 7 Seat (Petrol/CNG/LPG)",
        img:  '/images/Private_Vehicles/1.PNG'
    },

    {
        name: "Microbus (Janata) 14 Seat (Petrol/CNG/LPG)",
        img: '/images/Private_Vehicles/2.PNG'
    },
   
    {
        name: "Hiace Microbus 12/14 Seat Diesel",
        img: '/images/Private_Vehicles/3.PNG'
    },

    {
        name: "VIP Microbus 5/8 Seats Diesel/Petrol",
        img: '/images/Private_Vehicles/4.PNG'
    },          

    {
        name: "Mini-Ambulance SHEBA (Petrol/CNG)",
        img: '/images/Private_Vehicles/5.PNG'
    },

    {
        name: "Hiace-Type Ambulance Varosa Petrol/Gasoline",
        img: '/images/Private_Vehicles/6.PNG'
    },

    {
        name: "Hiace Ambulance Diesel",
        img: '/images/Private_Vehicles/7.PNG'
    },
    
  
]


const TopVehicles = () => {
    return(
        <>
        <div className="grid-container-topVehicles">
         
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