import React, { Component } from "react";
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./router";
import Header from "./view/components/header";
import Footer from "./view/components/footer";
import './loading.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        {
          this.props.isLoading ? <div className="loader"></div> : null
        }
        <Footer />
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  const {isLoading} = state.statusState;
  return {isLoading};
}

export default withRouter(connect(mapStateToProps)(App))
