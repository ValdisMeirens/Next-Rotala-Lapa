import InfoDesktop from "../../header/common/InfoDesktop";
import DesktopAboutUsInfo from "./DesktopAboutUsInfo";
import classes from "./DesktopMainAboutUs.module.css";

const DesktopMainAboutUs = (props) => {
  return (
    <div className={classes.aboutUsContainer}>
      <InfoDesktop
        backgroundImage="/aboutus/par_mums_titulbilde.png"
        backgroundImageText="Par Mums"
        image="/header/par-mums.png"
        imageText="Par Mums teksts"
      />
      <DesktopAboutUsInfo
        picture="/aboutus/Diana.png"
        pictureText="Diana"
        name="Diāna Gavare"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītāja"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      />
      <DesktopAboutUsInfo
        picture="/aboutus/Donats.png"
        pictureText="Donats"
        name="Donats Rudzits"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītājas asistents"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      />
    </div>
  );
};

export default DesktopMainAboutUs;
