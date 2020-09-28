import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import GxNvest from "../../Images/gxblue.svg";
import Atlogo from "../../Images/AtAdmin.svg";

export default class AccountingHome extends Component {
  render() {
    return (
      <>
        <div className="login-ag-default">
          <div>
            <img src={Atlogo} style={{ width: "18rem" }} alt="no_img" />
            <span className="controlPanel">Track Liquidity</span>
            <Link to="/enteremail" className="login-btn-ag">
              <span>
                Free <span style={{ paddingLeft: "6px" }}>Version</span>
              </span>
            </Link>
            <Link to="/" className="get-srt-btn">
              <div>
                Full <span style={{ paddingLeft: "6px" }}>Access</span>
              </div>
            </Link>
            <div className="pow-by">
              <h5 style={{ color: "#1A6BB4" }}>
                P O W E R E D <span style={{ paddingLeft: "15px" }}>B Y</span>
              </h5>
              <img src={GxNvest} alt="no_img" style={{ width: "24px" }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
