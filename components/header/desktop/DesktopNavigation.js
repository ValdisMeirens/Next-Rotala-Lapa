import classes from "./DesktopNavigation.module.css";
import DesktopMainHeader from "./DesktopMainHeader";
import NavLinks from "../common/NavLinks";
import { useState } from "react";

const DesktopNavigation = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const mouseEnterHandler = () => {
    setShowNavLinks(true);
  }

  const mouseLeaveHandler = () => {
    setShowNavLinks(false);
  }

  return (
    <div className={classes.desktopContainer}>
      <DesktopMainHeader  onMouseEnter={mouseEnterHandler} />
      {showNavLinks && (
        <div className={classes.navLinksContainer} >
          <NavLinks  onMouseLeave={mouseLeaveHandler}/>
        </div>
      )}
    </div>
  );
};

export default DesktopNavigation;
