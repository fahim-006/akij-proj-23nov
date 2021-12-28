import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
   

   
    {
        name: "AKIJ Pickup (Borak) 3.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/9.PNG'
    },

    {
        name: "AKIJ Light Truck (Rofrof) 5.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/10.PNG'
    },

    {
        name: "Rustom Cargo Truck 4x2 15 Ton Diesel",
        img:  '/images/Commercial_Vehicles/11.PNG'
    },

    {
        name: "AKIJ Medium Duty Cargo Truck (Rof Rof Plus) 7.0 Ton Diesel",
        img:  '/images/Commercial_Vehicles/12.PNG'
    },

    {
        name: "Cargo Truck (4x2) 10 Ton Diesel",
        img:  '/images/Commercial_Vehicles/13.PNG'
    },

    {
        name: "Heavy Duty Cargo Truck 6x4 Diesel",
        img:  '/images/Commercial_Vehicles/14.PNG'
    },

    {
        name: "Heavy Duty Cargo Truck (Bahadur) 6x4 Diesel",
        img:  '/images/Commercial_Vehicles/15.PNG'
    },

    {
        name: "Kamla 3.5 CBM (ISUZU original) Dump Truck",
        img:  '/images/Commercial_Vehicles/16.PNG'
    },

    {
        name: "Dump Truck 3.5/5.0 CBM - Kamla Plus| Tipper",
        img:  '/images/Commercial_Vehicles/17.PNG'
    },

    {
        name: "AKIJ Dump Truck (Shaktiman 4x2) 11 CBM",
        img:  '/images/Commercial_Vehicles/19.PNG'
    },

    {
        name: "AKIJ Dump Truck (Shaktiman 4x2) 11 CBM",
        img:  '/images/Commercial_Vehicles/20.PNG'
    },

    {
        name: "Dump Truck 16 CBM Diesel",
        img:  '/images/Commercial_Vehicles/21.PNG'
    },

    {
        name: "AKIJ Dump Truck (Pahloan) 20 CBM (6x4)",
        img:  '/images/Commercial_Vehicles/22.PNG'
    },
    {
        name: "Prime Mover (Hati) 4x2",
        img:  '/images/Commercial_Vehicles/23.PNG'
    },

    {
        name: "Prime Mover (Hati +) 6x4 Diesel",
        img:  '/images/Commercial_Vehicles/24.PNG'
    },

    {
        name: "Semi Trailer 20/40'",
        img:  '/images/Commercial_Vehicles/25.PNG'
    },

    {
        name: "Multi Axle - Trailer",
        img:  '/images/Commercial_Vehicles/26.PNG'
    },
]

const MediumAndHeavyDutyTruck = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return(
        <div style={{marginTop:"107px"}}>
            <h1 style={{marginBottom: "50px"}}>Medium and Heavy Duty Trucks</h1>
        <Carousel responsive={responsive}>
                  {data.map((item)=>(
                       <div> 
                        <img src ={item.img} style={{width: "284px"}}/>
                        <p style={{textAlign: "left", fontWeight: "bold"}}>{item.name}</p>
                    </div>
                ))}
        </Carousel>
        </div>
    )
}

export default MediumAndHeavyDutyTruck;