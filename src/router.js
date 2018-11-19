import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./view/pages/home";
import Product from "./view/pages/product";
import AdminLogin from './view/admin.pages/admin.login';
import AdminHome from './view/admin.pages/admin.home';
import AdminSignup from './view/admin.pages/admin.signup';
import AdminSecondaries from './view/admin.pages/admin.secondaries';
import AdminProfile from './view/admin.pages/admin.profile';
import AdminUsers from './view/admin.pages/admin.users';
import AdminUser from './view/admin.pages/admin.user';
import AdminCreateProduct from './view/admin.pages/admin.createProduct'

import {isAdminPrimary} from './libs/funcHelp';

class Routes extends React.Component {
  render(){
    const {isAdmin, user} = this.props;
    return (
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/cart" exact component={Product} />

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
            return isAdmin ? <AdminUser /> : <Redirect to="/admin/login"/>
          }}/>
          
          <Route path='/admin/createProduct' exact render={() => {
            return isAdmin ? <AdminCreateProduct /> : <Redirect to="/admin/login"/>
          }}/>

        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  const {isAdmin, user} = state.authState;
  return {isAdmin, user};
}

export default withRouter(connect(mapStateToProps)(Routes));
