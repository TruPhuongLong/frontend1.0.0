import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Product from "./view/pages/product";
import AdminLogin from './view/admin.pages/admin.login';
import AdminHome from './view/admin.pages/admin.home';
import AdminSignup from './view/admin.pages/admin.signup';
import AdminSecondaries from './view/admin.pages/admin.secondaries';
import AdminProfile from './view/admin.pages/admin.profile';
import AdminUsers from './view/admin.pages/admin.users';
import AdminUser from './view/admin.pages/admin.user';
import AdminCreateProduct from './view/admin.pages/admin.createProduct'
import AdminProducts from './view/admin.pages/admin.products'
import AdminOrders from './view/admin.pages/admin.orders'
import AdminOrder from './view/admin.pages/admin.order'
import AdminEditProduct from './view/admin.pages/admin.editProduct'
import AdminCreateCampaign from './view/admin.pages/admin.createCampaign'
import AdminSendEmail from './view/admin.pages/admin.sendEmail'
import Campaign from './view/pages/campaign'

import {isAdminPrimary} from './libs/funcHelp';

class Routes extends React.Component {
  render(){
    const {isAdmin, user, currentProduct, currentUser, currentOrder} = this.props;
    return (
      <Switch>
          <Route path="/" exact component={Campaign} />
          {/* <Route path="/product" exact component={Product} /> */}
          {/* <Route path="/cart" exact component={Product} /> */}
          <Route path="/campaign" exact component={Campaign} />

          // ADMIN
          <Route path="/admin/login" exact render={() => {
            return isAdmin ? <Redirect to="/admin/home"/> : <AdminLogin />
          }}/>
          <Route path='/admin/home' exact render={() => {
            return isAdmin ? <AdminHome /> : <Redirect to="/admin/login"/>
          }}/>

          // only admin primary
          <Route path='/admin/signup' exact render={() => {
            return (isAdmin && isAdminPrimary(user)) ? <AdminSignup /> : <Redirect to="/admin/login"/>
          }}/>
          <Route path='/admin/secondaries' exact render={() => {
            return (isAdmin && isAdminPrimary(user)) ? <AdminSecondaries /> : <Redirect to="/admin/login"/>
          }}/>

          // all admin
          <Route path='/admin/profile' exact render={() => {
            return isAdmin ? <AdminProfile /> : <Redirect to="/admin/login"/>
          }}/>
          
          <Route path='/admin/users' exact render={() => {
            return isAdmin ? <AdminUsers /> : <Redirect to="/admin/login"/>
          }}/>

          <Route path='/admin/user' exact render={() => {
            return isAdmin ? (currentUser ? <AdminUser /> : <Redirect to="/admin/users"/>) : <Redirect to="/admin/login"/>
          }}/>
          
          <Route path='/admin/sendEmail' exact render={() => {
            return isAdmin ? (currentUser ? <AdminSendEmail /> : <Redirect to="/admin/secondaries"/>) : <Redirect to="/admin/login"/>
          }}/>
          
          //Product
          <Route path='/admin/createProduct' exact render={() => {
            return isAdmin ? <AdminCreateProduct /> : <Redirect to="/admin/login"/>
          }}/>
          
          <Route path='/admin/products' exact render={() => {
            return isAdmin ? <AdminProducts /> : <Redirect to="/admin/login"/>
          }}/>

          <Route path='/admin/editProduct' exact render={() => {
            return isAdmin ? (currentProduct ? <AdminEditProduct /> : <Redirect to="/admin/products"/>) : <Redirect to="/admin/login"/>
          }}/>

          //campaign
          <Route path='/admin/createCampaign' exact render={() => {
            return isAdmin ? (currentProduct ? <AdminCreateCampaign /> : <Redirect to="/admin/products"/>) : <Redirect to="/admin/login"/>
          }}/>

          //order
          <Route path='/admin/orders' exact render={() => {
            return isAdmin ? <AdminOrders /> : <Redirect to="/admin/login"/>
          }}/>
          
          <Route path='/admin/order' exact render={() => {
            return isAdmin ? (currentOrder ? <AdminOrder /> : <Redirect to="/admin/orders"/>) : <Redirect to="/admin/login"/>
          }}/>
          
          
        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  const {isAdmin, user} = state.authState;
  const currentProduct = state.productState.current
  const currentUser = state.userState.current
  const currentOrder = state.orderState.current
  return {isAdmin, user, currentProduct, currentUser, currentOrder};
}

export default withRouter(connect(mapStateToProps)(Routes));
