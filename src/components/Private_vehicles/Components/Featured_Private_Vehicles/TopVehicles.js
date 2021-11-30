
const data = [
    {
        name: "7 Seat Microbus-Petrol/CNG",
        img:  '/images/Private_Vehicles/image1.PNG'
    },

    {
        name: "14 Seat Microbus Petrol/CNG",
        img: '/images/Private_Vehicles/image2.PNG'
    },

    
    {
        name: "Hiace Type Microbus-Diesel",
        img: '/images/Private_Vehicles/image3.PNG'
    },

    
    {
        name: "VIP Microbus",
        img: '/images/Private_Vehicles/image4.PNG'
    },

    
    {
        name: "Ambulance Diesel/Petrol",
        img: '/images/Private_Vehicles/image5.PNG'
    },

    
    {
        name: "Mini Ambulance Petrol/CNG",
        img: '/images/Private_Vehicles/image6.PNG'
    },

    
    {
        name: "Hiace Type Ambulance Petrol",
        img: '/images/Private_Vehicles/image7.PNG'
    },

    
    {
        name: "Hiace Type Ambulance Diesel",
        img: '/images/Private_Vehicles/image8.PNG'
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