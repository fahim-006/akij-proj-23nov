const data = [
    {
        name: "Samrat",
        img:  '/images/ELECTRIC_MOTORCYCLE/1.jpg',
        url: "samrat"
    },

    {
        name: "Durjoy",
        img:  '/images/ELECTRIC_MOTORCYCLE/2.jpg',
        url: "samrat"
    },

    
    {
        name: "Ponkhiraj",
        img:  '/images/ELECTRIC_MOTORCYCLE/3.jpg',
        url: "dutonto_v6"
    },

    {
        name: "Durbar",
        img:  '/images/ELECTRIC_MOTORCYCLE/4.jpg',
        url: "samrat"
    },

    {
        name: "Sathi",
        img:  '/images/ELECTRIC_MOTORCYCLE/5.jpg',
        url: "dutonto_v6"
    },

    {
        name: "Duronto",
        img:  '/images/ELECTRIC_MOTORCYCLE/6.jpg',
        url: "samrat"
    },

    {
        name: "Durdanto v6",
        img:  '/images/ELECTRIC_MOTORCYCLE/7.jpg',
        url: "dutonto_v6"
    },


    {
        name: "Bondhu",
        img:  '/images/ELECTRIC_MOTORCYCLE/8.jpg',
        url: "dutonto_v6"
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