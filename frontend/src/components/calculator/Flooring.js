import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'

const Flooring = () => {
  return (
    <Fragment>
            <MetaData title={'FlooringCalculator'} />
    <div className="row">
            
                

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-4">Flooring Calculator</h1>

            


            <div className="form-group">
              <label for="name_field">Length in meter</label>
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
              <label for="name_field">Title Dimension (Length) in ft</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Title Dimension (width) in ft</label>
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
              class="btn btn-block py-2"
            >
              Calculate
            </button>
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-2"
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

export default Flooring
