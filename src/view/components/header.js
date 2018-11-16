import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-wr">
            <div className="header-logo">
              <Link to="/">
                <img src="/assets/images/logo-deals.png" alt="logo" />
              </Link>
            </div>
            <div className="header-icon">
              <Link to="/cart">
                <i className="fas fa-shopping-cart fa-3x" />
              </Link>
              <Link to="/history">
                <i className="fas fa-clipboard-list fa-3x" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
