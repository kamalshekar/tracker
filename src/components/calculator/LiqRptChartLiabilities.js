import React, { Component } from "react";
import "./calculator.css";
import { ProductConsumer } from "../../contextAPI/Context";
import { Button } from "antd";
import { Doughnut } from "react-chartjs-2";

let optionslib = {
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 20,
  aspectRatio: 1,
  tooltips: false,
  hover: { mode: null },
  legend: {
    display: false
  },
  allowPointSelect: false,
  cursor: "pointer",

  layout: {
    padding: {
      right: 150
    }
  }
};

export default class LiquidityReportChart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            accountBalanceLiabilities,
            liabilitiesbreakdown,
            // usdbalancelib,
            // changeBalancelib,
            // percentagelib,
            // accountballib,
            // currencylib,
            defusdbalanceLiabilities
          } = value;
          const data = {
            labels: [],
            datasets: [
              {
                data: [100, 75, 95],
                backgroundColor: ["#212121", "#33d778", "#D1EEFF"],
                showTooltips: false,
                hoverBackgroundColor: ["#212121", "#33d778", "#D1EEFF"]
              }
            ]
          };

          return (
            <div>
              <div className="d-flex horizontalScroll">
                {liabilitiesbreakdown.map(setaccountsBtn => {
                  return (
                    <div className="mr-4 pb-3 balbtnmaster">
                      <p className="cardSubLiq">
                        {setaccountsBtn.account_name}
                      </p>
                      <Button
                        type="primary"
                        className="balBtnStyle"
                        onClick={() =>
                          accountBalanceLiabilities(setaccountsBtn)
                        }
                      >
                        {setaccountsBtn.usd_balance}
                      </Button>
                    </div>
                  );
                })}
              </div>

              <div className="row mt-5">
                <div className="col-md-8">
                  <div className="don">
                    <Doughnut height="250" data={data} options={optionslib} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <span className="cardSubLiq">
                      Balance ({defusdbalanceLiabilities.currency_type})
                    </span>
                    <br></br>
                    <span className="balStyle">
                      {defusdbalanceLiabilities.account_balance}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="cardSubLiq">Balance (USD)</span>
                    <br></br>
                    <span className="balStyle">
                      {defusdbalanceLiabilities.usd_balance}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="cardSubLiq">% Of Assets</span>
                    <br></br>
                    <span className="balStyle">
                      {defusdbalanceLiabilities.percentage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
