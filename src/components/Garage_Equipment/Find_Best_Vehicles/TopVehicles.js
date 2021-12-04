const data = [
    {
        name: "Scanner Universal (X-431 PAD III) ",
        img:  '/images/garage_equipment/1.PNG'
    },

    {
        name: "Scanner Universal (Scanner X 431Pad II) ",
        img:  '/images/garage_equipment/2.PNG'
    },

    {
        name: "Scanner Universal (Scanner: X431 Pro 3) ",
        img:  '/images/garage_equipment/3.PNG'
    },

    {
        name: "GAS Analyzer",
        img:  '/images/garage_equipment/4.PNG'
    },

    {
        name: "3D Wheel Aligner",
        img:  '/images/garage_equipment/5.PNG'
    },

    {
        name: "3D Wheel Aligner (Big Car)",
        img:  '/images/garage_equipment/6.PNG'
    },

    {
        name: "Wheel Balancer",
        img:  '/images/garage_equipment/7.PNG'
    },

    {
        name: "Wheel Balancer for Truck",
        img:  '/images/garage_equipment/8.PNG'
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