import { createContext } from "react";

const checkOutCtx = createContext({
  isCheckOut: false,
  setIsCheckOut: () => {},
});

export default checkOutCtx;
