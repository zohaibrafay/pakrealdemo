import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

const NewLabor = () => {
  return (
    <Fragment>
    <MetaData title={'New Labor'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div class="wrapper my-5"> 
        <form class="shadow-lg" encType='multipart/form-data'>
            <h1 class="mb-4">New Labor</h1>

            <div class="form-group">
              <label for="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                class="form-control"
                value=""
              />
            </div>

            <div class="form-group">
                <label for="price_field">CNIC</label>
                <input
                  type="text"
                  id="price_field"
                  class="form-control"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="description_field">Work Description</label>
                <textarea class="form-control" id="description_field" rows="2" ></textarea>
              </div>

              <div class="form-group">
                <label for="category_field">Type</label>
                <select class="form-control" id="category_field">
                    <option>Plumber</option>
                    <option>Electration</option>
                    <option>Civil Engineer</option>
                    <option>Painter</option>
                    <option>Other</option>
                  </select>
              </div>
              <div class="form-group">
                <label for="stock_field">Contact Number</label>
                <input
                  type="number"
                  id="stock_field"
                  class="form-control"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="seller_field">Experienced</label>
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
              class="btn btn-block py-2"
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


export default NewLabor
