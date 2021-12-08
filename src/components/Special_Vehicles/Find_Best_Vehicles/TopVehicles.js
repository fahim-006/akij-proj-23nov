const data = [
    {
        name: "Refrigerator Van",
        img:  '/images/Special_Vehicles/1.jpg',
        url: '/wrecker'
    },

    {
        name: "Garbage Truck",
        img:  '/images/Special_Vehicles/2.jpg',
        url: '/wrecker'
        
    },

    
    {
        name: "Wrecker",
        img:  '/images/Special_Vehicles/3.jpg',
        url: '/wrecker'
    },

    {
        name: "Camper Trailer / Caravan",
        img:  '/images/Special_Vehicles/4.jpg',
        url: '/wrecker'
    },

    {
        name: "Truck Mounted Crane",
        img:  '/images/Special_Vehicles/5.jpg',
        url: '/wrecker'
    },

    {
        name: "Oil/Water/Milk Tanker",
        img:  '/images/Special_Vehicles/6.jpg',
        url: '/wrecker'
    },

    {
        name: "Sewerage Tanker",
        img:  '/images/Special_Vehicles/7.jpg',
        url: '/wrecker'
    },

    {
        name: "Fire Fighting And Rescue Vehicles",
        img:  '/images/Special_Vehicles/8.jpg'
    },

    {
        name: "Road Sweeper Truck",
        img:  '/images/Special_Vehicles/9.jpg',
        url: '/wrecker'
    },

    {
        name: "Vacuum Truck 4x2",
        img:  '/images/Special_Vehicles/10.jpg',
        url: '/wrecker'
    },

    
]


const TopVehicles = () => {
    return(
        <>
        <div class="grid-container-topVehicles">
         
                {data.map((item)=>(
                    <a href={item.url} className="anchorTag">
                       <div> 
                        <img src ={item.img} style={{width: "284px"}}/>
                        <p style={{textAlign: "center"}}>{item.name}</p>
                    </div>
                    </a>
                ))}
    
         </div>
        </>
    )
}

export default TopVehicles;