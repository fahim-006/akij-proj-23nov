const data = [
    {
        name: "Big Servicing Workshop",       
    },

    {
        name: "The most advanced technology",       
    },

    {
        name: "Best Equipment",       
    },

    {
        name: "Parts Store",       
    },

    {
        name: "Genuine Parts Guarantee",       
    },

    {
        name: "Certified Mechanical Engineers",       
    },

    {
        name: "Leakage Proof PAINT-BOOTH System",       
    },

    {
        name: "24/6 Business Day",       
    },

    {
        name: "Mobile/Online Booking Service",       
    },

    {
        name: "Online Appointment",       
    },

    {
        name: "SMS based notification upon completing the works",       
    },

    {
        name: "We provide road side assistance to stay beside you",       
    },
    

    
    {
        name: "On side service facility",       
    },
]


const TopVehicles = () => {
    return(
        <>
        <div class="grid-container-topVehicles">
         
                {data.map((item)=>(
                       <div> 
                        <p style={{textAlign: "center"}}>{item.name}</p>
                    </div>
                ))}
    
         </div>
        </>
    )
}

export default TopVehicles;