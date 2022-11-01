import classes from "./MobileFollowUs.module.css";
import MobileSocialNetwork from "./MobileSocialNetwork";
import insta from "../../../public/socialnetwork/insta.png";
import facebook from "../../../public/socialnetwork/facebook.png";
import youtube from "../../../public/socialnetwork/youtube.png";

const MobileFollowUs = () => {
  return (
    <div className={classes.followUsContainer}>
      <div className={classes.followUsTitle}>SEKO MUMS</div>
      <div className={classes.socialNetworkContainer}>
        <MobileSocialNetwork
          src={insta}
          alt="INSTAGRAM"
          url="https://instagram.com/tdarotala"
          text="Redzēsi bildes"
        />
        <MobileSocialNetwork
          src={facebook}
          alt="FACEBOOK"
          url="https://www.facebook.com/TdaRotala"
          text="Uzzināsi jaunumus"
        />
        <MobileSocialNetwork
          src={youtube}
          alt="YOUTUBE"
          url="https://www.youtube.com/user/tdaRotala"
          text="Izbaudīsi dejas"
        />
      </div>
    </div>
  );
};

export default MobileFollowUs;
