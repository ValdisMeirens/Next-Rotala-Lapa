import DesktopSocialNetwork from "./DesktopSocialNetwork";
import classes from "./DesktopContacts.module.css";

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
          src="/socialnetwork/insta.png"
          alt="INSTAGRAM"
          width={350}
          height={350}
          url="https://instagram.com/tdarotala"
        />
        <DesktopSocialNetwork
          src="/socialnetwork/facebook.png"
          alt="FACEBOOK"
          width={350}
          height={350}
          url="https://www.facebook.com/TdaRotala"
        />
        <DesktopSocialNetwork
          src="/socialnetwork/youtube.png"
          alt="YOUTUBE"
          width={350}
          height={350}
          url="https://www.youtube.com/user/tdaRotala"
        />
      </div>
    </div>
  );
};

export default DesktopContacts;
