// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const VehicleShow = () => {
//   const [vehicleData, setVehicleData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/v1/vehicles`)
//       .then((response) => {
//         if (response.data.success) setVehicleData(response.data.vehiles);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <>
//       <h1 id="products_heading" className="my-5">
//         Vehicle
//       </h1>
//       <section className="section service-2">
//         <div className="container">
//           <div className="row">
//             {vehicleData?.map((vehicle) => {
//               return (
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                   <div className="service-block mb-5">
//                     <img
//                       src={vehicle.images[0].url}
//                       alt
//                       className="img-fluid"
//                     />
//                     <div className="card-body d-flex flex-column">
//                       <h5 className="card-title">
//                         <Link to="">{vehicle.name}</Link>
//                       </h5>
//                       <div className="ratings mt-auto">
//                         <div className="rating-outer">
//                           <div className="rating-inner"></div>
//                         </div>
//                         <span id="no_of_reviews">(5 Reviews)</span>
//                       </div>
//                       <p className="card-text">Rs 1300.67 per hours</p>
//                       <Link
//                         to="/productdetails"
//                         id="view_btn"
//                         className="btn btn-block "
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default VehicleShow;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VehicleShow = () => {
  const [vehicleData, setVehicleData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/vehicles`)
      .then((response) => {
        if (response.data.success) setVehicleData(response.data.vehiles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1 id="products_heading" className="my-5">
        Vehicle
      </h1>
      <section className="section service-2">
        <div className="container">
          <div className="row">
            {vehicleData?.map((vehicle) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={vehicle._id}>
        <div className="card p-3 rounded">
                    <img
                      src={vehicle.images[0].url}
                      alt
                      className="card-img-top mx-auto"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        <Link to={`/vehicles/${vehicle._id}`}>{vehicle.name}</Link>
                      </h5>
                      <div className="ratings mt-auto">
                        <div className="rating-outer">
                          <div className="rating-inner" style={{ width: `${(vehicle.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({vehicle.numOfReviews} Reviews)</span>
                      </div>
                      <p className="card-text">{vehicle.ownerCity}</p>
                      <Link
                        to={`/vehicled/${vehicle._id}`}
                        id="view_btn"
                        className="btn btn-block "
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleShow;