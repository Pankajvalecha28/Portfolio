import React from "react";

const Modal = ({ mid, btnName, btn, mTitle, mContent , func}) => {
  return (
    <div
      className="modal fade"
      id={mid}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {mTitle}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{mContent}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className={`btn btn-${btnName}`} onClick={func} data-bs-dismiss="modal" aria-label="Close">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
