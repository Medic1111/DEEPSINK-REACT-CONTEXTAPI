import cartItemCtx from "./cartItemCtx";
import { useState } from "react";

const CartItemProv = (props) => {
  const [totalDives, setTotalDives] = useState(0);
  const [dives, setDives] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const ctxHelper = {
    totalDives,
    setTotalDives,
    dives,
    setDives,
    totalCost,
    setTotalCost,
  };

  return (
    <cartItemCtx.Provider value={ctxHelper}>
      {props.children}
    </cartItemCtx.Provider>
  );
};

export default CartItemProv;
