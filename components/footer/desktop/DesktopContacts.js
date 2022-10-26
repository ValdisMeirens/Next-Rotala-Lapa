import DesktopSocialNetwork from "./DesktopSocialNetwork";
import classes from "./DesktopContacts.module.css";
import insta from "../../../public/socialnetwork/insta.png";
import facebook from "../../../public/socialnetwork/facebook.png";
import youtube from "../../../public/socialnetwork/youtube.png";

const DesktopContacts = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.contactheading}>KONTAKTI LEGAL INFO</h3>
      <p className={classes.contactparagraph}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut
      </p>
      <div className={classes.socialnetworkcontainer}>
        <DesktopSocialNetwork
          src={insta}
          alt="INSTAGRAM"
          url="https://instagram.com/tdarotala"
        />
        <DesktopSocialNetwork
          src={facebook}
          alt="FACEBOOK"
          url="https://www.facebook.com/TdaRotala"
        />
        <DesktopSocialNetwork
          src={youtube}
          alt="YOUTUBE"
          url="https://www.youtube.com/user/tdaRotala"
        />
      </div>
    </div>
  );
};

export default DesktopContacts;
