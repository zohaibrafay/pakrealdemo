  
import React, { useEffect, useState } from "react";
import {  Link ,Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { newComplain, clearErrors } from '../../actions/complainActions'
// import { NEW_COMPLAIN_RESET } from '../../constants/complainConstants'

const Complain=({history})=>
{
    const { user} = useSelector(state => state.auth)
    const [complain, setComplain] = useState({
        name:user.name,
        email:user.email,
        phone: '',
        complaint:'',
    })

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [complaint, setComplaint] = useState('');
   
    const { name, email, phone,complaint } = complain;
    const alert = useAlert();
    const dispatch = useDispatch();
//       const { loading, error, success } = useSelector(state => state.newComplain);
//   useEffect(() => {
//       if (error) {
//           alert.error(error);
//           dispatch(clearErrors())
//       }
//       if (success) {
//           history.push('/newComplain');
//           alert.success('Complain created successfully');
//           dispatch({ type:  NEW_COMPLAIN_RESET})
//       }
//   }, [dispatch, alert, error, success, history])
    const submitHandler = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.set('name', name);
            formData.set('email', email);
            formData.set('phone', phone);
            formData.set('complaint', complaint);
           dispatch(newComplain(formData))
    }
    const onChange = e => {
        setComplain({ ...complain, [e.target.name]: e.target.value })
    }
    return(
        <>
            <div className=".contact-form">
                <div className=".container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact-form-container py-5">
                            <form  method="POST"  id="contact-form"  onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-3">Complain</h1>
                                    <div className="contact-form-name d-flex justify-content-between align-items-between">
                    <input type="name" 
                                        name="name" 
                                        id="name"
                                        value={name}
                                         onChange={onChange}
                                        // onChange={(e)=>setName(e.target.value)}           
                                         placeholder="Your Name"
                                         required="true"/>
                                        <br/>
                    <input type="email" 
                                         name="email" id="email" 
                                        value={email}
                                         onChange={onChange}
                                        // onChange={(e)=>setEmail(e.target.value)}
                                        placeholder="Your Email" required="true"/>
                                        <br/>
                    <input type="text" 
                                        name="phone" id="phone"
                                        value={phone}
                                        onChange={onChange}
                                        // onChange={(e)=>setPhone(e.target.value)}
                                     
                                         placeholder="Phone Number" required="true"/>
                                        <br/>
                                    </div>
                                    <br/>
                    <textarea id="complaint" cols="127" rows="10" 
                                          name="complaint"
                                           value={complaint}
                                           onChange={onChange}         
                                        // onChange={(e)=>setComplaint(e.target.value)}          
                                              placeholder="Message"></textarea> 
                                <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            Submit
                        </button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Complain;