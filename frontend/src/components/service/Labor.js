import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import {newLabor} from '../../actions/laborActions'
import {LABOR_REGISTOR_REQUEST} from '../../constants/laborConstants'

const Labor = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    cinc: "",
    workDescription: "",
    type: "",
    contactNumber: "",
    laborArea: "",
    images: "",
  });

  const getBaseImg =(e)=>{
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({ ...formData, images: reader.result });
    }
    reader.readAsDataURL(files)

  }
  const registerLabour = async (e) => {
    e.preventDefault();
    let obj ={
      'name': formData.name,
      'dob': formData.dob,
      'cnic': formData.cinc,
    'description': formData.workDescription,
    'type': formData.type,
    'contactNumber': formData.contactNumber,
    'laborArea': formData.laborArea,
    'file': formData.images,
    }

    console.log("image",obj);
    dispatch(newLabor(obj))




    // console.log("I have been triggered");
    // const formDataObj = new FormData();
    // formDataObj.append("name", formData.name);
    // formDataObj.append("contactNumber", formData.contactNumber);
    // formDataObj.append("cinc", formData.cinc);
    // formDataObj.append("dob", formData.dob);
    // formDataObj.append("laborArea", formData.laborArea);
    // formDataObj.append("type", formData.type);
    // formDataObj.append("workDescription", formData.workDescription);
    // for (let i = 0; i < formData.image.length; i++) {
    //   formDataObj.append("files", formData.image[i]);
    // // }
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data; boundary=XXX",
    //   },
    // };
    // console.log("about to trigger api call", formDataObj);
    // await fetch("http://localhost:4000/api/v1/admin/labor/new", {
    //     method: 'POST',
    //     body: formDataObj,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODM2ZDczNjkyNTMwOTViN2FkMmU0YiIsImlhdCI6MTY1NDE1MTg2NCwiZXhwIjoxNjU0NzU2NjY0fQ.NHl4j5q57oFfO2eLzdm3cV1HSYWRhz204eKW9d51smg"
    //     }
    // })
    //     .then((res) => console.log(res))
    //     .catch((err) => ("Error occured", err));
    // axios
    //   .post("http://localhost:4000/api/v1/labor/new", formDataObj, config)
    //   .then((response) => {
    //     console.log("response::", response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <Fragment>
      <MetaData title={"labor"} />
      <div className="row">
        <div className="col-12">
          <Fragment>
            <div className="container container-fluid">
              <div className="wrapper my-5">
                <form className="shadow-lg" encType="multipart/form-data">
                  <h1 className="mb-4">Labor Registration Form</h1>

                  <div className="form-group">
                    <label for="name_field">Name</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="name_field">Date of Birth</label>
                    <input
                      type="date"
                      id="name_field"
                      className="form-control"
                      value={formData.dob}
                      onChange={(e) => {
                        setFormData({ ...formData, dob: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="name_field">CNIC</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={formData.cinc}
                      onChange={(e) => {
                        setFormData({ ...formData, cinc: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label for="description_field">Work Description</label>
                    <textarea
                      className="form-control"
                      id="description_field"
                      rows="2"
                      value={formData.workDescription}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          workDescription: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label for="category_field">Type</label>
                    <select
                      className="form-control"
                      id="category_field"
                      onChange={(e) => {
                        setFormData({ ...formData, type: e.target.value });
                      }}
                    >
                      <option value="Plumber">Plumber</option>
                      <option value="Electration">Electration</option>
                      <option value="Civil Engineer">Civil Engineer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="stock_field">Contact Number</label>
                    <input
                      type="tel"
                      id="stock_field"
                      className="form-control"
                      pattern="[0-9]{4}-[0-9]{7}"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          contactNumber: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label for="seller_field">Labor Area</label>
                    <input
                      type="text"
                      id="seller_field"
                      className="form-control"
                      value={formData.laborArea}
                      onChange={(e) => {
                        setFormData({ ...formData, laborArea: e.target.value });
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
                        onChange={(e) => {
                          getBaseImg(e);
                        }}
                      />
                      <label className="custom-file-label" for="customFile">
                        Choose Images
                      </label>
                    </div>
                  </div>

                  <button
                    id="login_button"
                    type="submit"
                    class="btn btn-block py-2"
                    onClick={(e) => {
                      registerLabour(e);
                    }}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Labor;
