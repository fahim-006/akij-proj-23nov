const data = [
    {
        name: "KAMLA",
        img:  './findTopImages/Kamla.png'
    },

    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },

    
    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },

    
    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },

    
    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },

    
    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },

    
    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },

    
    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png'
    },
]


const TopVehicles = () => {
    return(
        <>
        <div class="grid-container-topVehicles">
         
                {data.map((item)=>(
                       <div> 
                        <img src ={item.img}/>
                        <p style={{textAlign: "center"}}>{item.name}</p>
                    </div>
                ))}
    
         </div>
        </>
    )
}

export default TopVehicles;