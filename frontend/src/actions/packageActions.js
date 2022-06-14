import axios from 'axios';

import {
    ALL_PACKS_REQUEST,
    ALL_PACKS_SUCCESS,
    ALL_PACKS_FAIL,
    ADMIN_PACKS_REQUEST,
    ADMIN_PACKS_SUCCESS,
    ADMIN_PACKS_FAIL,
    NEW_PACK_REQUEST,
    NEW_PACK_SUCCESS,
    NEW_PACK_FAIL,
    DELETE_PACK_REQUEST,
    DELETE_PACK_SUCCESS,
    DELETE_PACK_FAIL,
    UPDATE_PACK_REQUEST,
    UPDATE_PACK_SUCCESS,
    UPDATE_PACK_FAIL,
    PACK_DETAILS_REQUEST,
    PACK_DETAILS_SUCCESS,
    PACK_DETAILS_FAIL,
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

} from '../constants/packageConstants'

export const getPacks = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_PACKS_REQUEST })

        let link = `/api/v1/packs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/packs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PACKS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PACKS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newPack = (packData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PACK_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/pack/new`, packData, config)

        dispatch({
            type: NEW_PACK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PACK_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete pack (Admin)
export const deletePack = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_PACK_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/pack/${id}`)

        dispatch({
            type: DELETE_PACK_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PACK_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Pack (ADMIN)
export const updatePack = (id, packData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PACK_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/pack/${id}`, packData, config)

        dispatch({
            type: UPDATE_PACK_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PACK_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getPackDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PACK_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/pack/${id}`)

        dispatch({
            type: PACK_DETAILS_SUCCESS,
            payload: data.pack
        })

    } catch (error) {
        dispatch({
            type: PACK_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/review`, reviewData, config)

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


export const getAdminPacks = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_PACKS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/packs`)

        dispatch({
            type: ADMIN_PACKS_SUCCESS,
            payload: data.packs
        })

    } catch (error) {

        dispatch({
            type: ADMIN_PACKS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get pack reviews
export const getPackReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/reviews?id=${id}`)

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

// Delete pack review
export const deleteReview = (id, packId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })

        const { data } = await axios.delete(`/api/v1/reviews?id=${id}&packId=${packId}`)

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