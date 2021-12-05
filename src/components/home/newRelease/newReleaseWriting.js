import tick from '../images/tickSign.png'

const NewReleaseWriting = () => {
    return(
    <div className="newRelease">
        <h5>New Released vehicle</h5>
            <div className="grid-new-release"> 
                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> Stylish Design.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> Eco-friendly.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> Hydraulic-brake system.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> Very effective with minimum cost.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> No Chain sprocket.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> Hassle free smooth driving.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px"}} alt="Tick sign"/> No cost for fuel.</h6>
                </div>

                <div className="grid-new-release-items">
                    <h6><img src={tick} style={{marginRight: "10px", fontSize: "28px"}} alt="Tick sign"/> No Sound pollution.</h6>  
                </div>

             
            </div>
            <div>
                    <h6>Conditional warranty: 6-month warrenty for Battery, Motor and Controller.</h6>  
                </div>
        <button>Learn more</button>
    </div>
    )
}

export default NewReleaseWriting;