import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { message } from "antd";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    // login page
    logemail: "",
    loader: false,
    loadergif: false,

    // liquidity report
    totalasset: 0,
    totalliabilities: 0,
    cashposition: 0,
    assetbreakdown: [{ id: "iokiok" }],
    liabilitiesbreakdown: [{ id: "iokiok1" }],
    usdbalance: 0,
    defusdbalanceAsset: 0,
    defusdbalanceLiabilities: 0,
    percentage: 0,
    accountbal: 0,
    currency: "",
    usdbalancelib: 0,
    percentagelib: 0,
    accountballib: 0,
    currencylib: "",
    timetoliquidity: [
      { id: "0", name: "0" },
      { id: "0", name: "7" },
      { id: "0", name: "30" },
      { id: "0", name: "90" }
    ],
    selectdpdown: "0",
    liquidityDpdown: "",
    switchAsset: true,
    switchLiabilities: false,
    switchcashposition: false,
    // calculator
    storeCompBal: 0,
    trimedBalance: 0,
    trimedBalanceseven: 0,
    trimedBalancethirty: 0,
    trimedBalanceninety: 0,

    daysValue: "",
    enterCurZero: "",
    enterCurSeven: "",
    enterCurThirty: "",
    enterCurNinety: "",
    usdprefix: "USD",

    assetcurrency: [
      { name: "US Dollars", short: "USD" },
      { name: "Bitcoin", short: "BTC" },
      { name: "Ethereum", short: "ETH" },
      { name: "Rupees", short: "INR" },
      { name: "Canadian Dollors", short: "CAD" },
      { name: "Britih Pounds", short: "GBP" },
      { name: "USDT", short: "USDT" }
    ],
    addZeroAssets: [
      {
        id: "FDSA",
        namezero: "",
        api_balance: 0,
        dropdown1: "Currency",
        dropdown1_sht: "",
        balance1: 0,
        balance2: 0
      }
    ],
    addSevenAssets: [
      {
        id: "cjbv",
        nameseven: "",
        api_balance: 0,
        dropdown1seven: "Currency",
        dropdown1seven_sht: "",
        balance1seven: 0,
        balance2seven: 0
      }
    ],
    addThirtyAssets: [
      {
        id: "cjbv",
        namethirty: "",
        api_balance: 0,
        dropdown1thirty: "Currency",
        dropdown1thirty_sht: "",
        balance1thirty: 0,
        balance2thirty: 0
      }
    ],
    addNinetyAssets: [
      {
        id: "cjbv",
        nameninety: "",
        api_balance: 0,
        dropdown1ninety: "Currency",
        dropdown1ninety_sht: "",
        balance1ninety: 0,
        balance2ninety: 0
      }
    ]
  };

  // login page
  makeid = length => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // Zero days------------------------------------------------------------------------------------
  addZeroAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      namezero: "",
      dropdown1: "Currency",
      dropdown1_sht: "",
      balance1: 0,
      api_balance: 0,
      balance2: 0
    };
    this.setState({
      addZeroAssets: [...this.state.addZeroAssets, formData]
    });
  };
  currncyConvert = async (e, id) => {
    let n1 = this.state.addZeroAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1 = e.target.value;
    n1[0].balance2 = e.target.value * n1[0].api_balance;
    // const zerobalance = (n1[0].balance2 = e.target.value * n1[0].api_balance);
    // trim
    // const trimbalance = zerobalance.toString();
    // const trimmed = trimbalance.split(".");
    // let firstNumber = +trimmed[0];
    // const first = firstNumber.toString();
    // this.setState({ storeCompBal: first, trimedBalance: zerobalance });
    // if (
    //   this.state.storeCompBal.length == 0 ||
    //   this.state.storeCompBal.length == 1
    // ) {
    //   this.setState({ trimedBalance: zerobalance.toFixed(4) });
    // } else if (this.state.storeCompBal.length == 2) {
    //   this.setState({ trimedBalance: zerobalance.toFixed(3) });
    // } else if (this.state.storeCompBal.length == 3) {
    //   this.setState({ trimedBalance: zerobalance.toFixed(2) });
    // } else if (this.state.storeCompBal.length == 4) {
    //   this.setState({ trimedBalance: zerobalance.toFixed(1) });
    // } else {
    //   this.setState({ trimedBalance: zerobalance.toFixed(0) });
    // }

    this.setState({
      [e.target.name]: e.target.value,
      addZeroAssets: [...this.state.addZeroAssets]
    });
    console.log("targetvale", e.target.value);
  };
  selectassetCurrency = async (printCur, id) => {
    let n1 = this.state.addZeroAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1 = printCur.name;
    n1[0].dropdown1_sht = printCur.short;
    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balance = res.data[`${printCur.short.toLowerCase()}_usd`];
      });
    this.setState({
      addZeroAssets: [...this.state.addZeroAssets]
    });
    console.log("cad", this.state.balance2);
  };

  inputChangezero = async (e, id) => {
    let n1 = this.state.addZeroAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].namezero = e.target.value;

    this.setState({
      addZeroAssets: [...this.state.addZeroAssets]
    });
  };
  // sevendays----------------------------------------------------------------------------
  addSevenAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      nameseven: "",
      dropdown1seven: "Currency",
      dropdown1seven_sht: "",
      balance1seven: 0,
      api_balanceseven: 0,
      balance2seven: 0
    };
    this.setState({
      addSevenAssets: [...this.state.addSevenAssets, formData]
    });
  };
  currncyConvertseven = async (e, id) => {
    let n1 = this.state.addSevenAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1seven = e.target.value;
    n1[0].balance2seven = e.target.value * n1[0].api_balanceseven;
    // const sevenbalance = (n1[0].balance2seven =
    //   e.target.value * n1[0].api_balanceseven);
    // trim
    // const trimbalance = sevenbalance.toString();
    // const trimmed = trimbalance.split(".");
    // let firstNumber = +trimmed[0];
    // const first = firstNumber.toString();
    // this.setState({
    //   storeCompBal: first,
    //   trimedBalanceseven: sevenbalance
    // });
    // if (
    //   this.state.storeCompBal.length == 0 ||
    //   this.state.storeCompBal.length == 1
    // ) {
    //   this.setState({
    //     trimedBalanceseven: sevenbalance.toFixed(4)
    //   });
    // } else if (this.state.storeCompBal.length == 2) {
    //   this.setState({
    //     trimedBalanceseven: sevenbalance.toFixed(3)
    //   });
    // } else if (this.state.storeCompBal.length == 3) {
    //   this.setState({
    //     trimedBalanceseven: sevenbalance.toFixed(2)
    //   });
    // } else if (this.state.storeCompBal.length == 4) {
    //   this.setState({
    //     trimedBalanceseven: sevenbalance.toFixed(1)
    //   });
    // } else {
    //   this.setState({
    //     trimedBalanceseven: sevenbalance.toFixed(0)
    //   });
    // }

    this.setState({
      [e.target.name]: e.target.value,
      addSevenAssets: [...this.state.addSevenAssets]
    });
  };
  selectassetCurrencyseven = async (printCur, id) => {
    let n1 = this.state.addSevenAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1seven = printCur.name;
    n1[0].dropdown1seven_sht = printCur.short;
    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balanceseven =
          res.data[`${printCur.short.toLowerCase()}_usd`];
      });
    this.setState({ addSevenAssets: [...this.state.addSevenAssets] });
  };
  inputChangeseven = async (e, id) => {
    let n1 = this.state.addSevenAssets.filter(ele => {
      return ele.id == id;
    });

    n1[0].nameseven = e.target.value;

    this.setState({
      addSevenAssets: [...this.state.addSevenAssets]
    });
  };
  // Thirtydays----------------------------------------------------------------------------
  addThirtyAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      namethirty: "",
      dropdown1thirty: "Currency",
      dropdown1thirty_sht: "",
      balance1thirty: 0,
      api_balancethirty: 0,
      balance2thirty: 0
    };
    this.setState({
      addThirtyAssets: [...this.state.addThirtyAssets, formData]
    });
  };
  currncyConvertthirty = async (e, id) => {
    let n1 = this.state.addThirtyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1thirty = e.target.value;
    n1[0].balance2thirty = e.target.value * n1[0].api_balancethirty;
    // const thirtybalance = (n1[0].balance2thirty =
    //   e.target.value * n1[0].api_balancethirty);
    // trim
    // const trimbalance = thirtybalance.toString();
    // const trimmed = trimbalance.split(".");
    // let firstNumber = +trimmed[0];
    // const first = firstNumber.toString();
    // this.setState({
    //   storeCompBal: first,
    //   trimedBalancethirty: thirtybalance
    // });
    // if (
    //   this.state.storeCompBal.length == 0 ||
    //   this.state.storeCompBal.length == 1
    // ) {
    //   this.setState({
    //     trimedBalancethirty: thirtybalance.toFixed(4)
    //   });
    // } else if (this.state.storeCompBal.length == 2) {
    //   this.setState({
    //     trimedBalancethirty: thirtybalance.toFixed(3)
    //   });
    // } else if (this.state.storeCompBal.length == 3) {
    //   this.setState({
    //     trimedBalancethirty: thirtybalance.toFixed(2)
    //   });
    // } else if (this.state.storeCompBal.length == 4) {
    //   this.setState({
    //     trimedBalancethirty: thirtybalance.toFixed(1)
    //   });
    // } else {
    //   this.setState({
    //     trimedBalancethirty: thirtybalance.toFixed(0)
    //   });
    // }

    this.setState({
      [e.target.name]: e.target.value,
      addThirtyAssets: [...this.state.addThirtyAssets]
    });
  };
  selectassetCurrencythirty = async (printCur, id) => {
    let n1 = this.state.addThirtyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1thirty = printCur.name;
    n1[0].dropdown1thirty_sht = printCur.short;

    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balancethirty =
          res.data[`${printCur.short.toLowerCase()}_usd`];
      });
    this.setState({ addThirtyAssets: [...this.state.addThirtyAssets] });
  };
  inputChangethirty = async (e, id) => {
    let n1 = this.state.addThirtyAssets.filter(ele => {
      return ele.id == id;
    });

    n1[0].namethirty = e.target.value;

    this.setState({
      addThirtyAssets: [...this.state.addThirtyAssets]
    });
  };

  // Ninetytdays----------------------------------------------------------------------------
  addNinetyAssetsFun = () => {
    const formData = {
      id: this.makeid(5),
      nameninety: "",
      dropdown1ninety: "Currency",
      dropdown1ninety_sht: "",
      balance1ninety: 0,
      api_balanceninety: 0,
      balance2ninety: 0
    };
    this.setState({
      addNinetyAssets: [...this.state.addNinetyAssets, formData]
    });
  };
  currncyConvertninety = async (e, id) => {
    let n1 = this.state.addNinetyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].balance1ninety = e.target.value;
    n1[0].balance2ninety = e.target.value * n1[0].api_balanceninety;
    // const ninetybalance = (n1[0].balance2ninety =
    //   e.target.value * n1[0].api_balanceninety);
    // trim
    // const trimbalance = ninetybalance.toString();
    // const trimmed = trimbalance.split(".");
    // let firstNumber = +trimmed[0];
    // const first = firstNumber.toString();
    // this.setState({
    //   storeCompBal: first,
    //   trimedBalanceninety: ninetybalance
    // });
    // if (
    //   this.state.storeCompBal.length == 0 ||
    //   this.state.storeCompBal.length == 1
    // ) {
    //   this.setState({
    //     trimedBalanceninety: ninetybalance.toFixed(4)
    //   });
    // } else if (this.state.storeCompBal.length == 2) {
    //   this.setState({
    //     trimedBalanceninety: ninetybalance.toFixed(3)
    //   });
    // } else if (this.state.storeCompBal.length == 3) {
    //   this.setState({
    //     trimedBalanceninety: ninetybalance.toFixed(2)
    //   });
    // } else if (this.state.storeCompBal.length == 4) {
    //   this.setState({
    //     trimedBalanceninety: ninetybalance.toFixed(1)
    //   });
    // } else {
    //   this.setState({
    //     trimedBalanceninety: ninetybalance.toFixed(0)
    //   });
    // }
    this.setState({
      [e.target.name]: e.target.value,
      addNinetyAssets: [...this.state.addNinetyAssets]
    });
  };
  selectassetCurrencyninety = async (printCur, id) => {
    let n1 = this.state.addNinetyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].dropdown1ninety = printCur.name;
    n1[0].dropdown1ninety_sht = printCur.short;
    axios
      .get(
        `https://comms.globalxchange.com/forex/convert?buy=USD&from=${printCur.short}`
      )
      .then(async res => {
        n1[0].api_balanceninety =
          res.data[`${printCur.short.toLowerCase()}_usd`];
      });
    this.setState({
      addNinetyAssets: [...this.state.addNinetyAssets]
    });
  };
  inputChangeninety = async (e, id) => {
    let n1 = this.state.addNinetyAssets.filter(ele => {
      return ele.id == id;
    });
    n1[0].nameninety = e.target.value;

    this.setState({
      addNinetyAssets: [...this.state.addNinetyAssets]
    });
  };

  loginVerify = e => {
    e.preventDefault();
    this.setState({ loader: true });
    axios
      .get(
        `https://accountingtool.apimachine.com/get-cash-position?email=${this.state.logemail}&tol_type=${this.state.selectdpdown}`
      )
      .then(res => {
        if (res.data.status === true) {
          window.location.href = "/emaillookup";
          localStorage.setItem("logemail", this.state.logemail);
        }
      });
  };

  switchAssetFun = () => {
    this.setState({
      switchAsset: true,
      switchLiabilities: false,
      switchCashposition: false
    });
  };
  switchLiabilitiesFun = () => {
    this.setState({
      switchAsset: false,
      switchLiabilities: true,
      switchCashposition: false
    });
  };
  switchCashpositionFun = () => {
    this.setState({
      switchAsset: false,
      switchLiabilities: false,
      switchCashposition: true
    });
  };
  // calculator
  inputChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  calculatorAssetPost = e => {
    e.preventDefault();
    this.setState({ loadergif: true });
    let body = {
      email: this.state.logemail,
      asset: true,
      asset_detail: [
        {
          tol_type: 0,
          asset_data: []
        },
        {
          tol_type: 7,
          asset_data: []
        },
        {
          tol_type: 30,
          asset_data: []
        },
        {
          tol_type: 90,
          asset_data: []
        }
      ]
    };
    this.state.addZeroAssets.forEach(ele => {
      let arr1 = {
        account_name: ele.namezero,
        currency_type: ele.dropdown1_sht,
        account_balance: ele.balance1
      };
      body.asset_detail[0].asset_data.push(arr1);
    });
    this.state.addSevenAssets.forEach(ele => {
      let arr2 = {
        account_name: ele.nameseven,
        currency_type: ele.dropdown1seven_sht,
        account_balance: ele.balance1seven
      };
      body.asset_detail[1].asset_data.push(arr2);
    });
    this.state.addThirtyAssets.forEach(ele => {
      let arr3 = {
        account_name: ele.namethirty,
        currency_type: ele.dropdown1thirty_sht,
        account_balance: ele.balance1thirty
      };
      body.asset_detail[2].asset_data.push(arr3);
    });
    this.state.addNinetyAssets.forEach(ele => {
      let arr4 = {
        account_name: ele.nameninety,
        currency_type: ele.dropdown1ninety_sht,
        account_balance: ele.balance1ninety
      };
      body.asset_detail[3].asset_data.push(arr4);
    });
    console.log(body);

    axios
      .post(
        "https://accountingtool.apimachine.com/calculate-assests-and-liabilities",
        body
      )
      .then(res => {
        console.log("Asset calculator post", res.data);
        console.log("Asset  post", this.state.balance1);
        window.location.href = "/newcalculation/enterliabilities";
      });
  };
  calculatorLiabilitiesPost = async e => {
    this.setState({ loadergif: true });
    let body = {
      email: this.state.logemail,
      liability: true,
      liability_detail: [
        {
          tol_type: 0,
          liability_data: []
        },
        {
          tol_type: 7,
          liability_data: []
        },
        {
          tol_type: 30,
          liability_data: []
        },
        {
          tol_type: 90,
          liability_data: []
        }
      ]
    };
    this.state.addZeroAssets.forEach(ele => {
      let arr1 = {
        account_name: ele.namezero,
        currency_type: ele.dropdown1_sht,
        account_balance: ele.balance1
      };
      body.liability_detail[0].liability_data.push(arr1);
    });
    this.state.addSevenAssets.forEach(ele => {
      let arr2 = {
        account_name: ele.nameseven,
        currency_type: ele.dropdown1seven_sht,
        account_balance: ele.balance1seven
      };
      body.liability_detail[1].liability_data.push(arr2);
    });
    this.state.addThirtyAssets.forEach(ele => {
      let arr3 = {
        account_name: ele.namethirty,
        currency_type: ele.dropdown1thirty_sht,
        account_balance: ele.balance1thirty
      };
      body.liability_detail[2].liability_data.push(arr3);
    });
    this.state.addNinetyAssets.forEach(ele => {
      let arr4 = {
        account_name: ele.nameninety,
        currency_type: ele.dropdown1ninety_sht,
        account_balance: ele.balance1ninety
      };
      body.liability_detail[3].liability_data.push(arr4);
    });
    console.log(body);
    axios
      .post(
        "https://accountingtool.apimachine.com/calculate-assests-and-liabilities",
        body
      )
      .then(res => {
        console.log("Liabilitiees calculator post", res.data);
        this.liquidityReport();
      });
  };
  // liquidity report
  liquidityReport = async () => {
    this.setState({ loadergif: true });
    await axios
      .get(
        `https://accountingtool.apimachine.com/get-cash-position?email=${this.state.logemail}&tol_type=${this.state.selectdpdown}`
      )
      .then(res => {
        console.log("Responsse", res.data.data);

        this.setState({
          defusdbalanceAsset: res.data.data.Asset_Breakdown[0],
          defusdbalanceLiabilities: res.data.data.Liability_Breakdown[0],
          totalasset: res.data.data.Total_Asset,
          totalliabilities: res.data.data.Total_Liability,
          cashposition: res.data.data.Cash_Position,
          assetbreakdown: res.data.data.Asset_Breakdown,
          liabilitiesbreakdown: res.data.data.Liability_Breakdown
        });
      });
  };
  liquidityDpdown = async printdpdown => {
    this.setState({
      selectdpdown: printdpdown.name
    });
    //  this.setState({
    //    loadergif: true
    //  });
    await axios
      .get(
        `https://accountingtool.apimachine.com/get-cash-position?email=${this.state.logemail}&tol_type=${this.state.selectdpdown}`
      )
      .then(res => {
        this.setState({
          defusdbalanceAsset: res.data.data.Asset_Breakdown[0],
          defusdbalanceLiabilities: res.data.data.Liability_Breakdown[0],
          totalasset: res.data.data.Total_Asset,
          totalliabilities: res.data.data.Total_Liability,
          cashposition: res.data.data.Cash_Position,
          assetbreakdown: res.data.data.Asset_Breakdown,
          liabilitiesbreakdown: res.data.data.Liability_Breakdown
        });
      });

    this.liquidityReport();
  };

  accountBalanceAsset = accountBalanceAsset => {
    this.setState({
      defusdbalanceAsset: accountBalanceAsset
    });
  };
  accountBalanceLiabilities = accountBalanceLiabilities => {
    this.setState({
      defusdbalanceLiabilities: accountBalanceLiabilities
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ logemail: localStorage.getItem("logemail") });
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          loginVerify: this.loginVerify,
          makeid: this.makeid,
          inputChange: this.inputChange,
          inputChangeseven: this.inputChangeseven,
          inputChangethirty: this.inputChangethirty,
          inputChangeninety: this.inputChangeninety,
          inputChangezero: this.inputChangezero,

          currncyConvert: this.currncyConvert,
          currncyConvertseven: this.currncyConvertseven,
          currncyConvertthirty: this.currncyConvertthirty,
          currncyConvertninety: this.currncyConvertninety,
          selectassetCurrencyseven: this.selectassetCurrencyseven,
          selectassetCurrencythirty: this.selectassetCurrencythirty,
          selectassetCurrencyninety: this.selectassetCurrencyninety,

          addZeroAssetsFun: this.addZeroAssetsFun,
          addSevenAssetsFun: this.addSevenAssetsFun,

          addThirtyAssetsFun: this.addThirtyAssetsFun,
          addNinetyAssetsFun: this.addNinetyAssetsFun,

          selectassetCurrency: this.selectassetCurrency,
          liquidityDpdown: this.liquidityDpdown,
          switchAssetFun: this.switchAssetFun,
          switchLiabilitiesFun: this.switchLiabilitiesFun,
          switchCashpositionFun: this.switchCashpositionFun,
          accountBalanceAsset: this.accountBalanceAsset,
          accountBalanceLiabilities: this.accountBalanceLiabilities,
          liquidityReport: this.liquidityReport,
          calculatorLiabilitiesPost: this.calculatorLiabilitiesPost,

          calculatorAssetPost: this.calculatorAssetPost
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
