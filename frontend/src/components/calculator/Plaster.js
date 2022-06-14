import {React,useState,useEffect, Fragment} from 'react'
import MetaData from '../layout/MetaData'


const Plaster = () => {


  const intialValues = {plasterType:"",length:"",width:"",grades:""}
  const [formValues,setFormValues] = useState(intialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSumit] = useState(false);


  //const [length, setLength] = useState("");
  //const [width, setWidth] = useState("");
  //const [depth, setDepth] = useState("");
  //const [volume, setVolume] = useState("");
  const[grade,setgrade] = useState("");
  const[plasterType,setPlasterType] = useState("");
  const[selectError,setSelectError] = useState("");
  const[error,setError] = useState("");

  const[cementBag,setCementBag] = useState("");
  const[cementKG,setCementKG] = useState("");
  const[sandTON,setSandTON] = useState("");
  const[sandKG,setSandKG] = useState("");

 
  //function calculate() {
    //   var volumeOfMortar;
    //   var dryVolume;
    //   var cement;
    //   var cementBag;
    //   var cementKG;
    //   var sand;
    //   var sandTON;
    //   var sandKG;
    //   var selectError;
    //   var error;
    // var plasterArea = Number(length * width );
   
    
    //  if (plasterType==="12MM"&&grade==="C.M(1:5)") {
    //     volumeOfMortar = (plasterArea*0.012);
    //  //Note: Add 30% to fill up join & Cover surface
    //  volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
    //  //Note: Increases by 25% of the total dry volume
    // dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
    //    dryVolume =  dryVolume.toFixed(2);
    //     cement = (dryVolume * 1/6)/0.035;
    //     cementBag = cement.toFixed(2);
    //     setCementBag(cementBag);
    //     cementKG = (cement*50).toFixed(2);
    //     setCementKG(cementKG);
    //     sand = (dryVolume * 5/6)*1550;
    //     sandKG = sand.toFixed(0);
    //     setSandKG(sandKG);
    //     sandTON = (sand/1000).toFixed(2);
    //    setSandTON(sandTON);
    //  }else if (plasterType==="12MM"&&grade==="C.M(1:6)") {
    //     volumeOfMortar = (plasterArea*0.012);
    //  //Note: Add 30% to fill up join & Cover surface
    //  volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
    //  //Note: Increases by 25% of the total dry volume
    // dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
    //    dryVolume =  dryVolume.toFixed(2);
    //     cement = (dryVolume * 1/7)/0.035;
    //     cementBag = cement.toFixed(2);
    //     setCementBag(cementBag);
    //     cementKG = (cement*50).toFixed(2);
    //     setCementKG(cementKG);
    //     sand = (dryVolume * 6/7)*1550;
    //     sandKG = sand.toFixed(0);
    //     setSandKG(sandKG);
    //     sandTON = (sand/1000).toFixed(2);
    //    setSandTON(sandTON);
    //  }else if (plasterType==="15MM"&&grade==="C.M(1:3)") {
    //     volumeOfMortar = (plasterArea*0.015);
    //  //Note: Add 30% to fill up join & Cover surface
    //  volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
    //  //Note: Increases by 25% of the total dry volume
    // dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
    //    dryVolume =  dryVolume.toFixed(2);
    //     cement = (dryVolume * 1/4)/0.035;
    //     cementBag = cement.toFixed(2);
    //     setCementBag(cementBag);
    //     cementKG = (cement*50).toFixed(2);
    //     setCementKG(cementKG);
    //     sand = (dryVolume * 3/4)*1550;
    //     sandKG = sand.toFixed(0);
    //     setSandKG(sandKG);
    //     sandTON = (sand/1000).toFixed(2);
    //    setSandTON(sandTON);
    //  }else if (plasterType==="18MM"&&grade==="C.M(1:3)") {
    //     volumeOfMortar = (plasterArea*0.018);
    //  //Note: Add 30% to fill up join & Cover surface
    //  volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
    //  //Note: Increases by 25% of the total dry volume
    // dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
    //    dryVolume =  dryVolume.toFixed(2);
    //     cement = (dryVolume * 1/4)/0.035;
    //     cementBag = cement.toFixed(2);
    //     setCementBag(cementBag);
    //     cementKG = (cement*50).toFixed(2);
    //     setCementKG(cementKG);
    //     sand = (dryVolume * 3/4)*1550;
    //     sandKG = sand.toFixed(0);
    //     setSandKG(sandKG);
    //     sandTON = (sand/1000).toFixed(2);
    //    setSandTON(sandTON);
    //  }else if (plasterType==="6MM"&&grade==="C.M(1:4)") {
    //     volumeOfMortar = (plasterArea*0.006);
    //  //Note: Add 30% to fill up join & Cover surface
    //  volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
    //  //Note: Increases by 25% of the total dry volume
    // dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
    //    dryVolume =  dryVolume.toFixed(2);
    //     cement = (dryVolume * 1/5)/0.035;
    //     cementBag = cement.toFixed(2);
    //     setCementBag(cementBag);
    //     cementKG = (cement*50).toFixed(2);
    //     setCementKG(cementKG);
    //     sand = (dryVolume * 4/5)*1550;
    //     sandKG = sand.toFixed(0);
    //     setSandKG(sandKG);
    //     sandTON = (sand/1000).toFixed(2);
    //    setSandTON(sandTON);
    //  } else if(length === "" || width === "" ){
    //  error =  "Plz write length and width";
    //  console.log(error);
    //  setError(error);
    //  }
     
    //   else{
    //     //selectError = "Selection of Plaster Type and Grade of footing is wrong";
    //     //console.log(selectError);
    //  //setSelectError(selectError);
    //  //setCementBag("0.00");
    //  //setCementKG("0.00");
    //  //setSandKG("0.00");
    //  //setSandTON("0.00");
    // }

  
    
    //setLength("");
    //setWidth("");
    //setgrade("");
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
     
    var volumeOfMortar;
      var dryVolume;
      var cement;
      var cementBag;
      var cementKG;
      var sand;
      var sandTON;
      var sandKG;
      //var selectError;
      //var error;
    var plasterArea = Number(value.length * value.width );
   
    
     if (!value.plasterType || value.plasterType === "") {
      errors.plasterType = "Plaster Type is required is Required!"
    }
   
    // else if (value.grades="123") {
    //   errors.grades = "Grades is Required!"
    // }  
    else if (!value.length) {
      errors.length = "Length is Required!"
    }
  else if(value.length > 999999){
    errors.length = "Length is less than 999999 "
}
else if(value.length < 0){
errors.length = "Length is greater than 0"
}

  
  else if (!value.width) {
    errors.width = "Width is Required!"
  }
  else if(value.width > 999999){
    errors.width = "Width is less than 999999 "
}
else if(value.width < 0){
errors.width = "Length is greater than 0"
}
  


else if (!value.grades || value.grades === "") {
  errors.grades = "Grades is Required!"
}
  
      else if (value.plasterType==="12MM"&&value.grades==="C.M(1:5)") {
        volumeOfMortar = (plasterArea*0.012);
     //Note: Add 30% to fill up join & Cover surface
     volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
     //Note: Increases by 25% of the total dry volume
    dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
       dryVolume =  dryVolume.toFixed(2);
        cement = (dryVolume * 1/6)/0.035;
        cementBag = cement.toFixed(2);
        setCementBag(cementBag);
        cementKG = (cement*50).toFixed(2);
        setCementKG(cementKG);
        sand = (dryVolume * 5/6)*1550;
        sandKG = sand.toFixed(0);
        setSandKG(sandKG);
        sandTON = (sand/1000).toFixed(2);
       setSandTON(sandTON);
     }else if (value.plasterType==="12MM"&&value.grades==="C.M(1:6)") {
        volumeOfMortar = (plasterArea*0.012);
     //Note: Add 30% to fill up join & Cover surface
     volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
     //Note: Increases by 25% of the total dry volume
    dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
       dryVolume =  dryVolume.toFixed(2);
        cement = (dryVolume * 1/7)/0.035;
        cementBag = cement.toFixed(2);
        setCementBag(cementBag);
        cementKG = (cement*50).toFixed(2);
        setCementKG(cementKG);
        sand = (dryVolume * 6/7)*1550;
        sandKG = sand.toFixed(0);
        setSandKG(sandKG);
        sandTON = (sand/1000).toFixed(2);
       setSandTON(sandTON);
     }else if (value.plasterType==="15MM"&&value.grades==="C.M(1:3)") {
        volumeOfMortar = (plasterArea*0.015);
     //Note: Add 30% to fill up join & Cover surface
     volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
     //Note: Increases by 25% of the total dry volume
    dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
       dryVolume =  dryVolume.toFixed(2);
        cement = (dryVolume * 1/4)/0.035;
        cementBag = cement.toFixed(2);
        setCementBag(cementBag);
        cementKG = (cement*50).toFixed(2);
        setCementKG(cementKG);
        sand = (dryVolume * 3/4)*1550;
        sandKG = sand.toFixed(0);
        setSandKG(sandKG);
        sandTON = (sand/1000).toFixed(2);
       setSandTON(sandTON);
     }else if (value.plasterType==="18MM"&&value.grades==="C.M(1:3)") {
        volumeOfMortar = (plasterArea*0.018);
     //Note: Add 30% to fill up join & Cover surface
     volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
     //Note: Increases by 25% of the total dry volume
    dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
       dryVolume =  dryVolume.toFixed(2);
        cement = (dryVolume * 1/4)/0.035;
        cementBag = cement.toFixed(2);
        setCementBag(cementBag);
        cementKG = (cement*50).toFixed(2);
        setCementKG(cementKG);
        sand = (dryVolume * 3/4)*1550;
        sandKG = sand.toFixed(0);
        setSandKG(sandKG);
        sandTON = (sand/1000).toFixed(2);
       setSandTON(sandTON);
     }else if (value.plasterType==="6MM"&&value.grades==="C.M(1:4)") {
        volumeOfMortar = (plasterArea*0.006);
     //Note: Add 30% to fill up join & Cover surface
     volumeOfMortar = volumeOfMortar +(volumeOfMortar*0.3);
     //Note: Increases by 25% of the total dry volume
    dryVolume = volumeOfMortar+(volumeOfMortar*0.25);
       dryVolume =  dryVolume.toFixed(2);
        cement = (dryVolume * 1/5)/0.035;
        cementBag = cement.toFixed(2);
        setCementBag(cementBag);
        cementKG = (cement*50).toFixed(2);
        setCementKG(cementKG);
        sand = (dryVolume * 4/5)*1550;
        sandKG = sand.toFixed(0);
        setSandKG(sandKG);
        sandTON = (sand/1000).toFixed(2);
       setSandTON(sandTON);
     } 
     
      else{
        <p>Not found</p>
        //selectError = "Selection of Plaster Type and Grade of footing is wrong";
        //console.log(selectError);
     //setSelectError(selectError);
     //setCementBag("0.00");
     //setCementKG("0.00");
     //setSandKG("0.00");
     //setSandTON("0.00");
    }
      //  else if(value.area > 999999 && value.area < 1089){
      //          errors.area = "Area is between 999999 to 1089"
      // }
    
    return errors;
    
  };
    


  return (
    <Fragment>
            <MetaData title={'PlasterCalculator'} />
    <div className="row">
            
                

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        <form className="shadow-lg" encType='multipart/form-data' onSubmit={handlesubmit}>
        <div className="mt-4">
           <>
            <h1 className="text-center mb-4 text-xl">  PLASTER CALCULATION</h1>
        <p>  15mm or 18mm is used for External Rough wall</p>
        <p>  12mm is used for Internal wall plane</p>
        <p>  6mm is used for cieling and concrete wall</p>
        <p>  10mm is used for Joined Between Brick Layer</p>
        <p>***************************************</p>
        <p>  C.M(1:3) External wall adverse climatic condition and Repair Use</p>
        <p>  C.M(1:4) External wall + cieling + concrete wall</p>
        <p>  C.M(1:5) Internal wall coarse sand</p>
        <p>  C.M(1:6) Internal wall fine sand</p>
            
            </>
          </div>
          
            <h1 className="mb-4">Plaster Calculator</h1>

            
              <div className="form-group">
                
                <label for="category_field">Plaster type</label>
                <select className="form-control" 
                title="plasterType"
                id="plasterType"
                name="plasterType"
              
                  value={formValues.plasterType}
                  onChange={handleChange}
                 //onChange={(e) => { e.preventDefault();
                   //const plasterType = e.target.value;
                 //setPlasterType(plasterType);
                 //}}
                >
                    <option value="" >Please Select</option>
                    <option value="12MM">12 MM</option>
                    <option value="15MM">15 MM</option>
                    <option value="18MM">18 MM</option>
                    <option value="20MM"> 6 MM</option>
                    </select>
                    {plasterType}
              </div>
              <div> <p className='text-danger'>{formErrors.plasterType}</p></div>


            <div className="form-group">
              <label for="name_field">Length in meter</label>
              <input
                name="length"
                type="number"
                placeholder="Length in meter"
                value={formValues.length}
                onChange={handleChange}
               // onChange={(e) => setLength(e.target.value)}
                className="form-control"
                
              />
            </div>
            <div> <p className='text-danger'>{formErrors.length}</p></div>
            <div className="form-group">
              <label for="name_field">Width in meter</label>
              <input
                 name="width"
                 type="number"
                 placeholder="Width in meter"
                 value={formValues.width}
                 onChange={handleChange}
                 //onChange={(e) => setWidth(e.target.value)}
                className="form-control"
                
              />
            </div>
            <div> <p className='text-danger'>{formErrors.width}</p></div>
            <div className="form-group">
                <label for="category_field">Grade of Footing</label>
                <select className="form-control" 
                 title="grades"
                 id="gradeField"
                 name="grades"
                   value={formValues.grades}
                   onChange={handleChange}
                 // onChange={(e) => { const selectedGrade = e.target.value;
                  //setgrade(selectedGrade);
                 // }}
                 >
                    <option value="" >Please Select</option>
                    <option value="C.M(1:3)">C.M(1:3)</option>
                    <option value="C.M(1:4)">C.M(1:4)</option>
                    <option value="C.M(1:5)">C.M(1:5)</option>
                    <option value="C.M(1:6)">C.M(1:6)</option>
                    </select>
                    {grade}
              </div>
              <div> <p className='text-danger'>{formErrors.grades}</p></div>

          
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-2"
             // onClick={calculate}
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
            {cementBag && (
          <div className="mt-4">
            <>
              <p>No. of Cement Bag Require : {cementBag} Bags  </p>
              <p>Require Cement in Kg  : {cementKG} KG  </p>
              <p>Qauntity of Sand require  : {sandKG} KG  </p>
              <p>Qauntity of Sand require  : {sandTON} TON  </p>
              {/* <p>  {selectError}   </p>
              <p>  {error}   </p> */}
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

export default Plaster
