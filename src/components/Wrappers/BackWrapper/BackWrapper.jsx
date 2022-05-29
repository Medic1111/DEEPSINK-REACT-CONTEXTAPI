import classes from "./BackWrapper.module.css";
const BackWrapper = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};
export default BackWrapper;
