import classes from "./Nav.module.css";
import modalCtx from "../../store/cartModalCtx";
import cartItemCtx from "../../store/cartItemCtx";
import React, { useContext } from "react";

const Nav = () => {
  const modalCtxManager = useContext(modalCtx);

  const openCartHandler = () => {
    modalCtxManager.setIsModal(true);
  };

  const cartItemCtxManager = useContext(cartItemCtx);

  return (
    <nav className={classes.nav}>
      <p className={classes.logo}>DeepSink</p>
      <button onClick={openCartHandler} className={classes.cartBtn}>
        Cart
        <span className={classes.span}>{cartItemCtxManager.totalDives}</span>
      </button>
    </nav>
  );
};

export default Nav;
