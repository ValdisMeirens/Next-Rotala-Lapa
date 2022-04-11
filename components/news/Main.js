import DesktopMain from "./desktop/DesktopMain";
import MobileMain from "./mobile/MobileMain";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.mainContainer}>
      <MobileMain news={props.news} />
      <DesktopMain news={props.news} />
    </div>
  );
};

export default Main;
