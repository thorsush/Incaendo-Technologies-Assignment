import React, { Component } from "react";
import image from "./images/app-store-download.png";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="page_footer">
        <div className="footer1">
          <h3>CONTATTI</h3>
          <h4>
            <span>Email </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            mail@goodmorningitalia.it
          </h4>
          <h4>
            <span>Facebook</span>&nbsp;&nbsp; Facebook.com/goodmorningIT
          </h4>
          <h4>
            <span>Email </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            mail@goodmorningitalia.it
          </h4>
        </div>
        <div className="footer2">
          <div className="footer2_div">
            <h3>GOOD MORNING ITALIA SRL</h3>
            <div className="info">
              <h4>Condizioni e Privacy</h4>
              <h4>(Riproduzione riservata)</h4>
              <h4>(ISSN 2532-1927)</h4>
            </div>
          </div>
          <div className="footer_image">
            <img src={image} alt="app store download icon"></img>
          </div>
        </div>
      </div>
    );
  }
}
