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
        name: "GOLF CART",
        img: './findTopImages/golf.png'
    },

    
    {
        name: "SPORTS WELDING MACHINE",
        img: './findTopImages/spot.png'
    },

    
    {
        name: "FORKLIFT (MOZDUR) GASOLINE/CNG",
        img: './findTopImages/forklift.png'
    },

    
    {
        name: "DURONTO V6",
        img: './findTopImages/duronto.png'
    },

    
    {
        name: "EXCAVATOR",
        img: './findTopImages/excavetor.PNG'
    },

    
    {
        name: "WRECKER",
        img: './findTopImages/wrecker.png'
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