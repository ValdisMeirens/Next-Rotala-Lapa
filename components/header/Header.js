import DesktopNavigation from "./desktop/DesktopNavigation";
import classes from "./Header.module.css";
import MobileNavigation from "./mobile/MobileNavigation";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};

export default Header;
