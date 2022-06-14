import {React, useState,useEffect, Fragment} from 'react'
import MetaData from '../layout/MetaData'


const Steel = () => {
  const intialValues = {width:"",length:"",diameter:"",distanceWidth:"",distanceLength:""}
  const [formValues,setFormValues] = useState(intialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSumit] = useState(false);
  const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [distanceWidth,setDistanceWidth] = useState("");
    const [distanceLength,setDistanceLength] = useState("");

    const [diameter,setDiameter] = useState("");
  
    const [totalKG, setTotalKG] = useState("");
  
    
   // function calculateQuantity() {
    //   var steelInKG;
    //   var totalBarWidth;
    //   var totalBarLength;
    //   var widthTotalKG;
    //   var lengthTotalKG;
    //   var totalKG;
    //   var widthInMeter = (width/3.281).toFixed(2);
    //   //console.log(widthInMeter);
    //   var lengthInMeter = (length/3.281).toFixed(2);
    //  // var cost = Number(width * length).toFixed(2);
    //  console.log(lengthInMeter);
    
      //setcostResult(widthInMeter);

      // if(diameter==="6mm"){
      //   steelInKG = (6*6/162.162).toFixed(2);
      //   //console.log(steelInKG);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   //console.log(totalBar);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //  // console.log(widthTotalKG);
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   //console.log(totalBarLength);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   //console.log(lengthTotalKG);
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);

      //   setTotalKG(totalKG);
      // }if(diameter==="8mm"){
      //   steelInKG = (8*8/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="10mm"){
      //   steelInKG = (10*10/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="12mm"){
      //   steelInKG = (12*12/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="16mm"){
      //   steelInKG = (16*16/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="20mm"){
      //   steelInKG = (20*20/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="25mm"){
      //   steelInKG = (25*25/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="32mm"){
      //   steelInKG = (32*32/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="40mm"){
      //   steelInKG = (40*40/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="45mm"){
      //   steelInKG = (45*45/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }if(diameter==="50mm"){
      //   steelInKG = (50*50/162.162).toFixed(2);
      //   totalBarWidth = (width*12/distanceWidth).toFixed(2);
      //   widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
      //   totalBarLength = (length*12/distanceLength).toFixed(2);
      //   lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
      //   totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
      //   setTotalKG(totalKG);
      // }
  
     // setHeight("");
     // setWeight("");
   // };
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
      var steelInKG;
      var totalBarWidth;
      var totalBarLength;
      var widthTotalKG;
      var lengthTotalKG;
      var totalKG;
      var widthInMeter = (value.width/3.281).toFixed(2);
      //console.log(widthInMeter);
      var lengthInMeter = (value.length/3.281).toFixed(2);
     // var cost = Number(width * length).toFixed(2);
     console.log(lengthInMeter);
    //const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.diameter || value.diameter === "") {
      errors.diameter = "Diameter is Required!"
    }
    else if (!value.width) {
      errors.width = "Width is Required!"
    }
    else if(value.width > 999999){
      errors.width = "Width is less than 999999 "
    }
    else if(value.width < 0){
    errors.width = "Width is greater than 0"
   }
    else if (!value.length) {
      errors.length = "Length is Required!"
    }
    else if(value.length > 999999){
      errors.length = "Length is less than 999999 "
}
else if(value.length < 0){
  errors.length = "Length is greater than 0"
}
    else if (!value.distanceWidth) {
      errors.distanceWidth = "Distance between Main Bar is Required!"
    }
    else if(value.distanceWidth > 999999){
      errors.distanceWidth = "Distance between Main Bar is less than 999999 "
}
else if(value.distanceWidth < 0){
  errors.distanceWidth = "Distance between Main Bar is greater than 0"
}
    else if (!value.distanceLength) {
      errors.distanceLength = "Distance between Distribution Bar is Required!"
    }
    else if(value.distanceLength > 999999){
      errors.distanceLength = "Distance between Distribution Bar is less than 999999 "
}
else if(value.distanceLength < 0){
  errors.distanceLength = "Distance between Distribution Bar is greater than 0"
}
else if(value.diameter==="6mm"){
  steelInKG = (6*6/162.162).toFixed(2);
  //console.log(steelInKG);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  //console.log(totalBar);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
 // console.log(widthTotalKG);
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  //console.log(totalBarLength);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  //console.log(lengthTotalKG);
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);

  setTotalKG(totalKG);
}
else if(value.diameter==="8mm"){
  steelInKG = (8*8/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="10mm"){
  steelInKG = (10*10/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="12mm"){
  steelInKG = (12*12/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="16mm"){
  steelInKG = (16*16/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="20mm"){
  steelInKG = (20*20/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="25mm"){
  steelInKG = (25*25/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="32mm"){
  steelInKG = (32*32/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="40mm"){
  steelInKG = (40*40/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="45mm"){
  steelInKG = (45*45/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else if(value.diameter==="50mm"){
  steelInKG = (50*50/162.162).toFixed(2);
  totalBarWidth = (value.width*12/value.distanceWidth).toFixed(2);
  widthTotalKG = widthInMeter*steelInKG*totalBarWidth;
  totalBarLength = (value.length*12/value.distanceLength).toFixed(2);
  lengthTotalKG = lengthInMeter*steelInKG*totalBarLength;
  totalKG = (widthTotalKG+lengthTotalKG).toFixed(2);
  setTotalKG(totalKG);
}
else{
  <p>Not found</p>
}
    return errors;
    };
  
  return (
    <Fragment>
            <MetaData title={'SteelCalculator'} />
    <div className="row">
            
              

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        <form className="shadow-lg" encType='multipart/form-data' onSubmit={handlesubmit}>
            <h1 className="mb-4">Steel Calculator</h1>

            
              <div className="form-group">
                <label for="category_field">Member Type</label>
                <select className="form-control" 
                 title="gradesCement"
                 id="gradeField"
                 name="diameter"
                 value={formValues.diameter}
                 onChange={handleChange}
                 //onChange={(e) => {const selectedDiameter = e.target.value;
                 //setDiameter(selectedDiameter);
                 //}}
                 >
                   <option  value="">Please Select</option>
                    <option value="6mm">6mm</option>
                     <option value="8mm">8mm</option>
                      <option value="10mm">10mm</option>
                       <option value="12mm">12mm</option>
                         <option value="16mm">16mm</option>
                          <option value="20mm">20mm</option>
                           <option value="25mm">25mm</option>
                            <option value="32mm">32mm</option>
                             <option value="40mm">40mm</option>
                              <option value="45mm">45mm</option>
                                <option value="50mm">50mm</option>
                    
                  </select>
              </div>

              <p className='text-danger'>{formErrors.diameter}</p>

            <div className="form-group">
              <label for="name_field">Width of Main Bar</label>
              <input
                name="width"
                type="number"
                placeholder="Width in ft"
                value={formValues.width}
                onChange={handleChange}
               // onChange={(e) => setWidth(e.target.value)}
                className="form-control"
              />
               <p className='text-danger'>{formErrors.width}</p>
              <label for="name_field">Length of Distribution Bar</label>
              <input
                 name="length"
                 type="number"
                 placeholder="Length in ft"
                 value={formValues.length}
                 onChange={handleChange}
                // onChange={(e) => setLength(e.target.value)}
                className="form-control"
              />
               <p className='text-danger'>{formErrors.length}</p>
              <label for="name_field">Distance between Main Bar </label>
              <input
                name="distanceWidth"
                type="number"
                placeholder="Distance in inches"
                value={formValues.distanceWidth}
                onChange={handleChange}
                //onChange={(e) => setDistanceWidth(e.target.value)}
                className="form-control"
              />
               <p className='text-danger'>{formErrors.distanceWidth}</p>
              <label for="name_field">Distance between Distribution Bar </label>
              <input
                name="distanceLength"
                type="number"
                placeholder="Distance in inches"
                value={formValues.distanceLength}
                onChange={handleChange}
                //onChange={(e) => setDistanceLength(e.target.value)}
                className="form-control"
              />
            </div>
            
            <p className='text-danger'>{formErrors.distanceLength}</p>

        
            

          
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-2"
              //onClick={calculateQuantity}
              onSubmit={handlesubmit}
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
            
     
            {totalKG && (
          <div className="mt-4">
           <>
           <p>Weight of Steel in KG ={totalKG} KG </p>
            
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

export default Steel
