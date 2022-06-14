import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'
import  {updateCartTotal} from '../../actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'

const ConfirmOrder = ({ history }) => {
    const dispatch = useDispatch();

    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
     // Calculate Order Prices
     const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
     const shippingPrice = itemsPrice > 200 ? 0 : 25
     const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
     const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [msg, setMsg] = useState("");
    
    const [total, setTotal] = useState((itemsPrice + shippingPrice + taxPrice).toFixed(2));

   
   useEffect(()=>{
        dispatch(updateCartTotal(total))
   },[total]);

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }

        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        history.push('/payment')
    }
    const applyCoupon = (e)=>{
        e.preventDefault();
            axios
              .post(`http://localhost:4000/api/v1/verifyCoupon`, {name: couponCode})
              .then((response) => {
                if(response.data.success)
                {   
                   
                    setMsg(`Coupon Applied Successfully with ${response.data.discount}% discount !`)
                    setDiscount(response.data.discount)
                    setTotal(total - (total*(response.data.discount/100)))
                }
                else
                {   
                    setMsg(response.data.errMessage)
                }
              })
              .catch((error) => {
                console.log(error);
              });
    }
    return (
        <Fragment>

            <MetaData title={'Confirm Order'} />

            <CheckoutSteps shipping confirmOrder />

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name:</b> {user && user.name}</p>
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p className="mb-4"><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>

                    <hr />
                    <h4 className="mt-4">Your Cart Items:</h4>

                    {cartItems.map(item => (
                        <Fragment>
                            <hr />
                            <div className="cart-item my-1" key={item.product}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt="Laptop" height="45" width="65" />
                                    </div>

                                    <div className="col-5 col-lg-6">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>


                                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.quantity} x ${item.price} = <b>${(item.quantity * item.price).toFixed(2)}</b></p>
                                    </div>

                                </div>
                            </div>
                            <hr />
                        </Fragment>
                    ))}



                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">${itemsPrice}</span></p>
                        <p>Shipping: <span className="order-summary-values">${shippingPrice}</span></p>
                        <p>Tax:  <span className="order-summary-values">${taxPrice}</span></p>
                        {
                            discount? <p>Coupon Discount:  <span className="order-summary-values">-${totalPrice*(discount/100)}</span></p>: null
                        }
                        <input placeholder='Enter Coupon Code' value={couponCode} onChange={(e)=>{setCouponCode(e.target.value)}}/>
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={(e)=>{applyCoupon(e)}}>Apply Coupon</button>
                        <p><span >{msg}</span></p>
                        <hr />

                        <p style={{ marginTop: "10px"}}>Total: <span className="order-summary-values">${total}</span></p>

                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={processToPayment}>Proceed to Payment</button>
                    </div>
                </div>


            </div>

        </Fragment>
    )
}

export default ConfirmOrder