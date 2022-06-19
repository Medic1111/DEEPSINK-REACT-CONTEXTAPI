import { useState, useContext } from "react";
import modalCtx from "../../store/cartModalCtx";
import cartItemCtx from "../../store/cartItemCtx";
import classes from "./Form.module.css";
import diveData from "../../data/divesData";
const Form = ({ id, price }) => {
  const modalCtxManager = useContext(modalCtx);
  const cartItemCtxManager = useContext(cartItemCtx);

  const [userInput, setUserInput] = useState(1);

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    modalCtxManager.setIsModal(true);
    console.log(modalCtxManager.isModal);

    const toBePushed = diveData.filter((obj, index) => {
      return index === id;
    });

    const isItThere = cartItemCtxManager.dives.find((obj) => obj[0].id === id);

    if (!isItThere) {
      cartItemCtxManager.dives.push([toBePushed[0], Number(userInput)]);

      cartItemCtxManager.setTotalDives((prev) => {
        return prev + Number(userInput);
      });

      cartItemCtxManager.setTotalCost((prev) => {
        return prev + price * Number(userInput);
      });
    } else {
      cartItemCtxManager.setTotalDives((prev) => {
        return prev + Number(userInput);
      });

      cartItemCtxManager.setTotalCost((prev) => {
        return prev + price * Number(userInput);
      });
      isItThere[1] += Number(userInput);
    }

    setUserInput(1);
  };

  return (
    <form className={classes.form}>
      <input
        onChange={inputChangeHandler}
        placeholder="How many"
        className={classes.input}
        type="number"
        name="userInput"
        value={userInput}
      />
      <button onClick={addHandler} className={classes.btn}>
        Add
      </button>
    </form>
  );
};

export default Form;
