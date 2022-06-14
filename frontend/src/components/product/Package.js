import React from 'react';
import { Link } from 'react-router-dom'

const Package = () => {
  return (
    <>
    
    <h1 id="products_heading " className="my-5">Package</h1>
<section className="section service-2">
<div className="container">
<div className="row">
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/5marla.jpg" width={500} alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to="">5 marla</Link>
      </h5>
      <div className="ratings mt-auto">
        <div className="rating-outer">
          <div className="rating-inner"></div>
        </div>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 1,837,350</p>
      <Link to="/productdetails" id="view_btn" className="btn btn-block ">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/7marla.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
      
      <Link href=""
          >7 marla</Link>
      </h5>
      <div className="ratings mt-auto">
       <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(15 Reviews)</span>
      </div>
      <p className="card-text">Rs 2,573,100</p>
      <a href="#" id="view_btn" className="btn btn-block">View Details</a>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5">
      <img src="images/10marla.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href=""
          >10 marla</Link>
      </h5>
      <div className="ratings mt-auto">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 3,676,050</p>
      <Link href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5 mb-lg-0">
      <img src="images/8marla.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">8 marla</Link>
      </h5>
      <div className="ratings mt-auto">
       <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 2,940,300</p>

      <Link type="button" href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5 mb-lg-0">
      <img src="images/marla6.jpg"   alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">4 marla</Link>
      </h5>
      <div className="ratings mt-auto">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">RS 1,470,150</p>
      <Link href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="service-block mb-5 mb-lg-0">
      <img src="images/6marla.jpg" alt className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link href="">6 marla</Link>
      </h5>
      <div className="ratings mt-auto">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">RS 2,205,225</p>
      <Link href="#" id="view_btn" className="btn btn-block">View Details</Link>
    </div>
    </div>
  </div>
</div>
</div>
</section>

   
   </> 
   
   
)
};

export default Package;
