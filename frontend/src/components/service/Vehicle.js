import React, { Fragment, useState, useEffect } from "react";
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import {newVehicle} from '../../actions/vehicleActions'

const Vehicle = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    engineNo: "",
    regDate: "",
    yearOfManufacture: "",
    color: "",
    chasisNumber: "",
    ownerName: "",
    ownerCity: "",
    ownerCnic: "",
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
  const registerVehicle = async (e) => {
    e.preventDefault();
    let obj ={
      'name': formData.name,
      'regNo': formData.regNo,
      'engineNo': formData.engineNo,
    'regDate': formData.regDate,
    'color': formData.color,
    'yearOfManufacture': formData.yearOfManufacture,
    'chasisNumber': formData.chasisNumber,
    'ownerName': formData.ownerName,
    'ownerCity': formData.ownerCity,
    'ownerCnic': formData.ownerCnic,
    'file': formData.images,
    }

    console.log("image",obj);
    dispatch(newVehicle(obj))
  };

  return (

    <Fragment>
            <MetaData title={'vehicle'} />
    <div className="row">
            

                <div className="col-12">
                <Fragment>
    
        <div className="wrapper my-5"> 
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-4">Vehicle Registration Form</h1>

            <div className="form-group">
              <label for="name_field"> Name</label>
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
              <label for="name_field">Reg No</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={formData.regNo}
                      onChange={(e) => {
                        setFormData({ ...formData, regNo: e.target.value });
                      }}
              />
            </div>
            <div className="form-group">
              <label for="name_field">Engine No</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={formData.engineNo}
                      onChange={(e) => {
                        setFormData({ ...formData, engineNo: e.target.value });
                      }}
              />
              
            </div>
            <div className="form-group">
              <label for="name_field">Registeration Date</label>
              <input
                type="date"
                id="name_field"
                className="form-control"
                value={formData.regDate}
                      onChange={(e) => {
                        setFormData({ ...formData, regDate: e.target.value });
                      }}
              />
            </div>
            <div className="form-group">
              <label for="name_field">Year of manufacture</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={formData.yearOfManufacture}
                      onChange={(e) => {
                        setFormData({ ...formData, yearOfManufacture: e.target.value });
                      }}
              />
            </div>

            <div className="form-group">
                <label for="price_field">Color</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  value={formData.color}
                      onChange={(e) => {
                        setFormData({ ...formData, color: e.target.value });
                      }}
                />
              </div>

              
              <div className="form-group">
                <label for="stock_field"> chasis Number</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  value={formData.chasisNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, chasisNumber: e.target.value });
                      }}
                />
              </div>

              <div className="form-group">
                <label for="seller_field">Owner Name</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={formData.ownerName}
                      onChange={(e) => {
                        setFormData({ ...formData, ownerName: e.target.value });
                      }}
                />
              </div>
              <div className="form-group">
                <label for="seller_field">Owner City</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={formData.ownerCity}
                      onChange={(e) => {
                        setFormData({ ...formData, ownerCity: e.target.value });
                      }}
                />
              </div>
              <div className="form-group">
                <label for="seller_field">Owner CNIC</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={formData.ownerCnic}
                      onChange={(e) => {
                        setFormData({ ...formData, ownerCnic: e.target.value });
                      }}
                />
              </div>
              
              <div className='form-group'>
                <label>Images</label>
                
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            className='custom-file-input'
                            id='customFile'
                            multiple
                            onChange={(e) => {
                              getBaseImg(e);
                            }}
                        />
                        <label className='custom-file-label' for='customFile'>
                            Choose Images
                        </label>
                    </div>
            </div>

  
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-2"
              onClick={(e) => {
                registerVehicle(e);
              }}
            >
              CREATE
            </button>

          </form>
    </div>

</Fragment>
                </div>
            </div>
            

        </Fragment>
  )
}

export default Vehicle
