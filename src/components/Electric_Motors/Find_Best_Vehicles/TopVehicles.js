const data = [
    {
        name: "Samrat",
        img:  '/images/ELECTRIC_MOTORCYCLE/1.jpg'
    },

    {
        name: "Durjoy",
        img:  '/images/ELECTRIC_MOTORCYCLE/2.jpg'
    },

    
    {
        name: "Ponkhiraj",
        img:  '/images/ELECTRIC_MOTORCYCLE/3.jpg'
    },

    {
        name: "Durbar",
        img:  '/images/ELECTRIC_MOTORCYCLE/4.jpg'
    },

    {
        name: "Sathi",
        img:  '/images/ELECTRIC_MOTORCYCLE/5.jpg'
    },

    {
        name: "Duronto",
        img:  '/images/ELECTRIC_MOTORCYCLE/6.jpg'
    },

    {
        name: "Durdanto v6",
        img:  '/images/ELECTRIC_MOTORCYCLE/7.jpg'
    },


    {
        name: "Bondhu",
        img:  '/images/ELECTRIC_MOTORCYCLE/8.jpg'
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