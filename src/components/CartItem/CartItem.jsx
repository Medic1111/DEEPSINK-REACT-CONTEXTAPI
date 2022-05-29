import classes from "./CartItem.module.css";
import cartItemCtx from "../../store/cartItemCtx";
import React, { useContext } from "react";

const CartItem = ({ name, src, cost, howManyDives }) => {
  const cartItemCtxManager = useContext(cartItemCtx);

  const removeHandler = () => {
    cartItemCtxManager.setDives((prev) => {
      return prev.filter((arr, index) => {
        return arr[0].name !== name;
      });
    });

    cartItemCtxManager.setTotalCost((prev) => {
      return prev - Number(cost) * howManyDives;
    });

    cartItemCtxManager.setTotalDives((prev) => {
      return prev - howManyDives;
    });
  };
  return (
    <li className={classes.li}>
      <img className={classes.img} src={src} />
      <div className={classes.div}>
        <p className={classes.p}> {name}</p>
        <p className={classes.divers}>Divers: {howManyDives}</p>

        <button onClick={removeHandler} className={classes.btn}>
          Remove
        </button>
      </div>
    </li>
  );
};
export default CartItem;
