const data = [
    {
        name: "Diesel Engine Parts",       
    }, 

    {
        name: "Gasoline Engine Parts",       
    }, 

    
    {
        name: "Brake System",       
    }, 

    {
        name: "Suspension System",       
    }, 

    {
        name: "Hydraulic System",       
    }, 

    {
        name: "Electrical and Electronic System",       
    }, 

    {
        name: "Transmission System",       
    }, 

    
    {
        name: "Body Parts",       
    }, 

       
    {
        name: "CNG System",       
    }, 

    {
        name: "Fuel System",       
    }, 

    {
        name: "Steering System",       
    }, 

    {
        name: "Engine Accessories",       
    }, 

]


const TopVehicles = () => {
    return(
        <>
        <div class="grid-container-topVehicles1">
         
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