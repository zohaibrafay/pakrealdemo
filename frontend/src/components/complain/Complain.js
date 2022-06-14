import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'

const Complain = () => {
  return (
    <Fragment>
            <MetaData title={'complain'} />
    <div className="row">
            
                

                <div className="col-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-4">Customer Complain Form</h1>

            <div className="form-group">
              <label for="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Email</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            

      
              <div className="form-group">
                <label for="description_field">Message</label>
                <textarea className="form-control" id="description_field" rows="2" ></textarea>
              </div>
            <button
              id="login_button"
              type="submit"
              class="btn btn-block  py-2 "
            >
             Submit
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

export default Complain