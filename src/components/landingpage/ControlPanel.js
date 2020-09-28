import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import GxNvest from "../../Images/gxblue.png";
import Atlogo from "../../Images/AtAdmin.svg";
import { ProductConsumer } from "../../contextAPI/Context";
import menu from "../../Images/menu.svg";
import logo from "../../Images/AtAdmin.svg";
import close from "../../Images/close.svg";

export default class AccountingHome extends Component {
  state = {
    menuopen: false
  };
  menuOpen = () => {
    this.setState({
      menuopen: false
    });
  };
  menuClose = () => {
    this.setState({
      menuopen: true
    });
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { liquidityReport, logemail, calculatorPost } = value;
          return (
            <div style={{ height: "100vh", overflow: "hidden" }}>
              {this.state.menuopen ? (
                <img
                  src={close}
                  className="m-5"
                  style={{ width: "2rem", cursor: "pointer" }}
                  onClick={this.menuOpen}
                />
              ) : (
                <img
                  src={menu}
                  className="m-5"
                  style={{ width: "2rem", cursor: "pointer" }}
                  onClick={this.menuClose}
                />
              )}
              {this.state.menuopen ? (
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "75vh"
                  }}
                >
                  <div className="d-flex" style={{ justifyContent: "center" }}>
                    <div>
                      <img src={logo} className="" style={{ width: "8rem" }} />
                      <Link to="/enteremail">
                        <div className="mt-5 menus">Enter Email</div>
                      </Link>
                      <Link to="/newcalculation/enterassets">
                        <div className="mt-5 menus">Assets</div>
                      </Link>
                      <Link to="/newcalculation/enterliabilities">
                        <div className="mt-5 menus">Liabilities</div>
                      </Link>
                      <Link to="/newcalculation/liquidityreport">
                        <div className="mt-5 menus" onClick={liquidityReport}>
                          Liquidity
                        </div>
                      </Link>
                      <div className="mt-5 menus">About</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="login-ag">
                  <div>
                    <span className="controlPanel1 mt-5">
                      It Looks Like We Already Have A Calculation Saved For
                    </span>
                    <span className="controlPanel1 mt-1">{logemail}</span>
                    <Link
                      to="/newcalculation/enterassets"
                      className="login-btn-ag-btn"
                    >
                      <span>Enter New Calculation</span>
                    </Link>
                    <Link
                      to="/newcalculation/liquidityreport"
                      className="get-srt-btn-btn"
                    >
                      <span onClick={liquidityReport}>
                        Run Existing Numbers
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
