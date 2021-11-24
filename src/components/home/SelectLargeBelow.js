import image from './images/largestbottom.png'

const SelectLargeBelow = () => {
    return(
        <div className="container-fluid selectLarge">
            <div className="row ">
                <div className="col-lg-4 col-md-12 col-sm-12 selectLargeDiv ">
                        <h2>Start today, Drive Today</h2>
                        <p>Best Private Vehicle</p>
                        <button>More</button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={image} width="82%"/>
                </div>
            </div>
        </div>
    )
}

export default SelectLargeBelow;