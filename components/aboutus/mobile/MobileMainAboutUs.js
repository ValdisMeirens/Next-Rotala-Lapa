import MobileAboutUsInfo from "./MobileAboutUsInfo";
import classes from "./MobileMainAboutUs.module.css";
import InfoMobile from "../../header/common/InfoMobile";

const MobileMainAboutUs = (props) => {
  return (
    <div className={classes.aboutUsContainer}>
      <InfoMobile
        backgroundImage="/aboutus/par_mums_titulbilde.png"
        backgroundImageText="Par Mums"
        image="/header/par-mums.png"
        imageText="Par Mums teksts"
      />

      <MobileAboutUsInfo
        picture="/aboutus/Diana.png"
        pictureText="Diana"
        name="Diāna Gavare"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītāja"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      />
      <MobileAboutUsInfo
        picture="/aboutus/Donats.png"
        pictureText="Donats"
        name="Donats Rudzits"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītājas asistents"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod"
      />
      <div className={classes.line}></div>
    </div>
  );
};

export default MobileMainAboutUs;
