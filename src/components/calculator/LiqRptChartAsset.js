import React, { Component } from "react";
import "./calculator.css";
import { ProductConsumer } from "../../contextAPI/Context";
import { Button } from "antd";
import { Doughnut } from "react-chartjs-2";

let options = {
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
            assetbreakdown,
            accountBalanceAsset,
            defusdbalanceAsset
          } = value;
          const data = {
            labels: [],
            datasets: [
              {
                data: [100, 100, 50],
                backgroundColor: ["#212121", "#33d778", "#D1EEFF"],
                showTooltips: false,
                hoverBackgroundColor: ["#212121", "#33d778", "#D1EEFF"]
              }
            ]
          };

          console.log("defusdbalanceAsset%", defusdbalanceAsset);

          return (
            <div>
              <div className="d-flex horizontalScroll">
                {assetbreakdown.map(setaccountsBtn => {
                  return (
                    <div className="mr-4 pb-3 balbtnmaster">
                      <p className="cardSubLiq">
                        {setaccountsBtn.account_name}
                      </p>
                      <Button
                        type="primary"
                        className="balBtnStyle"
                        onClick={() => accountBalanceAsset(setaccountsBtn)}
                      >
                        {setaccountsBtn.usd_balance}
                      </Button>
                    </div>
                  );
                })}
              </div>

              <div className="row mt-5">
                <div className="col-md-8">
                  <Doughnut height="250" data={data} options={options} />
                </div>
                <div className="col-md-4">
                  <div>
                    <span className="cardSubLiq">
                      Balance ({defusdbalanceAsset.currency_type})
                    </span>
                    <br></br>
                    <span className="balStyle">
                      {defusdbalanceAsset.account_balance}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="cardSubLiq">Balance (USD)</span>
                    <br></br>
                    <span className="balStyle">
                      {defusdbalanceAsset.usd_balance}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="cardSubLiq">% Of Assets</span>
                    <br></br>
                    <span className="balStyle">
                      {defusdbalanceAsset.percentage}
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
