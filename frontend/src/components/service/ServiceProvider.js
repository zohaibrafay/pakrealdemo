import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'

const ServiceProvider = () => {
 
      return (
    <Fragment>
            <MetaData title={'ServiceProvider'} />
            

            <h1 id="products_heading"  className="my-5">Service Provider</h1>
<section className="section service-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6  mr-10">
        <div className="service-block mb-5">
          <img src="/images/LaborReg.png" alt className="img-fluid" />
          <div className="card-body d-flex flex-column">
          
         
         
          <Link to="/labor" id="view_btn" className="btn btn-block ">Labor Register</Link>
        </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 mr-10">
        <div className="service-block mb-5">
          <img src="images/vehreg9.jpg" alt className="img-fluid" id="vehicleReg" />
          <div className="card-body d-flex flex-column">
          
          
          <Link to="/vehicle" id="view_btn" className="btn btn-block">Vehicle Register</Link>
        </div>
        </div>
      </div>
      
      
      
      
    </div>
  </div>
</section>

        </Fragment>
        
  )
   
}

export default ServiceProvider
