import React, { Component } from "react";
import "./login.css";
import BetsLogo from "../../Images/AtAdmin.svg";
import { ProductConsumer } from "../../contextAPI/Context";
import menu from "../../Images/menu.svg";
import { Link } from "react-router-dom";
import logo from "../../Images/AtAdmin.svg";
import close from "../../Images/close.svg";
import email from "../../Images/email.svg";

export default class Login extends Component {
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
          const {
            logemail,
            inputChange,
            loginVerify,
            loader,
            liquidityReport,
            loginEnabled
          } = value;
          // const loginEnabled = logemail.length > 4;
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
                <div>
                  <div className="login-ag-enterEmail">
                    <div>
                      <form className="w-100 mt-5" onSubmit={loginVerify}>
                        <div className="d-flex">
                          <div className="form-group">
                            <input
                              onChange={inputChange}
                              type="email"
                              name="logemail"
                              className="login-in-mail"
                              placeholder="Enter your Email"
                            />
                          </div>
                          <button
                            // disabled={!loginEnabled}
                            type="submit"
                            className="btn login-in-login"
                          >
                            <img
                              src={email}
                              className=""
                              style={{ width: "2rem" }}
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {loader ? (
                    <div className="verifying">
                      <h3>VERIFYING</h3>
                      <div className="myProgressfull">
                        <div className="myBarfull"></div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
