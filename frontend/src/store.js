// import { persistStore,persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import  { productsReducer, newProductReducer, productReducer, productDetailsReducer, newReviewReducer, productReviewsReducer, reviewReducer } from './reducers/productReducers'
import  { packsReducer, newPackReducer, packReducer, packDetailsReducer,  packReviewsReducer} from './reducers/packageReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
// import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from './reducers/orderReducers'
import  { videosReducer, newVideoReducer, videoReducer, videoDetailsReducer,
  newVideoReviewReducer,videoReviewsReducer, videoreviewReducer } from './reducers/videoReducers'

  import { complainsReducer,complainReducer} from './reducers/complainReducers'
 
  import {vehicleDetailsReducer,newVehicleReviewReducer,vehicleReviewsReducer, vehiclereviewReducer} from './reducers/vehicleReducers'
  import {laborDetailsReducer,newLaborReviewReducer,laborReviewsReducer, laborreviewReducer} from './reducers/laborReducers'

  import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from './reducers/orderReducers'

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productReviews: productReviewsReducer,
  //  Complain

  complains:complainsReducer,
  complain:complainReducer,

  // Packages
  packs: packsReducer,
  packDetails: packDetailsReducer,
  newPack: newPackReducer,
  
  pack: packReducer,
  packReviews: packReviewsReducer,
  review: reviewReducer,
  auth: authReducer,
  user:userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,

  // newOrder: newOrderReducer,
  //   myOrders: myOrdersReducer,
  //   allOrders: allOrdersReducer,
  //   orderDetails: orderDetailsReducer,
  //   order: orderReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  orderDetails: orderDetailsReducer,
  order: orderReducer,
    newReview: newReviewReducer,


  videos: videosReducer,
  videoDetails: videoDetailsReducer,
  newVideo: newVideoReducer,
  video: videoReducer,
  

  vehicleDetails :vehicleDetailsReducer,
  newVehicleReview:newVehicleReviewReducer,
  vehicleReviews:vehicleReviewsReducer,
  vehicleReview:vehiclereviewReducer,


  laborDetails :laborDetailsReducer,
  newLaborReview:newLaborReviewReducer,
  laborReviews:laborReviewsReducer,
  laborReview:laborreviewReducer,
  
  newVideoReview:newVideoReviewReducer,
  videoReviews:videoReviewsReducer,
  videoReview:videoreviewReducer
})

let initialState = {
  cart: {
      cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
      shippingInfo: localStorage.getItem('shippingInfo')
          ? JSON.parse(localStorage.getItem('shippingInfo'))
          : {}
  }
}

const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

// const persistConfig={
//   key:'main-root',
//   storage,
// }

// const persistedReducer=persistReducer(persistConfig,reducer)
// const astore = createStore(persistedReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
// const Persistor=persistStore(astore)
// export{Persistor};
export default store;