import DesktopContacts from "./DesktopContacts";
import classes from "./DesktopFooter.module.css";

const DesktopFooter = () => {
  return (
    <div className={classes.desktopContainer}>
        <DesktopContacts />
    </div>
  );
};

export default DesktopFooter;
