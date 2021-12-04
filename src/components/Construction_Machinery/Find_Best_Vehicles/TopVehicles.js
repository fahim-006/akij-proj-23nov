const data = [
    {
        name: "Excavator(Bucket Capacity 1.1CU.M)",
        img:  '/images/Construction_Machinery/1.jpg'
    },

    {
        name: "Excavator(Bucket Capacity 0.4CU.M)",
        img:  '/images/Construction_Machinery/2.jpg'
    },

    
    {
        name: "Excavator(Bucket Capacity 0.36CU.M)",
        img:  '/images/Construction_Machinery/3.jpg'
    },

    {
        name: "Wheel Loader(Bucket Capacity 3.0CU.M)",
        img:  '/images/Construction_Machinery/4.jpg'
    },

    {
        name: "Wheel Loader(Bucket Capacity 1.8CU.M)",
        img:  '/images/Construction_Machinery/5.jpg'
    },

    {
        name: "Wheel Loader(Bucket Capacity 2.3CU.M)",
        img:  '/images/Construction_Machinery/6.jpg'
    },

    {
        name: "Backhoe Loader(Bucket Capacity 1.0CU.M)",
        img:  '/images/Construction_Machinery/7.jpg'
    },

    {
        name: "Vibratory/Road Rollers(Double Drum 3 Ton)",
        img:  '/images/Construction_Machinery/8.jpg'
    },

    {
        name: "Vibratory/Road Rollers(Single Drum 10 Ton)",
        img:  '/images/Construction_Machinery/9.jpg'
    },

    {
        name: "Vibratory/Road Rollers(Single Drum 14 Ton)",
        img:  '/images/Construction_Machinery/10.jpg'
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