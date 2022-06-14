import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

const LaborsList = () => {
  const [labourData, setLabourData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/admin/labors")
      .then((response) => {
        if (response.data.success) setLabourData(response.data.labors);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <MetaData title={"New Product"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Labors</h1>
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
                      <th>ID</th>
                      <th>Name</th>
                      <th>CNIC</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labourData?.map((labor) => {
                      return (
                        <tr key={labor._id}>
                          <td data-label="S.No">{labor._id}</td>
                          <td data-label="Name">{labor.name}</td>
                          <td data-label="Age">{labor.cnic}</td>
                          <td data-label="Marks%">{labor.type}</td>
                          <td data-label="Staus">
                            {" "}
                            <Link to={`/admin/updatelabor/${labor._id}`}>
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
                Showing {labourData.length} to {labourData.length} of{" "}
                {labourData.length} entries
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default LaborsList;
