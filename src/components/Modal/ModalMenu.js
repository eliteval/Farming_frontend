import React from "react";

const ModalMenu = ({ showSidebarMenu }) => {
  const handleButton = (hash) => {
    window.location.href = hash;
  };
  const handleAppButton = () => {
    console.log(2);
    window.location.href = "/dashboard";
  };
  return (
    <div id="menu" className="modal fade p-0">
      <div
        className={
          showSidebarMenu == true
            ? "modal-dialog dialog-animated menu_left"
            : "modal-dialog dialog-animated menu_closed"
        }
      >
        <div className="modal-content customModalCotent h-100">
          <div
            className="modal-header"
            data-dismiss="modal"
            style={{ color: "white" }}
          >
            Menu <i className="far fa-times-circle icon-close" />
          </div>
          <div className="menu modal-body">
            <div className="list_item__ nav-link smooth-anchor">
              <div
                className="list_child"
                onClick={() => handleButton("#banner")}
              >
                <i className="fas fa-home" />
                &nbsp;Home
              </div>
              <div
                className="list_child"
                onClick={() => handleButton("#about_area")}
              >
                <i className="fas fa-user" />
                &nbsp;Dapp
              </div>
              <div
                className="list_child"
                onClick={() => handleButton("#faq_area")}
              >
                <i className="fas fa-question" />
                &nbsp;FAQ
              </div>
            </div>
          </div>
          <div style={{ padding: "100px 12%", textAlign: "center" }}>
            <button
              className="btn ml-lg-auto cutomBotton text-white"
              onClick={() => handleAppButton()}
            >
              Buy New Node
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
