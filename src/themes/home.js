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

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

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
      sidebarShow: false,
      modalShow: false,
    };
  }

  componentWillMount = async () => {
    if (window.location.hash == "#contact") this.setState({ modalShow: true });
  };

  showMenu = async () => {
    console.log(this.state.sidebarShow);
    this.setState({ sidebarShow: true });
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
            showContactModal={() => this.setState({ modalShow: true })}
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
          <BuyNewNodeModal
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
        </div>
      </>
    );
  }
}

function BuyNewNodeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ height: "75px" }}>
        <Modal.Title>
          <h4 className="text-white">Contact</h4>
        </Modal.Title>
        <span onClick={() => props.onHide()} className="close_btn">
          x
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="main_flex mb-2">
          <Form className="row">
            <Form.Group className="col-sm-12 col-md-12 mb-3">
              <h6 className="text-black my-2">Subject</h6>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="col-sm-12 col-md-12 mb-3">
              <h6 className="text-black my-2">Message</h6>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>
        </div>
        <div className="main_flex mb-2">
          <button className="btn red">Submit</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Home;
