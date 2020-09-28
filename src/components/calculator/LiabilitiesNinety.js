import React, { Component } from "react";
import "./calculator.css";
import { Input } from "antd";
import { Menu, Button, message } from "antd";
import { ProductConsumer } from "../../contextAPI/Context";
import { Select } from "antd";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import { Dropdown } from "react-bootstrap";
export default class AssetsThirty extends Component {
  render() {
    console.log(this.props.val);
    return (
      <ProductConsumer>
        {value => {
          const {
            assetcurrency,
            selectassetCurrencyninety,
            usdprefix,
            trimedBalanceninety,
            inputChangeninety,
            currncyConvertninety
          } = value;

          return (
            <div className="cardBody mt-2">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  <Input
                    placeholder="Enter Account Name"
                    name="nameninety"
                    onChange={e => inputChangeninety(e, this.props.val.id)}
                  />
                </div>
                <div className="col-md-2 pr-0 dpdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="app-add-drp-btn"
                    >
                      {this.props.val.dropdown1ninety}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="drpPaper">
                      {assetcurrency.map(printCur => {
                        return (
                          <Dropdown.Item
                            onClick={() =>
                              selectassetCurrencyninety(
                                printCur,
                                this.props.val.id
                              )
                            }
                            // value="USD"
                          >
                            {printCur.name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-md-3">
                  <Input
                    placeholder="0.00"
                    className="inputBox"
                    style={{ fontWeight: "700" }}
                    type="number"
                    prefix={this.props.val.dropdown1ninety_sht}
                    name="enterCurNinety"
                    onChange={e => currncyConvertninety(e, this.props.val.id)}
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    placeholder="0.00"
                    className="inputBox"
                    style={{ fontWeight: "700" }}
                    prefix={usdprefix}
                    value={this.props.val.balance2ninety  }
                  />
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
