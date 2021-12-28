const data = [
    {
        name: "KAMLA",
        img:  './findTopImages/Kamla.png',
        url: '/kamla_3.5_cmb'
    },

    {
        name: "VIP MICROBUS",
        img: './findTopImages/vipMicrobus.png',
        url: '/vip_microbus'
    },

    
    {
        name: "GOLF CART",
        img: './findTopImages/golf.png',
        url: "/golf"
    },

    
    {
        name: "SPORTS WELDING MACHINE",
        img: './findTopImages/spot.png'
    },

    
    {
        name: "FORKLIFT (MOZDUR) GASOLINE/CNG",
        img: './findTopImages/forklift.png',
        url: '/forklift_mojdur'
    },

    
    {
        name: "DURONTO V6",
        img: './findTopImages/duronto.png',
        url: '/dutonto_v6'
    },

    
    {
        name: "EXCAVATOR",
        img: './findTopImages/excavetor.PNG',
        url: '/forklift_mojdur'
    },

    
    {
        name: "WRECKER",
        img: './findTopImages/wrecker.png',
        url: "/golf"
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