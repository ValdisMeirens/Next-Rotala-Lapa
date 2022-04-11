import classes from "./MobileFollowUs.module.css";
import MobileSocialNetwork from "./MobileSocialNetwork";

const MobileFollowUs = () => {
  return (
    <div className={classes.followUsContainer}>
      <div className={classes.followUsTitle}>SEKO MUMS</div>
      <div className={classes.socialNetworkContainer}>
        <MobileSocialNetwork
          src="/socialnetwork/insta.png"
          alt="INSTAGRAM"
          width={351}
          height={360}
          url="https://instagram.com/tdarotala"
          text="Redzēsi bildes"
        />
        <MobileSocialNetwork
          src="/socialnetwork/facebook.png"
          alt="FACEBOOK"
          width={351}
          height={360}
          url="https://www.facebook.com/TdaRotala"
          text="Uzzināsi jaunumus"
        />
        <MobileSocialNetwork
          src="/socialnetwork/youtube.png"
          alt="YOUTUBE"
          width={351}
          height={360}
          url="https://www.youtube.com/user/tdaRotala"
          text="Izbaudīsi dejas"
        />
      </div>
    </div>
  );
};

export default MobileFollowUs;
