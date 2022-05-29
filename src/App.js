import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import BackWrapper from "./components/Wrappers/BackWrapper/BackWrapper";
import DiveList from "./components/DiveList/DiveList";
import Cart from "./components/Cart/Cart";
import modalCtx from "./store/cartModalCtx";
import cartItemCtx from "./store/cartItemCtx";
import checkOutCtx from "./store/checkOutCtx";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [totalDives, setTotalDives] = useState(0);
  const [dives, setDives] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isCheckOut, setIsCheckOut] = useState(false);

  return (
    <modalCtx.Provider value={{ isModal: isModal, setIsModal: setIsModal }}>
      <cartItemCtx.Provider
        value={{
          totalDives: totalDives,
          setTotalDives: setTotalDives,
          dives: dives,
          setDives: setDives,
          totalCost: totalCost,
          setTotalCost: setTotalCost,
        }}
      >
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
      </cartItemCtx.Provider>
    </modalCtx.Provider>
  );
}

export default App;
