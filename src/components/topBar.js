import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from 'react-icons/go';
import classes from './topbar.module.scss';

const Topbar = () => {
    var [searchBar1, setSearchBar1] = useState(false);


    return(
        <div className="container-fluid topbar">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="item-menu">
                    <Link to="/"><img  src='images/logo.png' alt="Logo" className="logoImage"/></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="item1-menu"> <li className="navLi"><a href="/contactUs" >CONTACT</a></li></div>
                    <div className="item1-menu">  <li className="navLi"><a href="/dealers">DEALER</a></li></div>
                    <div className="item1-menu"> <li className="navLi"><a href="https://www.akij.net/">AKIJ GROUP</a></li></div>
                    <div className="item1-menu">  <li className="navLi"><a href="/aboutus">ABOUT US</a></li></div>
                    <div className="item1-menu"> <li className="navLi"><a href="/">HOME</a></li></div>
                    <div className="item1-menu"> <li className="navLi">
                        
                    <div className="hidden pr-2 cursor-pointer md:block">
                        <div className={classes.searchBar}>
                            {searchBar1 ? <input type="text" placeholder="Search here" name="search"/> : ""}
                            <GoSearch onMouseOver={() => setSearchBar1(!searchBar1)}/>

                        </div>
                    </div></li></div>
                 
                </div>
            </div>
        </div>
    );
}

export default Topbar;