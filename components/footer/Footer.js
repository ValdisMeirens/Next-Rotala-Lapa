import DesktopFooter from "./desktop/DesktopFooter";
import classes from "./Footer.module.css";
import MobileFooter from "./mobile/MobileFooter";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
};

export default Footer;
