import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const ModalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const portalElement = document.getElementById("cartPortal");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalWrapper>{props.children}</ModalWrapper>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
