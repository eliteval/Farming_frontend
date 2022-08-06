import React from "react";

const ModalMenu = ({ showSidebarMenu }) => {
  const handleButton = () => {
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
            <div
              className="list_item__ nav-link smooth-anchor"
              href="#about_area"
            >
              <div className="list_child">
                <i className="fas fa-home " />
                &nbsp;Dashboard
              </div>
              <div className="list_child">
                {" "}
                <i className="fas fa-user" />
                &nbsp;Member
              </div>
            </div>
          </div>
          <div style={{ padding: "100px 12%", textAlign: "center" }}>
            <button
              className="btn ml-lg-auto cutomBotton text-white"
              onClick={() => handleButton()}
            >
              Buy New Node
            </button>
            <button
              className="btn mt-2 ml-lg-auto cutomBotton text-white"
              onClick={() => handleButton()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
