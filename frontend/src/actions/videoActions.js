import axios from 'axios';

import {
    ALL_VIDEOS_REQUEST,
    ALL_VIDEOS_SUCCESS,
    ALL_VIDEOS_FAIL,
    ADMIN_VIDEOS_REQUEST,
    ADMIN_VIDEOS_SUCCESS,
    ADMIN_VIDEOS_FAIL,
    NEW_VIDEO_REQUEST,
    NEW_VIDEO_SUCCESS,
    NEW_VIDEO_FAIL,
    DELETE_VIDEO_REQUEST,
    DELETE_VIDEO_SUCCESS,
    DELETE_VIDEO_FAIL,
    UPDATE_VIDEO_REQUEST,
    UPDATE_VIDEO_SUCCESS,
    UPDATE_VIDEO_FAIL,
    VIDEO_DETAILS_REQUEST,
    VIDEO_DETAILS_SUCCESS,
    VIDEO_DETAILS_FAIL,
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

} from '../constants/videoConstants'

export const getVideos = (keyword = '', currentPage = 1,numOfDays, rating = 0) => async (dispatch) => {
    try {
        // numOfDays

        dispatch({ type: ALL_VIDEOS_REQUEST })

        // let link = `/api/v1/videos?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&
        // price[gte]=${price[0]}&ratings[gte]=${rating}`
        // let link = `/api/v1/videos?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}`

        // let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&
        // price[gte]=${price[0]}&ratings[gte]=${rating}`

        let link = `/api/v1/videos?keyword=${keyword}&page=${currentPage}&numOfDays[lte]=${numOfDays[1]}&
        numOfDays[gte]=${numOfDays[0]}&ratings[gte]=${rating}`
        // if (category) {
        //     link = `/api/v1/videos?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating}`
        // }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_VIDEOS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_VIDEOS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newVideo = (videoData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_VIDEO_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/video/new`, videoData, config)

        dispatch({
            type: NEW_VIDEO_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_VIDEO_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete product (Admin)
export const deleteVideo = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_VIDEO_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/video/${id}`)

        dispatch({
            type: DELETE_VIDEO_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_VIDEO_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Product (ADMIN)
export const updateVideo = (id, videoData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_VIDEO_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/video/${id}`, videoData, config)

        dispatch({
            type: UPDATE_VIDEO_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_VIDEO_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getVideoDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: VIDEO_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/video/${id}`)

        dispatch({
            type: VIDEO_DETAILS_SUCCESS,
            payload: data.video
        })

    } catch (error) {
        dispatch({
            type: VIDEO_DETAILS_FAIL,
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


export const getAdminVideos = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_VIDEOS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/videos`)

        dispatch({
            type: ADMIN_VIDEOS_SUCCESS,
            payload: data.videos
        })

    } catch (error) {

        dispatch({
            type: ADMIN_VIDEOS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get product reviews
export const getVideoReviews = (id) => async (dispatch) => {
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

// Delete product review
export const deleteReview = (id, videoId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })

        const { data } = await axios.delete(`/api/v1/reviews?id=${id}&videoId=${videoId}`)

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