import React, { Component } from "react";

import '../css/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
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
            <span className="footer-icon">
              <i className="fas fa-phone" />
            </span>
            {/* facebook */}
            <span className="footer-icon">
              <i className="fab fa-facebook-f" />
            </span>
            {/* gmail */}
            <span className="footer-icon">
              <i className="fas fa-envelope-open" />
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
