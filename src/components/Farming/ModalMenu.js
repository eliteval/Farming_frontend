import React from "react";

const ModalMenu = ({
  page,
  metamaskConnected,
  connectToMetamask,
  disconnect,
  showSidebarMenu,
}) => {
  const goto = (href) => {
    window.location.href = href;
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
              <div className="list_child" onClick={() => goto("/")}>
                <i className="fas fa-home" />
                &nbsp;Home
              </div>
              <div
                className="list_child"
                onClick={() => goto("/dashboard?page=claim")}
              >
                <i className="fas fa-user" />
                &nbsp;Dashboard
              </div>
              <div
                className="list_child"
                onClick={() => goto("/dashboard?page=member")}
              >
                <i className="fas fa-user" />
                &nbsp;Member
              </div>
            </div>
          </div>
          <div style={{ padding: "100px 12%", textAlign: "center" }}>
            <button
              className="btn ml-lg-auto cutomBotton text-white"
              onClick={() => goto("/dashboard?page=claim")}
            >
              Buy New Node
            </button>
            {page == "dashboard" ? (
              metamaskConnected ? (
                <button
                  className="btn mt-2 ml-lg-auto cutomBotton text-white"
                  onClick={() => disconnect()}
                >
                  Log Out
                </button>
              ) : (
                <button
                  className="btn mt-2 ml-lg-auto cutomBotton text-white"
                  onClick={() => connectToMetamask()}
                >
                  Connect
                </button>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
