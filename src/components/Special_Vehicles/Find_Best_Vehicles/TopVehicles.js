const data = [
    {
        name: "Refrigerator Van",
        img:  '/images/Special_Vehicles/1.jpg'
    },

    {
        name: "Garbage Truck",
        img:  '/images/Special_Vehicles/2.jpg'
    },

    
    {
        name: "Wrecker",
        img:  '/images/Special_Vehicles/3.jpg'
    },

    {
        name: "Camper Trailer / Caravan",
        img:  '/images/Special_Vehicles/4.jpg'
    },

    {
        name: "Truck Mounted Crane",
        img:  '/images/Special_Vehicles/5.jpg'
    },

    {
        name: "Oil/Water/Milk Tanker",
        img:  '/images/Special_Vehicles/6.jpg'
    },

    {
        name: "Sewerage Tanker",
        img:  '/images/Special_Vehicles/7.jpg'
    },

    {
        name: "Fire Fighting And Rescue Vehicles",
        img:  '/images/Special_Vehicles/8.jpg'
    },

    {
        name: "Road Sweeper Truck",
        img:  '/images/Special_Vehicles/9.jpg'
    },

    {
        name: "Vacuum Truck 4x2",
        img:  '/images/Special_Vehicles/10.jpg'
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