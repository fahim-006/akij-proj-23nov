import Carousel from './home/Carousel'
import HomeCoverClick from "./HomeCoverClick";
import Sidebar from "./Sidebar";

const CategoryClick = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12">
                    <Sidebar/>
                </div>
                  
                <div className="col-lg-10 col-md-12 col-sm-12" 
                style={{opacity: "0.5" }}>
                        <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default CategoryClick;