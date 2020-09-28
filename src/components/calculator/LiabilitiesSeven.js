import React, { Component } from "react";
import "./calculator.css";
import { Input } from "antd";
import { Menu, Button, message } from "antd";
import { ProductConsumer } from "../../contextAPI/Context";
import { Select } from "antd";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import { Dropdown } from "react-bootstrap";
export default class AssetsSeven extends Component {
  render() {
    console.log(this.props.val);
    return (
      <ProductConsumer>
        {value => {
          const {
            assetcurrency,
            selectassetCurrencyseven,
            usdprefix,
trimedBalanceseven,
            inputChangeseven,
            currncyConvertseven
          } = value;

          return (
            <div className="cardBody mt-2">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  <Input
                    placeholder="Enter Account Name"
                    name="nameseven"
                    onChange={e => inputChangeseven(e, this.props.val.id)}
                  />
                </div>
                <div className="col-md-2 pr-0 dpdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="app-add-drp-btn"
                    >
                      {this.props.val.dropdown1seven}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="drpPaper">
                      {assetcurrency.map(printCur => {
                        return (
                          <Dropdown.Item
                            onClick={() =>
                              selectassetCurrencyseven(
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
                    className="inputBox"
                    style={{ fontWeight: "700" }}
                    type="number"
                    placeholder="0.00"
                    prefix={this.props.val.dropdown1seven_sht}
                    name="enterCurSeven"
                    onChange={e => currncyConvertseven(e, this.props.val.id)}
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    className="inputBox"
                    style={{ fontWeight: "700" }}
                    placeholder="0.00"
                    prefix={usdprefix}
                    value={this.props.val.balance2seven.toFixed(2)}
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
