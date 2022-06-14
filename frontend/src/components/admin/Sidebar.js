import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>
                    
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fa fa-product-hunt"></i> Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/admin/products"><i className="fa fa-clipboard"></i> All</Link>
                            </li>

                            <li>
                                <Link to="/admin/product"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#laborSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fa fa-male"></i> Labors</a>
                        <ul className="collapse list-unstyled" id="laborSubmenu">
                        
                        <li>
                                <Link to="/admin/labors"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
                            <li>
                                <Link to="/admin/newlabor"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#vehicleSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" >
                        <i className="fa fa-truck"></i> Vehicles</a>
                        <ul className="collapse list-unstyled" id="vehicleSubmenu">
                        <li>
                                <Link to="/admin/vehicles"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
                            <li>
                                <Link to="/admin/newvehicle"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#packageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" >
                        <i className="fa fa-envelope-square"></i> Packages</a>
                        <ul className="collapse list-unstyled" id="packageSubmenu">
                        <li>
                                <Link to="/admin/packs"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
                            <li>
                                <Link to="/admin/newpackage"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#videoSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" >
                        <i className="fa fa-play"></i>Videos</a>
                        <ul className="collapse list-unstyled" id="videoSubmenu">
                        <li>
                                <Link to="/admin/vedeos"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
                            <li>
                                <Link to="/admin/uploadvideo"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#couponSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" >
                        <i className="fa fa-percent"></i>Coupons</a>
                        <ul className="collapse list-unstyled" id="couponSubmenu">
                        <li>
                                <Link to="/admin/coupons"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
                            <li>
                                <Link to="/admin/newcoupon"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>



                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin/complains"><i className="fa fa-universal-access"></i> Complaints</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Reviews</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar