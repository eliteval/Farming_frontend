import React from "react";

const ModalMenu = () => {
  const handleButton = () => {
    window.location.href = "/dashboard";
  };
  return (
    <div id="menu" className="modal fade p-0">
      <div className="modal-dialog dialog-animated">
        <div className="modal-content customModalCotent h-100">
          <div className="modal-header" data-dismiss="modal">
            Menu <i className="far fa-times-circle icon-close" />
          </div>
          <div className="menu modal-body">
            <div className="row w-100">
              <div className="items p-0 col-12 text-center" />
            </div>
          </div>
          <div style={{ padding: "100px 12%", textAlign: "center" }}>
            <button
              className="btn ml-lg-auto cutomBotton text-white"
              onClick={() => handleButton()}
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
