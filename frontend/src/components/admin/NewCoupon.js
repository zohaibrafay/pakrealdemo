import React, { Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import axios from "axios";

const NewCoupon = () => {
  const [couponData, setCouponData] = useState({
    name: "",
    expiry: "",
    discount: "",
  });
  const createNewCoupon = (e) => {
    e.preventDefault();
    console.log("handel create new coupon");
    axios
      .post("http://localhost:4000/api/v1/admin/coupon/new", couponData)
      .then((response) => {
        if (response.data.success) console.log("coupon::", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <MetaData title={"New Coupon"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div class="wrapper my-5">
              <form class="shadow-lg">
                <h1 class="mb-4">New Coupon Create</h1>

                <div class="form-group">
                  <label for="name_field">Name</label>
                  <input
                    type="text"
                    id="name_field"
                    class="form-control"
                    value={couponData.name}
                    onChange={(e) => {
                      setCouponData({ ...couponData, name: e.target.value });
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="price_field">Discount %</label>
                  <input
                    type="number"
                    id="price_field"
                    class="form-control"
                    value={couponData.discount}
                    onChange={(e) => {
                      setCouponData({
                        ...couponData,
                        discount: e.target.value,
                      });
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="price_field">Expiry Date</label>
                  <input
                    type="date"
                    id="price_field"
                    class="form-control"
                    value={couponData.expiry}
                    onChange={(e) => {
                      setCouponData({ ...couponData, expiry: e.target.value });
                    }}
                  />
                </div>

                <button
                  id="login_button"
                  class="btn btn-block py-3"
                  onClick={(e) => createNewCoupon(e)}
                >
                  CREATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default NewCoupon;
