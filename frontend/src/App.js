import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Footer from "./components/layout/Footer";

import Home from "./components/Home";
import Product from "./components/product/Product";
import Video from "./components/video/Video";
import VideoDetails from "./components/video/VideoDetails";
import UploadVideo from "./components/admin/UploadVideo";

import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";

import Profile from "./components/user/Profile";
import Labor from "./components/service/Labor";

import Package from "./components/product/Package";
import VehicleShow from "./components/product/VehicleShow";
import LaborShow from "./components/product/LaborShow";
import Vehicle from "./components/service/Vehicle";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import Complain from "./components/complain/Complain";

//Calculator
import Calculator from "./components/calculator/Calculator";
import ServiceProvider from "./components/service/ServiceProvider";
import ConstructionCost from "./components/calculator/ConstructionCost";
import CementConcrete from "./components/calculator/CementConcrete";
import Plaster from "./components/calculator/Plaster";
import Brick from "./components/calculator/Brick";
import ConcreteBlock from "./components/calculator/ConcreteBlock";
import Flooring from "./components/calculator/Flooring";
import Paint from "./components/calculator/Paint";
import RoundColumn from "./components/calculator/RoundColumn";
import Stair from "./components/calculator/Stair";
import ConcreteTube from "./components/calculator/ConcreteTube";
import Steel from "./components/calculator/Steel";

// Admin Imports
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import UpdateLabor from "./components/admin/UpdateLabor";
import UpdateVehicle from "./components/admin/UpdateVehicle";
import UpdatePackage from "./components/admin/UpdatePackage";

import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import ComplainList from "./components/admin/ComplainList";
import CouponList from "./components/admin/CouponList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";
import NewLabor from "./components/admin/NewLabor";
import NewVehicle from "./components/admin/NewVehicle";
import NewPackage from "./components/admin/NewPackage";
import LaborsList from "./components/admin/LaborsList";
import VehicleList from "./components/admin/VehicleList";
import PackagesList from "./components/admin/PackagesList";
import VediosList from "./components/admin/VediosList";
import NewCoupon from "./components/admin/NewCoupon";
import UpdateVideo from "./components/admin/UpdateVideo";
import Videodisplay from "./components/video/Videodisplay";

import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";

import store from "./store";
import { OrderSuccess } from "./components/cart/OrderSuccess";
import Display from "./components/product/Display";

function App() {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" component={Home} exact />
        <div className="container container-fluid">
          <Switch>
            <Route path="/search/:keyword" component={Display} />
            <Route path="/display" component={Display} />
            <Route path="/videodisplay" component={Videodisplay} />

            <Route path="/product/:id" component={ProductDetails} exact />
            <Route path="/cart" component={Cart} exact />
            <ProtectedRoute path="/shipping" component={Shipping} />

            <ProtectedRoute path="/me" component={Profile} exact />
            <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
            <ProtectedRoute
              path="/password/update"
              component={UpdatePassword}
              exact
            />
            <Route path="/password/forgot" component={ForgotPassword} exact />
            <Route
              path="/password/reset/newpassword"
              component={NewPassword}
              exact
            />
            <Route path="/labor" component={Labor} />
            <Route path="/package" component={Package} />
            <Route path="/laborshow" component={LaborShow} />
            <Route path="/vehicleshow" component={VehicleShow} />
            <Route path="/complain" component={Complain} />
            <Route path="/video" component={Video} />
            <Route path="/vehicle" component={Vehicle} />
            <Route path="/calculator" component={Calculator} exact />
            <Route
              path="/constructioncost"
              component={ConstructionCost}
              exact
            />
            <Route path="/cementconcrete" component={CementConcrete} exact />
            <Route path="/plaster" component={Plaster} exact />
            <Route path="/brick" component={Brick} exact />
            <Route path="/concreteblock" component={ConcreteBlock} exact />
            <Route path="/flooring" component={Flooring} exact />
            <Route path="/paint" component={Paint} exact />
            <Route path="/roundcolumn" component={RoundColumn} exact />
            <Route path="/stair" component={Stair} exact />
            <Route path="/concretetube" component={ConcreteTube} exact />
            <Route path="/steel" component={Steel} exact />

            <Route path="/serviceprovider" component={ServiceProvider} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirm" component={ConfirmOrder} />
            <Route path="/ordersuccess" component={OrderSuccess} />
            <ProtectedRoute path="/orders/me" component={ListOrders} exact />

            <ProtectedRoute
              path="/order/detail"
              component={OrderDetails}
              exact
            />
          </Switch>
        </div>
        <ProtectedRoute
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <ProtectedRoute
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/updatelabor/:id"
          isAdmin={true}
          component={UpdateLabor}
          exact
        />
        <ProtectedRoute
          path="/admin/updatevehicle/:id"
          isAdmin={true}
          component={UpdateVehicle}
          exact
        />
        <ProtectedRoute
          path="/admin/pack/:id"
          isAdmin={true}
          component={UpdatePackage}
          exact
        />
        <ProtectedRoute
          path="/admin/updatevideo"
          isAdmin={true}
          component={UpdateVideo}
          exact
        />
        <ProtectedRoute
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />
        <ProtectedRoute
          path="/admin/complains"
          isAdmin={true}
          component={ComplainList}
          exact
        />
        <ProtectedRoute
          path="/admin/coupons"
          isAdmin={true}
          component={CouponList}
          exact
        />
        <ProtectedRoute
          path="/admin/order/process"
          isAdmin={true}
          component={ProcessOrder}
          exact
        />
        <ProtectedRoute
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          exact
        />
        <ProtectedRoute
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <ProtectedRoute
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          exact
        />
        <ProtectedRoute
          path="/admin/newlabor"
          isAdmin={true}
          component={NewLabor}
          exact
        />
        <ProtectedRoute
          path="/admin/labors"
          isAdmin={true}
          component={LaborsList}
          exact
        />
        <ProtectedRoute
          path="/admin/newvehicle"
          isAdmin={true}
          component={NewVehicle}
          exact
        />
        <ProtectedRoute
          path="/admin/vehicles"
          isAdmin={true}
          component={VehicleList}
          exact
        />
        <ProtectedRoute
          path="/admin/newpackage"
          isAdmin={true}
          component={NewPackage}
          exact
        />
        <ProtectedRoute
          path="/admin/newcoupon"
          isAdmin={true}
          component={NewCoupon}
          exact
        />
        <ProtectedRoute
          path="/admin/packs"
          isAdmin={true}
          component={PackagesList}
          exact
        />
        <ProtectedRoute
          path="/admin/uploadvideo"
          isAdmin={true}
          component={UploadVideo}
          exact
        />
        <ProtectedRoute
          path="/admin/vedeos"
          isAdmin={true}
          component={VediosList}
          exact
        />
        <ProtectedRoute
          path="/admin/uploadvideo"
          isAdmin={true}
          component={UploadVideo}
          exact
        />
        <ProtectedRoute
          path="/admin/updatevideo"
          isAdmin={true}
          component={UpdateVideo}
          exact
        />

        {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
      </div>
    </Router>
  );
}

export default App;
