import MobileContacts from "./MobileContacts";
import MobileFollowUs from "./MobileFollowUs";
import classes from "./MobileFooter.module.css";

const MobileFooter = () => {
  return (
    <div className={classes.mobileContainer}>
      <MobileContacts />
      <MobileFollowUs />
    </div>
  );
};

export default MobileFooter;
