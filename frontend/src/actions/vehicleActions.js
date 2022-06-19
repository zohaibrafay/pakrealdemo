import axios from 'axios';

import {VEHICLE_REGISTOR_REQUEST,
    VEHICLE_DETAILS_REQUEST,
    VEHICLE_DETAILS_SUCCESS,
    VEHICLE_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,
    CLEAR_ERRORS
} from '../constants/vehicleConstants';

export const newVehicle = (vehicleData) => async (dispatch) => {
    try {

        dispatch({ type: VEHICLE_REGISTOR_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/vehicle/new`, vehicleData, config)

        dispatch({
            type: NEW_VEHICLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_VEHICLE_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getVehicleDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: VEHICLE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/vehicled/${id}`)

        dispatch({
            type: VEHICLE_DETAILS_SUCCESS,
            payload: data.vehicle
        })

    } catch (error) {
        dispatch({
            type: VEHICLE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newVehicleReview = (reviewDatavh) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/reviewvh`, reviewDatavh, config)
        console.log(data)
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
             type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}



// Get product reviews
export const getVehicleReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/reviewsvh?id=${id}`)

        dispatch({
            type: GET_REVIEWS_SUCCESS,
            payload: data.reviews
        })

    } catch (error) {

        dispatch({
            type: GET_REVIEWS_FAIL,
            payload: error.response.data.message
        })
    }
}
// Delete product review
export const deleteReview = (id, vehicleId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })

        const { data } = await axios.delete(`/api/v1/reviewsvh?id=${id}&vehicleId=${vehicleId}`)

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {

        console.log(error.response);

        dispatch({
            type: DELETE_REVIEW_FAIL,
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