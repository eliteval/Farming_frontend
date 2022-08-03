import React, { Component } from "react";

class ModalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  handleCreateNodeButton = () => {
    let node_type = prompt("Which node will you select?");
    if (node_type) this.props.createNode(node_type);
  };

  render() {
    return (
      <div id="menu" className="modal fade p-0">
        <div
          className="modal-dialog dialog-animated  bg-gray"
          style={{ maxWidth: "300px", margin: "0 0 auto 0" }}
        >
          <div className="modal-content xxxh-100" style={{ display: "block" }}>
            <div className="modal-header" data-dismiss="modal">
              Menu <i className="far fa-times-circle icon-close" />
            </div>
            <div
              className="menu modal-body"
              style={{ height: "70vh", alignItems: "flex-start" }}
            >
              <div className="row w-100">
                <div className="items p-0 col-12 text-center"></div>
              </div>
            </div>
            <div style={{ padding: "0px 12%", textAlign: "center" }}>
              <button
                className="btn red mb-2"
                style={{ marginLeft: "auto", marginRight: "auto" }}
                onClick={() => this.handleCreateNodeButton()}
              >
                Buy a Nodes
              </button>
              <button
                className="btn mb-2 customButton"
                style={{ marginLeft: "auto", marginRight: "auto" }}
                onClick={() => this.props.disconnect()}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalMenu;
