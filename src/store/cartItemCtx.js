import { createContext } from "react";

const cartItemCtx = createContext({
  totalDives: 0,
  setTotalDives: () => {},
  dives: [],
  setDives: () => {},
  totalCost: 0,
  setTotalCost: () => {},
});

export default cartItemCtx;
