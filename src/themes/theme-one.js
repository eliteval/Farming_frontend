import React, { Component } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Auctions from "../components/Auctions/AuctionsOne";
import TopSeller from "../components/TopSeller/TopSellerOne";
import Collections from "../components/Collections/Collections";
import Explore from "../components/Explore/ExploreOne";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
// import About from "../components/About/About";
import Faq from "../components/Faq/Faq";
import Authors from "../components/Authors/Authors";
import Mint from "../components/Mint/Mint";
import Banner from "../components/Farming/Banner";
import Bar from "../components/Farming/Bar";
import About from "../components/Farming/About";
import Networks from "../components/Farming/Networks";

import Web3 from "web3";
import DivinityXData from "../contract/DivinityX.json";

class ThemeOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountAddress: "",
      accountBalance: "",
      metamaskConnected: false,
      contractDetected: false,
      divinityxContract: null,
      totalSupply: 0,
      MAX_SUPPLY: 0,
      MINT_COST: 0,
      ACITVE_SALE: false,
      ACITVE_PRESALE: false,
      ACITVE_PUBLICSALE: false,
      loading: true,
    };
  }

  componentWillMount = async () => {
    await this.loadWeb3();
    await this.loadBlockchainData();
  };

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      this.setState({ metamaskConnected: false });
    } else {
      this.setState({ metamaskConnected: true });
      this.setState({ loading: true });
      this.setState({ accountAddress: accounts[0] });
      let accountBalance = await web3.eth.getBalance(accounts[0]);
      accountBalance = web3.utils.fromWei(accountBalance, "Ether");
      this.setState({ accountBalance });
      this.setState({ loading: false });
      const networkId = await web3.eth.net.getId();
      console.log(networkId, this.state.accountAddress, accountBalance);
      const networkData = DivinityXData.networks[networkId];
      console.log(networkData);
      if (networkData) {
        this.setState({ loading: true });
        const divinityxContract = new web3.eth.Contract(
          DivinityXData.abi,
          networkData.address
        );
        this.setState({ divinityxContract });
        this.setState({ contractDetected: true });

        await this.loadSaleStatus();

        this.setState({ loading: false });
      } else {
        this.setState({ contractDetected: false });
      }
    }
  };

  loadSaleStatus = async () => {
    const totalSupply = await this.state.divinityxContract.methods
      .totalSupply()
      .call();
    this.setState({ totalSupply });
    const MAX_SUPPLY = await this.state.divinityxContract.methods
      .MAX_SUPPLY()
      .call();
    this.setState({ MAX_SUPPLY });
    const MINT_COST = await this.state.divinityxContract.methods
      .MINT_COST()
      .call();
    this.setState({ MINT_COST });
    const ACITVE_SALE = await this.state.divinityxContract.methods
      .activeSale()
      .call();
    this.setState({ ACITVE_SALE });
    console.log("sale", ACITVE_SALE);
    const ACITVE_PRESALE = await this.state.divinityxContract.methods
      .activePresale()
      .call();
    this.setState({ ACITVE_PRESALE });
    console.log("presale", ACITVE_PRESALE);
    const ACITVE_PUBLICSALE = await this.state.divinityxContract.methods
      .activePublicsale()
      .call();
    this.setState({ ACITVE_PUBLICSALE });
    console.log("publicsale", ACITVE_PUBLICSALE);
  };

  connectToMetamask = async () => {
    await window.ethereum.enable();
    this.setState({ metamaskConnected: true });
    window.location.reload();
  };

  presaleMint = async (numberofTokens) => {
    this.setState({ loading: true });
    this.state.divinityxContract.methods
      .presaleMint(numberofTokens)
      .send({
        from: this.state.accountAddress,
        gas: 3000000,
        value: numberofTokens * this.state.MINT_COST,
      })
      .on("confirmation", (confirmationNumber) => {
        this.setState({ loading: false });
        this.loadSaleStatus();
      });
  };
  publicMint = async (numberofTokens) => {
    this.setState({ loading: true });
    this.state.divinityxContract.methods
      .publicMint(numberofTokens)
      .send({
        from: this.state.accountAddress,
        gas: 3000000,
        value: numberofTokens * this.state.MINT_COST,
      })
      .on("confirmation", (confirmationNumber) => {
        this.setState({ loading: false });
        this.loadSaleStatus();
      });
  };

  render() {
    return (
      <>
        <div className="main">
          <Header
            metamaskConnected={this.state.metamaskConnected}
            accountAddress={this.state.accountAddress}
            connectToMetamask={this.connectToMetamask}
          />
          <Banner />
          <Bar />
          <About />
          <Networks />
          <Faq />
          <Footer />
          <ModalSearch />
          <ModalMenu />
          <Scrollup />
        </div>
      </>
    );
  }
}

export default ThemeOne;
