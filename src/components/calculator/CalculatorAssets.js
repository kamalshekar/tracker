import React, { Component } from "react";
import Assets from "./Assets";
import { ProductConsumer } from "../../contextAPI/Context";
import menu from "../../Images/menu.svg";
import logo from "../../Images/AtAdmin.svg";
import close from "../../Images/close.svg";
import { Link } from "react-router-dom";
import LoaderGif from "../../Images/loader.gif";

export default class CalculatorAssets extends Component {
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
          const { swithcalculator, liquidityReport, loadergif } = value;

          return (
            <>
              <div
                style={{ height: "100vh", overflow: "hidden" }}
                style={{ opacity: loadergif ? "0" : "1" }}
              >
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
                ) : (
                  <div
                    className="calcMain"
                    style={{ opacity: loadergif ? "0" : "1" }}
                  >
                    <Assets />
                  </div>
                )}
              </div>
              {loadergif ? (
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "45%"
                  }}
                >
                  <img src={LoaderGif} className="img-fluid" />
                </div>
              ) : null}
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
