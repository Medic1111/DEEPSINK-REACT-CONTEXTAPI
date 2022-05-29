import classes from "./CheckOut.module.css";
import { useContext } from "react";
import CheckOutModal from "../CheckOutModal/CheckOutModal";
import checkOutCtx from "../../store/checkOutCtx";

const CheckOut = () => {
  const checkOutCtxManager = useContext(checkOutCtx);

  const closeModalHandler = () => {
    checkOutCtxManager.setIsCheckOut(false);
  };

  return (
    <CheckOutModal>
      <div className={classes.div}>
        <h1 className={classes.test}>Thank you for checking this out</h1>
        <button onClick={closeModalHandler} className={classes.btn}>
          Return to App
        </button>
      </div>
    </CheckOutModal>
  );
};

export default CheckOut;
