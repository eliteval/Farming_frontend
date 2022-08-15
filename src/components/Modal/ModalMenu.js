import React from "react";

const ModalMenu = ({ showSidebarMenu }) => {
  const handleButton = (hash) => {
    window.location.href = hash;
    window.location.reload();
  };
  const handleAppButton = () => {
    console.log(2);
    window.location.href = "/farming?page=dashboard";
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
                onClick={() => handleButton("/#banner")}
              >
                &nbsp;Home
              </div>
              <div
                className="list_child"
                onClick={() => handleButton("/#about_area")}
              >
                &nbsp;Dapp
              </div>
              <div
                className="list_child"
                onClick={() => handleButton("/#faq_area")}
              >
                &nbsp;FAQ
              </div>
              <div
                className="list_child"
                onClick={() => handleButton("/#contact")}
              >
                &nbsp;Contact
              </div>
            </div>
          </div>
          <div style={{ padding: "100px 12%", textAlign: "center" }}>
            <button
              className="btn ml-lg-auto cutomBotton text-white"
              onClick={() => handleAppButton()}
            >
              Buy Nodes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
