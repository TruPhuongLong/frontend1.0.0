import React, { Component } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./router";
import Header from "./view/components/header";
import Footer from "./view/components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;

//Duoc : make info-order page.
//Long: make home page.
