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
import Contact from "../components/Contact/Contact";

import Web3 from "web3";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountAddress: "",
      accountBalance: "",
      metamaskConnected: false,
      contractDetected: false,
      totalSupply: 0,
      MAX_SUPPLY: 0,
      MINT_COST: 0,
      ACITVE_SALE: false,
      ACITVE_PRESALE: false,
      ACITVE_PUBLICSALE: false,
      loading: true,
      showSidebarMenu: false,
    };
  }

  componentWillMount = async () => {};

  showMenu = async () => {
    console.log(this.state.showSidebarMenu);
    this.setState({ showSidebarMenu: true });
  };

  render() {
    return (
      <>
        <div className="main">
          <Header
            metamaskConnected={this.state.metamaskConnected}
            accountAddress={this.state.accountAddress}
            connectToMetamask={this.connectToMetamask}
            showMenu={this.showMenu}
          />
          <Banner />
          <Bar />
          <About />
          <Networks />
          <Faq />
          <Contact />
          <Footer />
          <ModalSearch />
          <ModalMenu showSidebarMenu={this.state.showSidebarMenu} />
          <Scrollup />
        </div>
      </>
    );
  }
}

export default Home;
