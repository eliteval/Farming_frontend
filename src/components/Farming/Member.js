import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const initData = {
  pre_heading: "Dashboard",
};

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalShow: false,
      renewmodalShow: false,
      referrer_address: "",
    };
  }

  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  handleCreateNodeButton = (node_type) => {
    this.props.createNode(node_type, this.state.referrer_address);
  };

  handleClaimNodesAllButton = () => {
    this.props.claimNodesAll();
  };

  handleClaimNodesForTypeButton = (node_type) => {
    this.props.claimNodesForType(node_type);
  };

  render() {
    return (
      <section className="author-area  pancil">
        <div
          className="container"
          style={{ minHeight: "450px", padding: "50px 5% 0px" }}
        >
          <div className="justify-content-center text-center">
            <h3 className="text-red">Comming Soon</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Member;
