const data = [
    {
        name: "Excavator(Bucket Capacity 1.1CU.M)",
        img:  '/images/Construction_Machinery/1.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Excavator(Bucket Capacity 0.4CU.M)",
        img:  '/images/Construction_Machinery/2.jpg',
        url: "/wheel_loader"
    },

    
    {
        name: "Excavator(Bucket Capacity 0.36CU.M)",
        img:  '/images/Construction_Machinery/3.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Wheel Loader(Bucket Capacity 3.0CU.M)",
        img:  '/images/Construction_Machinery/4.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Wheel Loader(Bucket Capacity 1.8CU.M)",
        img:  '/images/Construction_Machinery/5.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Wheel Loader(Bucket Capacity 2.3CU.M)",
        img:  '/images/Construction_Machinery/6.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Backhoe Loader(Bucket Capacity 1.0CU.M)",
        img:  '/images/Construction_Machinery/7.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Vibratory/Road Rollers(Double Drum 3 Ton)",
        img:  '/images/Construction_Machinery/8.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Vibratory/Road Rollers(Single Drum 10 Ton)",
        img:  '/images/Construction_Machinery/9.jpg',
        url: "/wheel_loader"
    },

    {
        name: "Vibratory/Road Rollers(Single Drum 14 Ton)",
        img:  '/images/Construction_Machinery/10.jpg',
        url: "/wheel_loader"
    },

    
]


const TopVehicles = () => {
    return(
        <>
        <div class="grid-container-topVehicles">
         
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