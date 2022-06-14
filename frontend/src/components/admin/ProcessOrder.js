import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

const ProcessOrder = () => {

    
    return (
        <Fragment>
            <MetaData title={"Product id"}/>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                       
                <div className="container container-fluid">
  <div className="row d-flex justify-content-around">
    <div className="col-12 col-lg-7 order-details">
      <h1 className="my-5">Order # 4543f34f545</h1>
      <h4 className="mb-4">Shipping Info</h4>
      <p><b>Name:</b> Ali</p>
      <p><b>Phone:</b> 03445465768</p>
      <p className="mb-4"><b>Address:</b>Bitya Mianwali</p>
      <p><b>Amount:</b> Rs 10000</p>
      <hr />
      <h4 className="my-4">Payment</h4>
      <p className="greenColor"><b>PAID</b></p>
      <h4 className="my-4">Payment ID</h4>
      <p className="greenColor"><b>3458349584985</b></p>
      <h4 className="my-4">Order Status:</h4>
      <p className="greenColor"><b>Delivered</b></p>
      <h4 className="my-4">Order Items:</h4>
      <hr />
      <div className="cart-item my-1">
        <div className="row my-5">
          <div className="col-4 col-lg-2">
            <img src="/images/cement1.jpg" alt="Laptop" height={45} width={65} />
          </div>
          <div className="col-5 col-lg-5">
            <a href="#">Mic</a>
          </div>
          <div className="col-4 col-lg-2 mt-4 mt-lg-0">
            <p>Rs 20000</p>
          </div>
          <div className="col-4 col-lg-3 mt-4 mt-lg-0">
            <p>2 Piece(s)</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div className="col-12 col-lg-3 mt-5">
      <h4 className="my-4">Status</h4>
      <div className="form-group">
        <select className="form-control" name="status" value>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      <button className="btn btn-primary btn-block">
        Update Status
      </button>
    </div>
  </div>
</div>


                       
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default ProcessOrder