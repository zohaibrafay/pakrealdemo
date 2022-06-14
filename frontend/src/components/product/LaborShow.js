import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LaborShow = () => {
  
  const [labourData, setLabourData] = useState([]);

  useEffect(()=>{
		axios
		  .get(`http://localhost:4000/api/v1/labors`)
		  .then((response) => {
			if(response.data.success)
			setLabourData(response.data.labors)
		  })
		  .catch((error) => {
			console.log(error);
		  });
	}, [])

  return (
    <>
    
    <h1 id="products_heading" className="my-5">Labor</h1>
<section className="section service-2">
<div className="container">
<div className="row">
  {
    labourData.map((labour)=>{
      return (
        <div className="col-lg-4 col-md-6 col-sm-6" key={labour._id}>
    <div className="service-block mb-5">
      <img src={labour.images[0].url}  className="img-fluid" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to="">{labour.type}</Link>
      </h5>
      <div className="ratings mt-auto">
        <div className="rating-outer">
          <div className="rating-inner"></div>
        </div>
        <span id="no_of_reviews">(5 Reviews)</span>
      </div>
      <p className="card-text">Rs 1300.67 per hours</p>
      <Link to="/productdetails" id="view_btn" className="btn btn-block ">View Details</Link>
    </div>
    </div>
  </div>
      )
    })
  }
</div>
</div>
</section>

   
   </> 
   
   
)
};

export default LaborShow;
