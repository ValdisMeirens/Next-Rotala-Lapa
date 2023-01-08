import { LayoutGroup } from "framer-motion";
import classes from "./DesktopMain.module.css";
import DesktopMainDiv from "./DesktopMainDiv.js";

const DesktopMain = (props) => {
  return (
    <div className={classes.desktopContainer}>
      <LayoutGroup>
        <DesktopMainDiv data={props} />
      </LayoutGroup>
    </div>
  );
};

export default DesktopMain;
