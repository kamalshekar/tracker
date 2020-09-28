import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductConsumer } from "../contextAPI/Context";
import Calculator from "./calculator/CalculatorAssets";
import Calculator1 from "./calculator/CalculatorLiabilities";
import LiquidityReport from "./calculator/LiquidityReport";
import Login from "./landingpage/Login";
import ControlPanel from "./landingpage/ControlPanel";
import Deafultpage from "./landingpage/defaultPage";

export default class Routea extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {} = value;
          return (
            <div>
              <Router>
                <Route path="/" exact component={Deafultpage} />
                <Route path="/enteremail" exact component={Login} />
                <Route path="/emaillookup" exact component={ControlPanel} />
                <Route
                  path="/newcalculation/enterassets"
                  exact
                  component={Calculator}
                />
                <Route
                  path="/newcalculation/enterliabilities"
                  exact
                  component={Calculator1}
                />

                <Route
                  path="/newcalculation/liquidityreport"
                  exact
                  component={LiquidityReport}
                />
              </Router>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
