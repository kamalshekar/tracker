import React, { Component } from "react";
import "./calculator.css";
import { ProductConsumer } from "../../contextAPI/Context";
import { Dropdown } from "react-bootstrap";
import { Input } from "antd";
import LiqRptChartAsset from "./LiqRptChartAsset";
import LiqRptChartLiabilities from "./LiqRptChartLiabilities";
import menu from "../../Images/menu.svg";
import logo from "../../Images/AtAdmin.svg";
import close from "../../Images/close.svg";
import { Link } from "react-router-dom";
import LoaderGif from "../../Images/loader.gif";

export default class LiquidityReport extends Component {
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
            timetoliquidity,
            liquidityDpdown,
            selectdpdown,
            switchLiabilities,
            switchCashposition,
            switchCashpositionFun,
            switchLiabilitiesFun,
            switchAssetFun,
            switchAsset,
            totalliabilities,
            totalasset,
            cashposition,
            loadergif,

            liquidityReport
          } = value;

          return (
            <>
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
                  <div className="container p-0">
                    <div className="calcMain">
                      <div className="cardTop mb-4">
                        <p className="calcHead mb-0">Liquidity Report</p>
                      </div>
                      <div className="pageBorder">
                        <div className="d-flex">
                          <p className="assetCardHead mr-5">
                            Time To Liquidity
                          </p>
                          <div className="seldpdown">
                            <Dropdown>
                              <Dropdown.Toggle
                                id="dropdown-basic"
                                className="app-add-drp-btn"
                              >
                                {selectdpdown} days
                              </Dropdown.Toggle>

                              <Dropdown.Menu className="drpPaper">
                                {timetoliquidity.map(printdpdown => {
                                  return (
                                    <Dropdown.Item
                                      onClick={() =>
                                        liquidityDpdown(printdpdown)
                                      }
                                    >
                                      {printdpdown.name} days
                                    </Dropdown.Item>
                                  );
                                })}
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="liquidityHeight">
                          {/*---------------------------- 0 days --------------------------------- */}
                          {selectdpdown === "0" ? (
                            <div className="row liquidityCenter">
                              <div className="col-md-4 pl-3">
                                <div
                                  style={{
                                    opacity: switchAsset ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub">Total Assets</p>
                                  <div
                                    className="balBox"
                                    onClick={switchAssetFun}
                                  >
                                    <span className="totalBal">
                                      {totalasset}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchLiabilities ? "1" : "0.4"
                                  }}
                                >
                                  <p
                                    className="cardSub mt-4"
                                    style={{ color: "red" }}
                                  >
                                    Total Liabilities
                                  </p>
                                  <div
                                    className="balBox"
                                    onClick={switchLiabilitiesFun}
                                  >
                                    <span className="totalBal">
                                      {totalliabilities}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchCashposition ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub mt-4">Cash Position</p>
                                  <div
                                    // onClick={switchCashpositionFun}
                                    className="balBox"
                                  >
                                    <span className="totalBal">
                                      {cashposition}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-md-8"
                                style={{
                                  width: "100%",
                                  overflow: "hidden"
                                }}
                              >
                                {switchAsset ? <LiqRptChartAsset /> : null}
                                {switchLiabilities ? (
                                  <LiqRptChartLiabilities />
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {/*---------------------------- 0 days end------------------------------- */}
                          {/*---------------------------- 7 days --------------------------------- */}
                          {selectdpdown === "7" ? (
                            <div className="row liquidityCenter">
                              <div className="col-md-4 pl-3">
                                <div
                                  style={{
                                    opacity: switchAsset ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub">Total Assets</p>
                                  <div
                                    className="balBox"
                                    onClick={switchAssetFun}
                                  >
                                    <span className="totalBal">
                                      {totalasset}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchLiabilities ? "1" : "0.4"
                                  }}
                                >
                                  <p
                                    className="cardSub mt-4"
                                    style={{ color: "red" }}
                                  >
                                    Total Liabilities
                                  </p>
                                  <div
                                    className="balBox"
                                    onClick={switchLiabilitiesFun}
                                  >
                                    <span className="totalBal">
                                      {totalliabilities}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchCashposition ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub mt-4">Cash Position</p>
                                  <div
                                    onClick={switchCashpositionFun}
                                    className="balBox"
                                  >
                                    <span className="totalBal">
                                      {cashposition}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                {switchAsset ? <LiqRptChartAsset /> : null}
                                {switchLiabilities ? (
                                  <LiqRptChartLiabilities />
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {/*---------------------------- 7 days end------------------------------- */}
                          {/*---------------------------- 30 days --------------------------------- */}
                          {selectdpdown === "30" ? (
                            <div className="row liquidityCenter">
                              <div className="col-md-4 pl-3">
                                <div
                                  style={{
                                    opacity: switchAsset ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub">Total Assets</p>
                                  <div
                                    className="balBox"
                                    onClick={switchAssetFun}
                                  >
                                    <span className="totalBal">
                                      {totalasset}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchLiabilities ? "1" : "0.4"
                                  }}
                                >
                                  <p
                                    className="cardSub mt-4"
                                    style={{ color: "red" }}
                                  >
                                    Total Liabilities
                                  </p>
                                  <div
                                    className="balBox"
                                    onClick={switchLiabilitiesFun}
                                  >
                                    <span className="totalBal">
                                      {totalliabilities}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchCashposition ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub mt-4">Cash Position</p>
                                  <div
                                    onClick={switchCashpositionFun}
                                    className="balBox"
                                  >
                                    <span className="totalBal">
                                      {cashposition}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                {switchAsset ? <LiqRptChartAsset /> : null}
                                {switchLiabilities ? (
                                  <LiqRptChartLiabilities />
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {/*---------------------------- 30 days end------------------------------- */}
                          {/*---------------------------- 90 days --------------------------------- */}
                          {selectdpdown === "90" ? (
                            <div className="row liquidityCenter">
                              <div className="col-md-4 pl-3">
                                <div
                                  style={{
                                    opacity: switchAsset ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub">Total Assets</p>
                                  <div
                                    className="balBox"
                                    onClick={switchAssetFun}
                                  >
                                    <span className="totalBal">
                                      {totalasset}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchLiabilities ? "1" : "0.4"
                                  }}
                                >
                                  <p
                                    className="cardSub mt-4"
                                    style={{ color: "red" }}
                                  >
                                    Total Liabilities
                                  </p>
                                  <div
                                    className="balBox"
                                    onClick={switchLiabilitiesFun}
                                  >
                                    <span className="totalBal">
                                      {totalliabilities}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    opacity: switchCashposition ? "1" : "0.4"
                                  }}
                                >
                                  <p className="cardSub mt-4">Cash Position</p>
                                  <div
                                    onClick={switchCashpositionFun}
                                    className="balBox"
                                  >
                                    <span className="totalBal">
                                      {cashposition}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                {switchAsset ? <LiqRptChartAsset /> : null}
                                {switchLiabilities ? (
                                  <LiqRptChartLiabilities />
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {/*---------------------------- 90 days end------------------------------- */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* {loadergif ? (
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "45%"
                  }}
                >
                  <img src={LoaderGif} className="img-fluid" />
                </div>
              ) : null} */}
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
