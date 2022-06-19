import "./App.css";
import React, { useState, useContext } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import BackWrapper from "./components/Wrappers/BackWrapper/BackWrapper";
import DiveList from "./components/DiveList/DiveList";
import Cart from "./components/Cart/Cart";
import modalCtx from "./store/cartModalCtx";
import CartItemProv from "./store/cartItemProv";
import checkOutCtx from "./store/checkOutCtx";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  return (
    <modalCtx.Provider value={{ isModal: isModal, setIsModal: setIsModal }}>
      <CartItemProv>
        <checkOutCtx.Provider
          value={{ isCheckOut: isCheckOut, setIsCheckOut: setIsCheckOut }}
        >
          <React.Fragment>
            <BackWrapper>
              {isModal && <Cart />}
              {isCheckOut && <CheckOut />}
              <Nav />
              <Hero />
              <DiveList />
              <Footer />
            </BackWrapper>
          </React.Fragment>
        </checkOutCtx.Provider>
      </CartItemProv>
    </modalCtx.Provider>
  );
}

export default App;
