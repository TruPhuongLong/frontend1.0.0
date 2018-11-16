import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
              <div className="footer-logo">
                <img src="/assets/images/logo.png" alt="" />
              </div>
              <div className="footer-content">
                <p>
                  Icon.Deals | Coppyright c 2018 | All Right Reserved
                  <br />
                  Privacy Policy - Terms &amp; Conditions - Disclaimer
                </p>
              </div>
              <div className="footer-contact">
                {/* phone */}
                <div className="footer-icon">
                  <i className="fas fa-phone" />
                </div>
                {/* facebook */}
                <div className="footer-icon">
                  <i className="fab fa-facebook-f" />
                </div>
                {/* gmail */}
                <div className="footer-icon">
                  <i className="fas fa-envelope-open" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
