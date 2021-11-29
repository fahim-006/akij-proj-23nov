import React, { useEffect, useState } from 'react';
import './Blog.scss';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogContent.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
      }, []);
    return (
        <div className='body'>
            <h4>From Our Blog</h4>
            <div className="d-flex justify-content-center">
                <div class="diagonal"><span>Helpful Vehicle Buying</span></div>
            </div>
            <div className="container mt-5">
                <div className="blogs row">
                    <div className="card col-12 col-md-6 col-lg-4 mb-4">
                        <div className="img-container">
                            <img className="card-img-top" src="images/card1.jpeg" alt="" srcset="" />
                        </div>
                        <div className="card-info card-body">
                            <h3 className="my-3">Latest News</h3>
                            <p>AKIJ Motors, one of the biggest automobile companies in Bangladesh. It has been working since 2016 with trust & reputation. Akij Motors</p>
                        </div>            
                    </div>
                    <div className="card col-12 col-md-6 col-lg-4 mb-4">
                        <div className="img-container">
                            <img className="card-img-top" src="images/card2.png" alt="" srcset="" />
                        </div>
                        <div className="card-info card-body">
                            <h3 className="my-3">Latest News</h3>
                            <p>AKIJ Motors, one of the biggest automobile companies in Bangladesh. It has been working since 2016 with trust & reputation. Akij Motors</p>
                        </div>            
                    </div>
                    <div className="card col-12 col-md-6 col-lg-4 mb-4">
                        <div className="img-container">
                            <img className="card-img-top" src="images/card3.png" alt="" srcset="" />
                        </div>
                        <div className="card-info card-body">
                            <h3 className="my-3">Latest News</h3>
                            <p>AKIJ Motors, one of the biggest automobile companies in Bangladesh. It has been working since 2016 with trust & reputation. Akij Motors</p>
                        </div>            
                    </div>
                    <div className="card col-12 col-md-6 col-lg-4 mb-4">
                        <div className="img-container">
                            <img className="card-img-top" src="images/card4.png" alt="" srcset="" />
                        </div>
                        <div className="card-info card-body">
                            <h3 className="my-3">Latest News</h3>
                            <p>AKIJ Motors, one of the biggest automobile companies in Bangladesh. It has been working since 2016 with trust & reputation. Akij Motors</p>
                        </div>            
                    </div>
                    <div className="card col-12 col-md-6 col-lg-4 mb-4">
                        <div className="img-container">
                            <img className="card-img-top" src="images/card5.png" alt="" srcset="" />
                        </div>
                        <div className="card-info card-body">
                            <h3 className="my-3">Latest News</h3>
                            <p>AKIJ Motors, one of the biggest automobile companies in Bangladesh. It has been working since 2016 with trust & reputation. Akij Motors</p>
                        </div>            
                    </div>
                    <div className="card col-12 col-md-6 col-lg-4 mb-4">
                        <div className="img-container">
                            <img className="card-img-top img-fluid" src="images/card6.png" alt="" srcset="" />
                        </div>
                        <div className="card-info card-body">
                            <h3 className="my-3">Latest News</h3>
                            <p>AKIJ Motors, one of the biggest automobile companies in Bangladesh. It has been working since 2016 with trust & reputation. Akij Motors</p>
                        </div>            
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;