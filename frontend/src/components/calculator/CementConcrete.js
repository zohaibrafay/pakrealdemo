import {React,useState, Fragment,useEffect} from 'react'
import MetaData from '../layout/MetaData'


const CementConcrete = () => {
  const intialValues = {grades:"",length:"",width:"",depth:""};
  const [formValues,setFormValues] = useState(intialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSumit] = useState(false);

  //const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const[grade,setgrade] = useState("");

 const [volume, setVolume] = useState("");
 //Cement
 const [cementBags,setCementBags] = useState("");
 const[cementKG,setcementKG] = useState("");
 //Sand
 const[sandVolume,setSandVolume] = useState("");
 const[sandKG,setSandKG] = useState("");
 const[sandTON,setSandTON] = useState("");
 //Concrete
 const[concreteVolume,setConcreteVolume] = useState("");
 const[concreteKG,setConcreteKG] = useState("");
 const[concreteTON,setConcreteTON] = useState("");
  //const [status, setStatus] = useState("");

  //function calculate() {
//     var cementVolume;
//     var sandVolume;
//     var cementBags;
//     var cementKG;
//     var sandKG;
//     var sandTON;
//     var concreteVolume;
//     var concreteKG;
//     var concreteTON;
//     var totalVolume = Number(length * width * depth);
//     //totalVolume= totalVolume.toFixed(2);
//  // console.log(totalVolume);
//     var wetVolume = totalVolume+(totalVolume*52.4/100);
//     wetVolume = wetVolume.toFixed(2);
//     if (grade==="M20") {
//       cementVolume = (1/5.5 * wetVolume).toFixed(2);
//      cementBags = (cementVolume*1000/35).toFixed(2);
//      cementKG = (cementBags*50).toFixed(2);
//      sandVolume = (1.5/5.5 * wetVolume).toFixed(2);
//      sandKG = (sandVolume * 1550).toFixed(2);
//      sandTON = (sandKG/1000).toFixed(2);
//      concreteVolume = (3/5.5 * wetVolume).toFixed(2);
//      concreteKG = (concreteVolume * 1350).toFixed(2);
//      concreteTON = (concreteKG/1000).toFixed(2);
//      setVolume(cementVolume);
//      setCementBags(cementBags);
//      setcementKG(cementKG);
//      setSandVolume(sandVolume);
//      setSandKG(sandKG);
//      setSandTON(sandTON);
//      setConcreteVolume(concreteVolume);
//      setConcreteKG(concreteKG);
//      setConcreteTON(concreteTON);
//     }else if(grade==="M15"){
//       cementVolume = (1/7 * wetVolume).toFixed(2);
//       cementBags = (cementVolume/0.035).toFixed(2);
//       cementKG = (cementBags*50).toFixed(2);
//       sandVolume = (2/7 * wetVolume).toFixed(2);
//       sandKG = (sandVolume * 1550).toFixed(2);
//       sandTON = (sandKG/1000).toFixed(2);
//       concreteVolume = (4/7 * wetVolume).toFixed(2);
//       concreteKG = (concreteVolume * 1350).toFixed(2);
//       concreteTON = (concreteKG/1000).toFixed(2);
//       setVolume(cementVolume);
//       setCementBags(cementBags);
//       setcementKG(cementKG);
//       setSandVolume(sandVolume);
//       setSandKG(sandKG);
//       setSandTON(sandTON);
//       setConcreteVolume(concreteVolume);
//       setConcreteKG(concreteKG);
//       setConcreteTON(concreteTON);
      
//     }else if(grade==="M10"){
//       cementVolume = (1/10 * wetVolume).toFixed(2);
//      cementBags = (cementVolume/0.035).toFixed(2);
//      cementKG = (cementBags*50).toFixed(2);
//      sandVolume = (3/10 * wetVolume).toFixed(2);
//      sandKG = (sandVolume * 1550).toFixed(2);
//      sandTON = (sandKG/1000).toFixed(2);
//      concreteVolume = (6/10 * wetVolume).toFixed(2);
//      concreteKG = (concreteVolume * 1350).toFixed(2);
//      concreteTON = (concreteKG/1000).toFixed(2);
//      setVolume(cementVolume);
//      setCementBags(cementBags);
//      setcementKG(cementKG);
//      setSandVolume(sandVolume);
//      setSandKG(sandKG);
//      setSandTON(sandTON);
//      setConcreteVolume(concreteVolume);
//      setConcreteKG(concreteKG);
//      setConcreteTON(concreteTON);
      
//     }else if(grade==="M7.5"){
//       cementVolume = (1/13 * wetVolume).toFixed(2);
//       cementBags = (cementVolume/0.035).toFixed(2);
//       cementKG = (cementBags*50).toFixed(2);
//       sandVolume = (4/13 * wetVolume).toFixed(2);
//       sandKG = (sandVolume * 1550).toFixed(2);
//       sandTON = (sandKG/1000).toFixed(2);
//       concreteVolume = (8/13 * wetVolume).toFixed(2);
//       concreteKG = (concreteVolume * 1350).toFixed(2);
//       concreteTON = (concreteKG/1000).toFixed(2);
//       setVolume(cementVolume);
//       setCementBags(cementBags);
//       setcementKG(cementKG);
//       setSandVolume(sandVolume);
//       setSandKG(sandKG);
//       setSandTON(sandTON);
//       setConcreteVolume(concreteVolume);
//       setConcreteKG(concreteKG);
//       setConcreteTON(concreteTON);
      
//     }
//     else{
//       <p>Not found</p>
//     }

  
    
//     setLength("");
//     setWidth("");
//     setDepth("");
//     setgrade("");
//   }

  
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
    var cementVolume;
      var sandVolume;
      var cementBags;
      var cementKG;
      var sandKG;
      var sandTON;
      var concreteVolume;
      var concreteKG;
      var concreteTON;
      
      var totalVolume = Number(value.length * value.width * value.depth);
      //totalVolume= totalVolume.toFixed(2);
   // console.log(totalVolume);
      var wetVolume = totalVolume+(totalVolume*52.4/100);
      wetVolume = wetVolume.toFixed(2);
       if (!value.grades || value.grades === "") {
        errors.grades = "Grades is Required!"
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
  errors.width = "Width is greater than 0"
}
    else if (!value.depth) {
      errors.depth = "Depth is Required!"
    }
   else if(value.depth > 999999){
      errors.depth = "Depth is less  than 999999"
}
else if(value.depth < 0){
  errors.depth = "Depth is greater than 0"
}
    
      
      else if (value.grades==="M20") {
        cementVolume = (1/5.5 * wetVolume).toFixed(2);
       cementBags = (cementVolume*1000/35).toFixed(2);
       cementKG = (cementBags*50).toFixed(2);
       sandVolume = (1.5/5.5 * wetVolume).toFixed(2);
       sandKG = (sandVolume * 1550).toFixed(2);
       sandTON = (sandKG/1000).toFixed(2);
       concreteVolume = (3/5.5 * wetVolume).toFixed(2);
       concreteKG = (concreteVolume * 1350).toFixed(2);
       concreteTON = (concreteKG/1000).toFixed(2);
       setVolume(cementVolume);
       setCementBags(cementBags);
       setcementKG(cementKG);
       setSandVolume(sandVolume);
       setSandKG(sandKG);
       setSandTON(sandTON);
       setConcreteVolume(concreteVolume);
       setConcreteKG(concreteKG);
       setConcreteTON(concreteTON);
      }else if(value.grades==="M15"){
        cementVolume = (1/7 * wetVolume).toFixed(2);
        cementBags = (cementVolume/0.035).toFixed(2);
        cementKG = (cementBags*50).toFixed(2);
        sandVolume = (2/7 * wetVolume).toFixed(2);
        sandKG = (sandVolume * 1550).toFixed(2);
        sandTON = (sandKG/1000).toFixed(2);
        concreteVolume = (4/7 * wetVolume).toFixed(2);
        concreteKG = (concreteVolume * 1350).toFixed(2);
        concreteTON = (concreteKG/1000).toFixed(2);
        setVolume(cementVolume);
        setCementBags(cementBags);
        setcementKG(cementKG);
        setSandVolume(sandVolume);
        setSandKG(sandKG);
        setSandTON(sandTON);
        setConcreteVolume(concreteVolume);
        setConcreteKG(concreteKG);
        setConcreteTON(concreteTON);
        
      }else if(value.grades==="M10"){
        cementVolume = (1/10 * wetVolume).toFixed(2);
       cementBags = (cementVolume/0.035).toFixed(2);
       cementKG = (cementBags*50).toFixed(2);
       sandVolume = (3/10 * wetVolume).toFixed(2);
       sandKG = (sandVolume * 1550).toFixed(2);
       sandTON = (sandKG/1000).toFixed(2);
       concreteVolume = (6/10 * wetVolume).toFixed(2);
       concreteKG = (concreteVolume * 1350).toFixed(2);
       concreteTON = (concreteKG/1000).toFixed(2);
       setVolume(cementVolume);
       setCementBags(cementBags);
       setcementKG(cementKG);
       setSandVolume(sandVolume);
       setSandKG(sandKG);
       setSandTON(sandTON);
       setConcreteVolume(concreteVolume);
       setConcreteKG(concreteKG);
       setConcreteTON(concreteTON);
        
      }else if(value.grades==="M7.5"){
        cementVolume = (1/13 * wetVolume).toFixed(2);
        cementBags = (cementVolume/0.035).toFixed(2);
        cementKG = (cementBags*50).toFixed(2);
        sandVolume = (4/13 * wetVolume).toFixed(2);
        sandKG = (sandVolume * 1550).toFixed(2);
        sandTON = (sandKG/1000).toFixed(2);
        concreteVolume = (8/13 * wetVolume).toFixed(2);
        concreteKG = (concreteVolume * 1350).toFixed(2);
        concreteTON = (concreteKG/1000).toFixed(2);
        setVolume(cementVolume);
        setCementBags(cementBags);
        setcementKG(cementKG);
        setSandVolume(sandVolume);
        setSandKG(sandKG);
        setSandTON(sandTON);
        setConcreteVolume(concreteVolume);
        setConcreteKG(concreteKG);
        setConcreteTON(concreteTON);
        
      }
      else{
        <p>Not found</p>
      }
  
    
      
      //setLength("");
      //setWidth("");
      //setDepth("");
      //setgrade("");
    
    
    return errors;
    
    };
  return (
    <Fragment>
            <MetaData title={'CementConcreteCalculator'} />
    <div className="row">
            

                <div className="col-12 col-md-12">
                <Fragment>
    <div className="container container-fluid">
        <div className="wrapper my-5"> 
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        <form className="shadow-lg" encType='multipart/form-data' onSubmit={handlesubmit}>
            <h1 className="mb-4">Cement Concrete Calculator</h1>

            
              <div className="form-group">
                <label for="category_field">Grade of concrete</label>
                <select className="form-control" 
                title="gradesCement"
                
                name="grades"
                value={formValues.grades}
                // onChange={(e) => {const selectedGrade = e.target.value;
                  // setgrade(selectedGrade);}}
                  onChange={handleChange}
                 >
                    <option value="">Please Select</option>
                     <option value="M20">M20(1:1.5:3)</option>
                     <option value="M15">M15(1:2:4)</option>
                     <option value="M10">M10(1:3:6)</option>
                     <option value="M7.5">M7.5(1:4:8)</option>
                  </select>
                  {formValues.grades}
              </div>
              <div> <p className='text-danger'>{formErrors.grades}</p></div>


            <div className="form-group">
              <label for="name_field">Length in meter</label>
              <input
               className="form-control"
               name="length"
               type="number"
               placeholder="Length in meter"
               value={formValues.length}
               //onChange={(e) => setLength(e.target.value)}
               onChange={handleChange}
              />
            </div>
            <div> <p className='text-danger'>{formErrors.length}</p></div>
            <div className="form-group">
              <label for="name_field">Width in meter</label>
              <input
                 className="form-control"
                 name="width"
                 type="number"
                 placeholder="Width in meter"
                 value={formValues.width}
                 //onChange={(e) => setWidth(e.target.value)}
                 onChange={handleChange}
              />
            </div>
            <div> <p className='text-danger'>{formErrors.width}</p></div>
            <div className="form-group">
              <label for="name_field">Depth in meter</label>
              <input
                className="form-control"
                name="depth"
                type="number"
                placeholder="Depth in meter"
                value={formValues.depth}
                //onChange={(e) => setDepth(e.target.value)}
                onChange={handleChange}
              />
            </div>
            
            <div> <p className='text-danger'>{formErrors.depth}</p></div>
          
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
              //onClick={calculate}
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
            {volume && (
          <div className="mt-4">
           <>
            <p>Cement Volume : {volume} <span>&#13221; </span> </p>
            <p>No. of Cement Bags : {cementBags} Bags  </p>
            <p>Cement in KG : {cementKG} KG </p>
            <p>******************************</p>
            <p>Sand Volume : {sandVolume}<span>&#13221; </span> </p>
            <p>Sand in KG : {sandKG} KG </p>
            <p>Sand in TON : {sandTON} TON </p>
            <p>******************************</p>
            <p>Concrete Volume : {concreteVolume}<span>&#13221; </span> </p>
            <p>Concrete in KG : {concreteKG} KG </p>
            <p>Concrete in TON : {concreteTON} TON </p>
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

export default CementConcrete
