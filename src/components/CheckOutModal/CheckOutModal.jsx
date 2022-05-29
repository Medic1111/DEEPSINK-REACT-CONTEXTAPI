import classes from "./CheckOutModal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const CheckOutModalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const portalElement = document.getElementById("checkOutPortal");

const CheckOutModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CheckOutModalWrapper>{props.children}</CheckOutModalWrapper>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default CheckOutModal;
