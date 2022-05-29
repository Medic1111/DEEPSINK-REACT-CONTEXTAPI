import Form from "../Form/Form";
import classes from "./DiveItem.module.css";
const DiveItem = ({ src, name, duration, price, level, id, description }) => {
  return (
    <li className={classes.li} id={id}>
      <img className={classes.img} src={src} />
      <div className={classes.txtBox}>
        <h3 className={classes.h3}>{name}</h3>
        <p className={classes.p}>Duration: {duration} hours</p>
        <p className={classes.p}>Cost: ${price}</p>
        <p className={classes.p}>Level: {level}/5</p>
        <p className={classes.description}>{description}</p>
        <Form id={id} price={price} />
      </div>
    </li>
  );
};

export default DiveItem;
