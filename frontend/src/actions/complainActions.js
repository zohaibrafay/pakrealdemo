import axios from 'axios'

import {
    

    NEW_COMPLAIN_REQUEST,
    NEW_COMPLAIN_SUCCESS,
    NEW_COMPLAIN_RESET,
    NEW_COMPLAIN_FAIL,

    ALL_COMPLAINS_REQUEST,
    ALL_COMPLAINS_SUCCESS,
    ALL_COMPLAINS_FAIL,
    DELETE_COMPLAIN_REQUEST,
    DELETE_COMPLAIN_SUCCESS,
    DELETE_COMPLAIN_FAIL,
    CLEAR_ERRORS
} from '../constants/complainConstants'


// Complaint:
export const newComplain = (complainData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_COMPLAIN_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/api/v1/newComplain', complainData, config)
        dispatch({
            type: NEW_COMPLAIN_SUCCESS,
            payload: data.complain
        })
    } catch (error) {
        dispatch({
            type: NEW_COMPLAIN_FAIL,
            // payload: error.response.data.message           
        })
        // console.log(payload)
    }
}

// All complains
export const getComplain = () => async (dispatch) => {
    try {    
        dispatch({ type: ALL_COMPLAINS_REQUEST })
        const { data } = await axios.get('/api/v1/admin/allComplain')
        dispatch({
            type: ALL_COMPLAINS_SUCCESS,
            payload: data.complains
        })
    } catch (error) {
        dispatch({
            type: ALL_COMPLAINS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete Complains

export const deleteComplain=(id)=>async(dispatch)=>
{
    try{

        dispatch({ type: DELETE_COMPLAIN_REQUEST })

        const { data } = await axios.delete(`/api/v1/delete/${id}`)

        dispatch({
            type: DELETE_COMPLAIN_SUCCESS,
            payload: data.success
        })
    }catch (error) {
        dispatch({
            type: DELETE_COMPLAIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}