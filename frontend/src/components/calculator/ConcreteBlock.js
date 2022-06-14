import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'


const ConcreteBlock = () => {
  return (
    <Fragment>
            <MetaData title={'ConcreteBlockCalculator'} />
    <div className="row">

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-4">Concrete Block Calculator</h1>


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
              <label for="name_field">Height/depth in meter</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
                <label for="category_field">Wall Thickness</label>
                <select className="form-control" id="category_field">
                    <option>10 CM Wall</option>
                    <option>23 CM Wall</option>
                  
                  </select>
              </div>

              <div className="form-group">
                <label for="category_field">Ratio</label>
                <select className="form-control" id="category_field">
                    <option>C.M 1:3</option>
                    <option>C.M 1:4</option>
                    <option>C.M 1:5</option>
                    <option>C.M 1:6</option>
                    <option>C.M 1:7</option>
                    <option>C.M 1:8</option>
                    <option>C.M 1:9</option>
                    \
                  </select>
              </div>


              <div className="form-group">
              <label for="name_field">Size of Brick (Length) in inch</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Size of Brick (Width) in inch</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Size of Brick (Height) in inch</label>
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

export default ConcreteBlock
