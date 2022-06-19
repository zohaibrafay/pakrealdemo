import {
    
    NEW_COMPLAIN_REQUEST,
    NEW_COMPLAIN_SUCCESS,
    NEW_COMPLAIN_FAIL,
    ALL_COMPLAINS_REQUEST,
    ALL_COMPLAINS_SUCCESS,
    ALL_COMPLAINS_FAIL,
    DELETE_COMPLAIN_REQUEST,
    DELETE_COMPLAIN_SUCCESS,
    DELETE_COMPLAIN_FAIL,
    DELETE_COMPLAIN_RESET,
    CLEAR_ERRORS
} from '../constants/complainConstants'


// Complain
export const newComplainReducer = (state = { complain: {} }, action) => {
    switch (action.type) {
    
        case NEW_COMPLAIN_REQUEST:
            return {
                ...state
                // loading: true,
                // isAuthenticated: false,
            }
        case NEW_COMPLAIN_SUCCESS:
            return {
                ...state,
                // loading: false,
                // isAuthenticated: true,
                // complain: action.payload

                // loading: false,
                // isAuthenticated: true,
                // success: action.payload.success,
                complain: action.payload
            }
        case NEW_COMPLAIN_FAIL:
            return {
                ...state,
                // loading: false,
                // isAuthenticated: false,
                complain: null,
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

// Get All complain on Admin Dashboard
export const complainsReducer = (state = { complains: [] }, action) => {
    switch (action.type) {
        case ALL_COMPLAINS_REQUEST:
        
            return {
                loading: true,
                complains: []
            }

        
        case ALL_COMPLAINS_SUCCESS:
            return {
                loading: false,
                complains: action.payload
            }

        case ALL_COMPLAINS_FAIL:
       
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



// Complains
export const getComplainReducer = (state = { complains: [] }, action) => {
    switch (action.type) {
       
        case ALL_COMPLAINS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case  ALL_COMPLAINS_SUCCESS:
            return {
                ...state,
                loading: false,
                complains: action.payload
            }

        case ALL_COMPLAINS_FAIL:
            return {
                ...state,
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

// Delete Complain Reducer

export const complainReducer = (state = {}, action) => {
    switch (action.type) {

        
        case DELETE_COMPLAIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        

        case DELETE_COMPLAIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        

        case DELETE_COMPLAIN_RESET:
            return {
                ...state,
                isDeleted: false
            }

        
        case DELETE_COMPLAIN_FAIL:
            return {
                ...state,
                // loading: false,
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
