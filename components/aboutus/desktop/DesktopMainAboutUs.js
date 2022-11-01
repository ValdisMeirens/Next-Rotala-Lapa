import InfoDesktop from "../../header/common/InfoDesktop";
import DesktopAboutUsInfo from "./DesktopAboutUsInfo";
import classes from "./DesktopMainAboutUs.module.css";
import aboutUs from "../../../public/aboutus/par_mums_titulbilde.png";
import iamgeAboutUs from "../../../public/header/par-mums.png";
import Diana from "../../../public/aboutus/Diana.png";
import Donats from "../../../public/aboutus/Donats.png"

const DesktopMainAboutUs = (props) => {
  return (
    <div className={classes.aboutUsContainer}>
      <InfoDesktop
        backgroundImage={aboutUs}
        backgroundImageText="Par Mums"
        image={iamgeAboutUs}
        imageText="Par Mums teksts"
      />
      <DesktopAboutUsInfo
        picture={Diana}
        pictureText="Diana"
        name="Diāna Gavare"
        role="Tautas deju ansambļa ROTAĻA mākslinieciskā vadītāja"
        description="iLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut"
      />
      <DesktopAboutUsInfo
        picture={Donats}
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
