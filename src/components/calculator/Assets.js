import React, { Component } from "react";
import "./calculator.css";
import { Input } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../../contextAPI/Context";

import AssetsZero from "./AssetsZero";
import AssetsSeven from "./AssetsSeven";
import AssetsThirty from "./AssetsThirty";
import AssetsNinety from "./AssetsNinety";

export default class Assets extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            calculatorAssetPost,
            addZeroAssetsFun,
            addSevenAssetsFun,
            addThirtyAssetsFun,
            addNinetyAssetsFun,
            usdprefix,
            addZeroAssets,
            addSevenAssets,
            addThirtyAssets,
            addNinetyAssets,
            loadergif
          } = value;
          const totalusdZero = addZeroAssets.reduce(
            (init, data) => init + data.balance2,
            0
          );
          const totalusdSeven = addSevenAssets.reduce(
            (init, data) => init + data.balance2seven,
            0
          );
          const totalusdThirty = addThirtyAssets.reduce(
            (init, data) => init + data.balance2thirty,
            0
          );
          const totalusdNinety = addNinetyAssets.reduce(
            (init, data) => init + data.balance2ninety,
            0
          );
          return (
            <>
              <div>
                <div className="cardTop mb-4">
                  <p className="calcHead mb-0">Assets</p>
                  <Button type="primary" onClick={calculatorAssetPost}>
                    Liabilities
                  </Button>
                </div>
                <div className="pageBorder">
                  <p className="assetCardHead">Time To Liquidity = 0 Days</p>
                  <div className="cardHeight">
                    <div className="cardHeader">
                      <div className="row">
                        <div className="col-md-1">
                          <Button
                            onClick={() => addZeroAssetsFun()}
                            type="primary"
                          >
                            +
                          </Button>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Name</p>
                        </div>
                        <div className="col-md-2">
                          <p className="cardSub">Select Currency</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Balance</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">USD Balance</p>
                        </div>
                      </div>
                    </div>
                    {value.addZeroAssets.map((k, i) => {
                      console.log("array row", i);
                      return <AssetsZero val={k} />;
                    })}
                  </div>
                  <div className="mt-3 balTag">
                    <Input
                      style={{
                        width: "250px"
                      }}
                      className="totalinputvalue"
                      placeholder="0.00"
                      prefix={usdprefix}
                      value={totalusdZero.toFixed(2)}
                    />
                  </div>
                  <p className="assetCardHead mt-3">
                    Time To Liquidity = 7 Days
                  </p>
                  <div className="cardHeight">
                    <div className="cardHeader">
                      <div className="row">
                        <div className="col-md-1">
                          <Button
                            onClick={() => addSevenAssetsFun()}
                            type="primary"
                          >
                            +
                          </Button>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Name</p>
                        </div>
                        <div className="col-md-2">
                          <p className="cardSub">Select Currency</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Balance</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">USD Balance</p>
                        </div>
                      </div>
                    </div>
                    {value.addSevenAssets.map((k, i) => {
                      console.log("id", i);
                      return <AssetsSeven val={k} />;
                    })}
                  </div>
                  <div className="mt-3 balTag">
                    <Input
                      style={{
                        width: "250px"
                      }}
                      className="totalinputvalue"
                      placeholder="0.00"
                      prefix={usdprefix}
                      value={totalusdSeven.toFixed(2)}
                    />
                  </div>
                  <p className="assetCardHead mt-3">
                    Time To Liquidity = 30 Days
                  </p>
                  <div className="cardHeight">
                    <div className="cardHeader">
                      <div className="row">
                        <div className="col-md-1">
                          <Button
                            onClick={() => addThirtyAssetsFun()}
                            type="primary"
                          >
                            +
                          </Button>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Name</p>
                        </div>
                        <div className="col-md-2">
                          <p className="cardSub">Select Currency</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Balance</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">USD Balance</p>
                        </div>
                      </div>
                    </div>
                    {value.addThirtyAssets.map((k, i) => {
                      console.log("id", i);
                      return <AssetsThirty val={k} />;
                    })}
                  </div>
                  <div className="mt-3 balTag">
                    <Input
                      style={{
                        width: "250px"
                      }}
                      className="totalinputvalue"
                      placeholder="0.00"
                      prefix={usdprefix}
                      value={totalusdThirty.toFixed(2)}
                    />
                  </div>
                  <p className="assetCardHead mt-3">
                    Time To Liquidity = 90 Days
                  </p>
                  <div className="cardHeight">
                    <div className="cardHeader">
                      <div className="row">
                        <div className="col-md-1">
                          <Button
                            onClick={() => addNinetyAssetsFun()}
                            type="primary"
                          >
                            +
                          </Button>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Name</p>
                        </div>
                        <div className="col-md-2">
                          <p className="cardSub">Select Currency</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">Account Balance</p>
                        </div>
                        <div className="col-md-3">
                          <p className="cardSub">USD Balance</p>
                        </div>
                      </div>
                    </div>
                    {value.addNinetyAssets.map((k, i) => {
                      console.log("id", i);
                      return <AssetsNinety val={k} />;
                    })}
                  </div>
                  <div className="mt-3 balTag">
                    <Input
                      style={{
                        width: "250px"
                      }}
                      className="totalinputvalue"
                      placeholder="0.00"
                      prefix={usdprefix}
                      value={totalusdNinety.toFixed(2)}
                    />
                  </div>
                </div>
              </div>
              
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
