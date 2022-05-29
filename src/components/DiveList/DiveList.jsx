import classes from "./DiveList.module.css";
import diveData from "../../data/divesData";
import DiveItem from "../DiveItem/DiveItem";
const DiveList = () => {
  return (
    <ul className={classes.ul}>
      {diveData.map((obj, index) => {
        return (
          <DiveItem
            key={`dive_${index}`}
            id={index}
            name={obj.name}
            duration={obj.duration}
            level={obj.level}
            price={obj.cost}
            src={obj.src}
            description={obj.description}
          />
        );
      })}
    </ul>
  );
};

export default DiveList;
