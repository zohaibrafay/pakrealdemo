import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

const VehicleList = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/admin/vehicles")
      .then((response) => {
        if (response.data.success) setVehicleData(response.data.vehicles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <MetaData title={"Vehicle List"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Vehicle</h1>
            <div id="example_wrapper" className="dataTables_wrapper my-5">
              <div className="dataTables_length" id="example_length">
                <label>
                  Show{" "}
                  <select
                    name="example_length"
                    aria-controls="example"
                    className
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <div id="example_filter" className="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    className
                    placeholder
                    aria-controls="example"
                  />
                </label>
              </div>
              <table
                id="example"
                className="display dataTable"
                style={{ width: "100%" }}
                aria-describedby="example_info"
              >
                <table class="table">
                  <thead>
                    <tr>
                      <th>Vehicle ID</th>
                      <th>Vehicle Name</th>
                      <th>Owner</th>
                      <th>Engine No</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicleData?.map((vehicle) => {
                      return (
                        <tr key={vehicle._id}>
                          <td data-label="S.No">{vehicle._id}</td>
                          <td data-label="Name">{vehicle.name}</td>
                          <td data-label="Age">{vehicle.ownerName}</td>
                          <td data-label="Marks%">{vehicle.engineNo}</td>
                          <td data-label="Staus">
                            {" "}
                            <Link to={`/admin/updatevehicle/${vehicle._id}`}>
                              <i className="fa fa-pencil"></i>{" "}
                            </Link>{" "}
                            <i className="fa fa-trash"></i>{" "}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </table>
              <div
                className="dataTables_info"
                id="example_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 10 of 57 entries
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default VehicleList;
