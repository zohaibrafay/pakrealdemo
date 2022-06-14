import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const Calculator = () => {
  return (
   
    <Fragment>
    <h1 className="my-4">Estimation Calculator</h1>
    <div className="row" >
    
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      
      <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/constructioncost">Construction Cost </Link>
          </h5>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/cementconcrete">Cement Concrete </Link>
          </h5>
         
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/brick">Brick Masonry </Link>
          </h5>
         
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/concreteblock">Concrete  Block</Link>
          </h5>

        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/roundcolumn">Round Column</Link>
          </h5>
          
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/paint">Paint Work</Link>
          </h5>
          
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/steel">Steel Quantity</Link>
          </h5>
          
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/stair">Stair Case</Link>
          </h5>
        </div>
      </div>
    </div>


    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-3">
            <Link to="/concretetube">Concrete Tube</Link>
          </h5>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-5">
            <Link to="/plaster">Plaster</Link>
          </h5>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
        <Link to="">
        <i id="Calculator-icon" class="fa fa-calculator"  aria-hidden="true"></i>
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title ml-5">
            <Link to="/flooring">Flooring</Link>
          </h5>
        </div>
      </div>
    </div>




                </div>
               


            

        </Fragment>
      
        


      
  )
}

export default Calculator
