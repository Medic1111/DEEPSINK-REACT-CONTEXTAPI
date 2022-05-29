import React from "react";

const modalCtx = React.createContext({
  isModal: false,
  setIsModal: () => {},
});

export default modalCtx;
