import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./view/pages/home";
import Product from "./view/pages/product";
import AdminLogin from './view/admin.pages/admin.login';
import AdminHome from './view/admin.pages/admin.home';

class Routes extends React.Component {
  render(){
    const {isAdmin} = this.props;
    console.log('admin is login: ', isAdmin)
    return (
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/cart" exact component={Product} />

          {/* admin */}
          <Route path="/admin/login" exact render={() => {
            return isAdmin ? <Redirect to="/admin/home"/> : <AdminLogin />
          }}/>
          <Route path='/admin/home' exact render={() => {
            return isAdmin ? <AdminHome /> : <Redirect to="/admin/login"/>
          }}/>
        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  const {isAdmin} = state.authState;
  return {isAdmin};
}

export default withRouter(connect(mapStateToProps)(Routes));
