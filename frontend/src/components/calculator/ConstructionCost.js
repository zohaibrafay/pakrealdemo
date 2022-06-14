import {React, useState, Fragment,useEffect} from 'react'
//import { arabicLocales } from 'validator/lib/alpha';
import MetaData from '../layout/MetaData'



const ConstructionCost = () => {
  const intialValues = {area:"",cost:""}
  const [formValues,setFormValues] = useState(intialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSumit] = useState(false);
  //let Error;
  //const [area, setArea] = useState("");
 // const [cost, setCost] = useState("");
  //const [error,setError] = useState("");

  const [costResult, setcostResult] = useState("");
  //const calculatecost = () => {
    // if (area === 999999 && area < 1089   ) {
    //      let Error="Value Must be Between 1089 to 99999";
    //      //alert="Value Must be Between 1089 to 99999";
    //     // setError(Error);
    //     setcostResult(Error);
        
    //    }else{
       
    
      //console.log(value.area)
    
      // let totalcost = Number(area * cost).toFixed(2);
      //let totalcost = value.area * value.cost;
      //console.log(totalcost)
    //setcostResult(totalcost);
    
    
    //setHeight("");
    //setWeight("");
      // }
  //}
  
  const handleChange = (e) => {
    //console.log(e.target);
    const {name,value} = e.target;
    setFormValues({  ...formValues, [name]: value });
    
    console.log(formValues);
    // let totalcost = Number(value.area*value.cost);
      
    //   console.log(totalcost)
    //setcostResult(totalcost);
  }
  function handlesubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
     setIsSumit(true);
  };
  useEffect(()=>{
       console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);       
       }
      },[formErrors]);
  const validate = (value) => {
    const errors = {};
    //const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(value.area > 999999){
      errors.area = "Area is less than 999999 "
}
else if(value.area < 1089){
  errors.area = "Area is greater than 1089"
}
   else if (!value.area  ) {
      errors.area = "Area is Required!"
    } 
    else if (!value.cost) {
      errors.area = "Cost is Required!"
    }
   else if(value.cost > 999999){
      errors.area = "Cost is less  than 999999"
}
else if(value.cost < 2000){
  errors.cost = "Cost is greater than 2000"
}
    
      //  else if(value.area > 999999 && value.area < 1089){
      //          errors.area = "Area is between 999999 to 1089"
      // }
    else {
      let total = value.area*value.cost;
      setcostResult(total);
    }
    
    return errors;
    
    };

  return (
    <Fragment>
            <MetaData title={'ConstructionCost'} />
    <div className="row">

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        <form className="shadow-lg" encType='multipart/form-data' onSubmit={handlesubmit} >
            <h1 className="mb-4">Cost Construction Calculator</h1>

            <div className="form-group">
              <label for="name_field">Builtup area (per square  feet)</label>
             
              <input  type="number" name="area"
               //id="Height "
               //type="text"
                className="form-control"
                placeholder="Builtup Area in square feet"
                value={formValues.area}
                //onChange={(e) => setArea(e.target.value)}
                onChange={handleChange}
                //size="7"  min="1089" max="9999999"  required 
              />
               
            </div>
            <div> <p className='text-danger'>{formErrors.area}</p></div>
            <div className="form-group">
              <label for="name_field">Approx Cost (per square feet) in RS </label>
              
              <input type="number" name="cost"
                
                //type="text"
                className="form-control"
                placeholder="Cost in Per Square Feet"
                value={formValues.cost}
                //onChange={(e) => setCost(e.target.value)}
                onChange={handleChange}
                // size="6"  min="2000" max="9999999" required
              />
               
            </div>
            <div><p className='text-danger'>{formErrors.cost}</p></div>
           
            


            
            
            

          
            <button
              id="login_button"
              type="submit"
              //value="Validate"
              class="btn btn-block py-3"
              //onClick={calculatecost}
              onSubmit={handlesubmit}
              
              
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
            {costResult && (
          <div className="mt-4">
           <>
            <p>Calculation of Cost : {costResult} RS </p>
            <p>Calculation of Cement Amount of Cost : {(16.4/100*costResult).toFixed(2)} RS </p>
            <p>Calculation of Sand Amount of Cost : {(12.3/100*costResult).toFixed(2)} RS </p>
            <p>Calculation of Aggregate Amount of Cost : {(7.4/100*costResult).toFixed(2)} RS </p>
            <p>Calculation of Steel Amount of Cost : {(24.6/100*costResult).toFixed(2)} RS </p>
            <p>Calculation of Finishers Amount of Cost : {(16.5/100*costResult).toFixed(2)} RS </p>
            <p>Calculation of Fittings Amount of Cost : {(22.8/100*costResult).toFixed(2)} RS </p>
           
            </>
          </div>
          
        )}
        
          </form>
         
        
    </div>
    
</div>

</Fragment>
                </div>
            </div>
            

        </Fragment>

  )
}

export default ConstructionCost
