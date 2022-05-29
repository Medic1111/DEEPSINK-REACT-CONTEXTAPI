import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import modalCtx from "../../store/cartModalCtx";
import cartItemCtx from "../../store/cartItemCtx";
import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import checkOutCtx from "../../store/checkOutCtx";

const Cart = () => {
  const modalCtxManager = useContext(modalCtx);

  const cartItemCtxManager = useContext(cartItemCtx);

  const closeModalHandler = () => {
    modalCtxManager.setIsModal(false);
  };

  const checkOutCtxManager = useContext(checkOutCtx);

  const checkOutHandler = () => {
    checkOutCtxManager.setIsCheckOut(true);
    modalCtxManager.setIsModal(false);
  };

  return (
    <Modal>
      <ul className={classes.ul}>
        {cartItemCtxManager.dives.map((arr, index) => {
          return (
            <CartItem
              key={`diveKey_${index}`}
              name={arr[0].name}
              src={arr[0].src}
              cost={arr[0].cost}
              howManyDives={arr[1]}
            />
          );
        })}
        <p className={classes.p}>
          Total Dives: {cartItemCtxManager.totalDives}
        </p>
        <p className={classes.p}>Total Cost: {cartItemCtxManager.totalCost}</p>
        <div className={classes.div}>
          <button onClick={closeModalHandler} className={classes.btn}>
            Close
          </button>
          <button className={classes.btn} onClick={checkOutHandler}>
            Check out
          </button>
        </div>
      </ul>
    </Modal>
  );
};
export default Cart;
