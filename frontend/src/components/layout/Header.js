import React, { Fragment } from 'react'
import {  Link ,Route} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search'

import '../../App.css'

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
          <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/shopit_logo.png" width="75px" heigth="10px"/>
                        </Link>
                    </div>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    <ul className="navbar-nav mr-auto">

    <li className="nav-item active">
      <Link to="/" style={{ textDecoration: 'none' }}>
                        <span id="calculator" className="ml-3">Home</span>
                        </Link>
      </li>
      <li className="nav-item active">
      <Link to="/calculator" style={{ textDecoration: 'none' }}>
                        <span id="calculator" className="ml-3">Calculator</span>
                        </Link>
      </li>
      <li className="nav-item">
      <Link to="/serviceprovider" style={{ textDecoration: 'none' }}>
                        <span id="calculator" className="ml-3">Service Provider</span>
                        </Link>
      </li>
      <li className="nav-item">
      <Link to="/video" style={{ textDecoration: 'none' }}>
                        <span id="calculator" className="ml-3">Video</span>
                        </Link>
        
      </li>

      <li className="nav-item">
      <Link to="/package" style={{ textDecoration: 'none' }}>
                        <span id="calculator" className="ml-3">Package</span>
                        </Link>
        
      </li>

      

      
      
    </ul>
    <div>
    <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>
    </div>
    
    <div>
    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                {user && user.role === 'superAdmin' && (
                                    <Link className="dropdown-item" to="/package">Package</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}
                    
    </div>

  </div>
</nav>


  );
};

export default Header;