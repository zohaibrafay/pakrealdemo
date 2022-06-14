import {
  ALL_PACKS_REQUEST,
  ALL_PACKS_SUCCESS,
  ALL_PACKS_FAIL,
  ADMIN_PACKS_REQUEST,
  ADMIN_PACKS_SUCCESS,
  ADMIN_PACKS_FAIL,
  NEW_PACK_REQUEST,
  NEW_PACK_SUCCESS,
  NEW_PACK_RESET,
  NEW_PACK_FAIL,
  DELETE_PACK_REQUEST,
  DELETE_PACK_SUCCESS,
  DELETE_PACK_RESET,
  DELETE_PACK_FAIL,
  UPDATE_PACK_REQUEST,
  UPDATE_PACK_SUCCESS,
  UPDATE_PACK_RESET,
  UPDATE_PACK_FAIL,
  PACK_DETAILS_REQUEST,
  PACK_DETAILS_SUCCESS,
  PACK_DETAILS_FAIL,
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

} from '../constants/packageConstants'

export const packsReducer = (state = { packs: [] }, action) => {
  switch (action.type) {
      case ALL_PACKS_REQUEST:
      case ADMIN_PACKS_REQUEST:
          return {
              loading: true,
              packs: []
          }

      case ALL_PACKS_SUCCESS:
          return {
              loading: false,
              packs: action.payload.packs,
              packsCount: action.payload.packsCount,
              resPerPage: action.payload.resPerPage,
              filteredPacksCount: action.payload.filteredPacksCount
          }

      case ADMIN_PACKS_SUCCESS:
          return {
              loading: false,
              packs: action.payload
          }

      case ALL_PACKS_FAIL:
      case ADMIN_PACKS_FAIL:
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

export const newPackReducer = (state = { pack: {} }, action) => {
  switch (action.type) {

      case NEW_PACK_REQUEST:
          return {
              ...state,
              loading: true
          }

      case NEW_PACK_SUCCESS:
          return {
              loading: false,
              success: action.payload.success,
              pack: action.payload.pack
          }

      case NEW_PACK_FAIL:
          return {
              ...state,
              error: action.payload
          }

      case NEW_PACK_RESET:
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

export const packReducer = (state = {}, action) => {
  switch (action.type) {

      case DELETE_PACK_REQUEST:
      case UPDATE_PACK_REQUEST:
          return {
              ...state,
              loading: true
          }

      case DELETE_PACK_SUCCESS:
          return {
              ...state,
              loading: false,
              isDeleted: action.payload
          }

      case UPDATE_PACK_SUCCESS:
          return {
              ...state,
              loading: false,
              isUpdated: action.payload
          }


      case DELETE_PACK_FAIL:
      case UPDATE_PACK_FAIL:
          return {
              ...state,
              error: action.payload
          }

      case DELETE_PACK_RESET:
          return {
              ...state,
              isDeleted: false
          }

      case UPDATE_PACK_RESET:
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

export const packDetailsReducer = (state = { pack: {} }, action) => {
  switch (action.type) {

      case PACK_DETAILS_REQUEST:
          return {
              ...state,
              loading: true
          }

      case PACK_DETAILS_SUCCESS:
          return {
              loading: false,
              pack: action.payload
          }

      case PACK_DETAILS_FAIL:
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

export const newReviewReducer = (state = {}, action) => {
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

export const packReviewsReducer = (state = { review: [] }, action) => {
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

export const reviewReducer = (state = {}, action) => {
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