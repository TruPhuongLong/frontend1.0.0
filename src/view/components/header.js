import React, { Component } from "react";
import { Link } from "react-router-dom";

import '../css/header.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
         
          <div className="row ">
            <div className="col-xs-8 header-container">
              <div className="header-logo">
                <Link to="/">
                  <img src="/assets/images/logo-deals.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xs-4 header-icon">
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
