import DesktopNavigation from "./desktop/DesktopNavigation";
import MobileNavigation from "./mobile/MobileNavigation";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};

export default Header;
