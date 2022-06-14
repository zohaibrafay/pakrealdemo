import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

const NewVehicle = () => {
  return (
    <Fragment>
    <MetaData title={'New Vehicle'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div class="wrapper my-5"> 
        <form class="shadow-lg" encType='multipart/form-data'>
            <h1 class="mb-4">New Vehicle</h1>

            <div class="form-group">
              <label for="name_field">Vehicle Name</label>
              <input
                type="text"
                id="name_field"
                class="form-control"
                value=""
              />
            </div>

            <div class="form-group">
                <label for="price_field">Owner Name</label>
                <input
                  type="text"
                  id="price_field"
                  class="form-control"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="description_field">Description</label>
                <textarea class="form-control" id="description_field" rows="8" ></textarea>
              </div>

              <div className="form-group">
              <label for="name_field">Year of manufacture</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
                <label for="price_field">Color</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="stock_field">chasis Number</label>
                <input
                  type="number"
                  id="stock_field"
                  class="form-control"
                  value=""
                />
              </div>

              <div className="form-group">
              <label for="name_field">Engine No</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
              
            </div>

              <div class="form-group">
                <label for="seller_field">Registeration Date</label>
                <input
                  type="text"
                  id="seller_field"
                  class="form-control"
                  value=""
                />
              </div>
              
              <div class='form-group'>
                <label>Images</label>
                
                    <div class='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            class='custom-file-input'
                            id='customFile'
                            multiple
                        />
                        <label class='custom-file-label' for='customFile'>
                            Choose Images
                        </label>
                    </div>
            </div>

  
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
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
export default NewVehicle
