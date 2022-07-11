import MobileAboutUsInfo from "./MobileAboutUsInfo";
import classes from "./MobileMainAboutUs.module.css";

const MobileMainAboutUs = (props) => {
  return (
    <div className={classes.aboutUsContainer}>
      <div className={classes.mainImageContainer}>
        <img
          src={`/aboutus/par_mums_titulbilde.png`}
          alt="Par Mums"
          className={classes.mainImage}
        />
        <div className={classes.mainImageTextContainer}>
          <img
            src={`/header/par-mums.png`}
            alt="Par Mums teksts"
            className={classes.aboutUsTextImage}
          />
        </div>
      </div>
      {/* <MobileAboutUsInfo
        picture="/aboutus/Diana.png"
        pictureText="Diana"
        name="Diāna Gavare"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītāja"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      />
      <MobileAboutUsInfo
        picture="/aboutus/Donats.png"
        pictureText="Donats"
        name="Donats Rudzits"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītājas asistents"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      /> */}
    </div>
  );
};

export default MobileMainAboutUs;
