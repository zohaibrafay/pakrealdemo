import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewVehicle = () => {
  const { id } = useParams();
  const [vehicleData, setVehicleData] = useState({});
  const [updateStatus, setUpdateStatus] = useState(false);

  const updateLaborInfo = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4000/api/v1/admin/vehicle/${id}`, vehicleData)
      .then((response) => {
        if (response.data.success) setUpdateStatus(true);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("component mounted");
    axios
      .get(`http://localhost:4000/api/v1/vehicle/${id}`)
      .then((response) => {
        if (response.data.success) setVehicleData(response.data.vehicle);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      <MetaData title={"Update Vehicle"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form className="shadow-lg">
                <h1 className="mb-4">Update Vehicle</h1>
                <div className="form-group">
                  <label htmlFor="name_field">Vehicle Name</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={vehicleData?.name}
                    onChange={(e) => {
                      setVehicleData({ ...vehicleData, name: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price_field">Owner Name</label>
                  <input
                    type="text"
                    id="price_field"
                    className="form-control"
                    value={vehicleData?.ownerName}
                    onChange={(e) => {
                      setVehicleData({
                        ...vehicleData,
                        ownerName: e.target.value,
                      });
                    }}
                  />
                </div>
                {/* <div className="form-group">
      <label htmlFor="description_field">Description</label>
      <textarea className="form-control" id="description_field" rows={8} defaultValue={""} value={vehicleData?.ownerName} onChange={(e)=>{setVehicleData({...vehicleData, ownerName: e.target.value})}}/>
    </div> */}
                <div classname="form-group">
                  <label htmlFor="name_field">Year of manufacture</label>
                  <input
                    type="number"
                    id="name_field"
                    classname="form-control"
                    value={vehicleData?.yearOfManufacture}
                    onChange={(e) => {
                      setVehicleData({
                        ...vehicleData,
                        yearOfManufacture: e.target.value,
                      });
                    }}
                  />
                </div>
                <div classname="form-group">
                  <label htmlFor="price_field">Color</label>
                  <input
                    type="text"
                    id="price_field"
                    classname="form-control"
                    value={vehicleData?.color}
                    onChange={(e) => {
                      setVehicleData({ ...vehicleData, color: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stock_field">chasis Number</label>
                  <input
                    type="number"
                    id="stock_field"
                    className="form-control"
                    value={vehicleData?.chasisNumber}
                    onChange={(e) => {
                      setVehicleData({
                        ...vehicleData,
                        chasisNumber: e.target.value,
                      });
                    }}
                  />
                </div>
                <div classname="form-group">
                  <label htmlFor="name_field">Engine No</label>
                  <input
                    type="text"
                    id="name_field"
                    classname="form-control"
                    value={vehicleData?.engineNo}
                    onChange={(e) => {
                      setVehicleData({
                        ...vehicleData,
                        engineNo: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="seller_field">Registeration Date</label>
                  <input
                    type="date"
                    id="seller_field"
                    className="form-control"
                    value={vehicleData?.regDate}
                    onChange={(e) => {
                      setVehicleData({
                        ...vehicleData,
                        regDate: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Images</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      name="product_images"
                      className="custom-file-input"
                      id="customFile"
                      multiple
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Images
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <p>Approval status:</p> {" "}
                  <input
                    type="radio"
                    id="approve"
                    name="fav_language"
                    value={true}
                    onChange={(e) => {
                      setVehicleData({ ...vehicleData, isApproved: true });
                    }}
                  />
                    <label for="approve">Approve</label> {" "}
                  <input
                    type="radio"
                    id="reject"
                    name="fav_language"
                    value={false}
                    onChange={(e) => {
                      setVehicleData({ ...vehicleData, isApproved: false });
                    }}
                  />
                    <label for="reject">Reject</label>
                </div>
                <button
                  className="btn btn-block py-2"
                  onClick={updateLaborInfo}
                >
                  UPDATE
                </button>
                {updateStatus ? (
                  <p
                    style={{ marginTop: "30px" }}
                  >{`Vehicle with id: ${id} has been successfully updated !`}</p>
                ) : null}
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};
export default NewVehicle;
