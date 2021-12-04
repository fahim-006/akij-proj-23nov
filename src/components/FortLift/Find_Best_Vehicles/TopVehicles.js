const data = [
    {
        name: "Japan made ISUZU Diesel Engine 1(2.0 ~ 5.0 Ton)",
        img:  '/images/Forklift/1.jpg'
    },

    {
        name: "Japan made Nissan Petrol Engine 1(2.0 ~ 3.5 Ton)",
        img:  '/images/Forklift/2.jpg'
    },

    
    {
        name: "Electric/Battery Forklift 1(2.0 ~ 2.5 Ton)",
        img:  '/images/Forklift/3.jpg'
    },

    {
        name: "Electric Stacker 1(1.5 Ton)",
        img:  '/images/Forklift/4.jpg'
    },

    {
        name: "Hand Pallet 1(3.0 Ton)",
        img:  '/images/Forklift/5.jpg'
    },

    {
        name: "Manual Stacker 1(1.5 Ton)",
        img:  '/images/Forklift/6.jpg'
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