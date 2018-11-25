import React, { Component } from "react";
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";


import './App.css'
import Routes from "./router";
import Header from "./view/components/header";
import Footer from "./view/components/footer";
import Message from './view/components/core/message';
import Loading from './view/components/core/loading';

import { USER } from "./libs/constant";
import {LOGIN_ADMIN} from './redux/actions/type.action';
import {isAdmin} from './libs/funcHelp';

class App extends Component {

  constructor(props){
    super(props)
    this.updateAuth()
  }

  updateAuth = () => {
    let user = JSON.parse(localStorage.getItem(USER))

    user && isAdmin(user) && this.props.dispatch({
      type: LOGIN_ADMIN,
      payload: user
    })
  }

  render() {
    const {isLoading, status} = this.props
    return (
      <div>
        <Header />

        <Routes />

        {
          isLoading ? <Loading /> : null
        }

        {
          status ? <Message status={status} /> : null
        }
          
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {isLoading, status} = state.statusState;
  return {isLoading, status};
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
