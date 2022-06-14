import {
    ALL_VIDEOS_REQUEST,
    ALL_VIDEOS_SUCCESS,
    ALL_VIDEOS_FAIL,
    ADMIN_VIDEOS_REQUEST,
    ADMIN_VIDEOS_SUCCESS,
    ADMIN_VIDEOS_FAIL,
    NEW_VIDEO_REQUEST,
    NEW_VIDEO_SUCCESS,
    NEW_VIDEO_RESET,
    NEW_VIDEO_FAIL,
    DELETE_VIDEO_REQUEST,
    DELETE_VIDEO_SUCCESS,
    DELETE_VIDEO_RESET,
    DELETE_VIDEO_FAIL,
    UPDATE_VIDEO_REQUEST,
    UPDATE_VIDEO_SUCCESS,
    UPDATE_VIDEO_RESET,
    UPDATE_VIDEO_FAIL,
    VIDEO_DETAILS_REQUEST,
    VIDEO_DETAILS_SUCCESS,
    VIDEO_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
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

export const videosReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case ALL_VIDEOS_REQUEST:
        case ADMIN_VIDEOS_REQUEST:
            return {
                loading: true,
                videos: []
            }

        case ALL_VIDEOS_SUCCESS:
            return {
                loading: false,
                videos: action.payload.videos,
                 videosCount: action.payload.videosCount,
                resPerPage: action.payload.resPerPage,
                 filteredVideosCount: action.payload.filteredVideosCount
            }

        case ADMIN_VIDEOS_SUCCESS:
            return {
                loading: false,
                videos: action.payload
            }

        case ALL_VIDEOS_FAIL:
        case ADMIN_VIDEOS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newVideoReducer = (state = { video: {} }, action) => {
    switch (action.type) {

        case NEW_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_VIDEO_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                video: action.payload.video
            }

        case NEW_VIDEO_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_VIDEO_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const videoReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_VIDEO_REQUEST:
        case UPDATE_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_VIDEO_FAIL:
        case UPDATE_VIDEO_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_VIDEO_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_VIDEO_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const videoDetailsReducer = (state = { video: {} }, action) => {
    switch (action.type) {

        case VIDEO_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case VIDEO_DETAILS_SUCCESS:
            return {
                loading: false,
                video: action.payload
            }

        case VIDEO_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const newVReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const videoReviewsReducer = (state = { review: [] }, action) => {
    switch (action.type) {

        case GET_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload
            }

        case GET_REVIEWS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const reviewVReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}