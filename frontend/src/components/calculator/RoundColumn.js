import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'


const RoundColumn = () => {
  return (
    <Fragment>
            <MetaData title={'RoundColumnCalculator'} />
    <div className="row">
            
                

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-4">Round Column Calculator</h1>

            
              <div className="form-group">
                <label for="category_field">Grade of concrete</label>
                <select className="form-control" id="category_field">
                    <option>M20(1:1.5:3)</option>
                    <option>M15(1:2:4)</option>
                    <option>M10(1:3:6)</option>
                    <option>M7.5(1:4:8)</option>
                  
                  </select>
              </div>



            <div className="form-group">
              <label for="name_field">Diameter in meter</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Height in meter</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label for="name_field">No of Columns</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            

          
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
            >
              Calculate
            </button>
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
            >
              Reset
            </button>

          </form>
    </div>
</div>
</Fragment>
                </div>
            </div>
            

        </Fragment>

  )
}

export default RoundColumn
