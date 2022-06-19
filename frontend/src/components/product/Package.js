// import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Package = () => {
  
//   const [packData, setPackData] = useState([]);

//   useEffect(()=>{
// 		axios
// 		  .get(`http://localhost:4000/api/v1/packs`)
// 		  .then((response) => {
// 			if(response.data.success)
// 			setPackData(response.data.packs)
// 		  })
// 		  .catch((error) => {
// 			console.log(error);
// 		  });
// 	}, [])

//   return (
//     <>
    
//     <h1 id="products_heading" className="my-5">Packages</h1>
// <section className="section service-2">
// <div className="container">
// <div className="row">
//   {
//     packData.map((pack)=>{
//       return (

//         <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={pack._id}>
//         <div className="card p-3 rounded">
//       <img src={pack.images[0].url}  className="card-img-top mx-auto" />
//       <div className="card-body d-flex flex-column">
//       <h5 className="card-title">
//         <Link to={`/pack/${pack._id}`}>{pack.numberofmarla} Marla</Link>
//       </h5>
//       <div className="ratings mt-auto">
//         <div className="rating-outer">
//           <div className="rating-inner" style={{ width: `${(pack.ratings / 5) * 100}%` }}></div>
//         </div>
//         <span id="no_of_reviews">({pack.numOfReviews} Reviews)</span>
//       </div>
//       <p className="card-text">{pack.totalprice}</p>
//       <Link to={`/pack/${pack._id}`} id="view_btn" className="btn btn-block ">View Details</Link>
//     </div>
//     </div>
//   </div>
//       )
//     })
//   }
// </div>
// </div>
// </section>

   
//    </> 
   
   
// )
// };

// export default Package;

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Package = () => {
  
  const [packData, setPackData] = useState([]);

  useEffect(()=>{
		axios
		  .get(`http://localhost:4000/api/v1/packs`)
		  .then((response) => {
			if(response.data.success)
			setPackData(response.data.packs)
		  })
		  .catch((error) => {
			console.log(error);
		  });
	}, [])

  return (
    <>
    
    <h1 id="products_heading" className="my-5">Packages</h1>
<section className="section service-2">
<div className="container">
<div className="row">
  {
    packData.map((pack)=>{
      return (

        <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={pack._id}>
        <div className="card p-3 rounded">
      <img src={pack.images[0].url}  className="card-img-top mx-auto" />
      <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to={`/pack/${pack._id}`}>{pack.numberofmarla} Marla</Link>
      </h5>
      <div className="ratings mt-auto">
        <div className="rating-outer">
          <div className="rating-inner" style={{ width: `${(pack.ratings / 5) * 100}%` }}></div>
        </div>
        <span id="no_of_reviews">({pack.numOfReviews} Reviews)</span>
      </div>
      <p className="card-text">{pack.totalprice}</p>
      <Link to={`/pack/${pack._id}`} id="view_btn" className="btn btn-block ">View Details</Link>
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

export default Package;