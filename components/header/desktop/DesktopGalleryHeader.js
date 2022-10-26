import classes from "./DesktopGalleryHeader.module.css";
import Image from "next/image";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";

const DesktopGalleryHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logocontainer}>
        <Image src={rotala_logo} className={classes.logo} alt="TDA Rotala" />
      </div>
      <div className={classes.text}>JAUNUMI</div>
      <div className={classes.text}>GALERIJA</div>
      <div className={classes.text}>PAR MUMS</div>

      <div className={classes.circlecontainer}>
        <Image src={rimbulis} className={classes.circle} alt="Rimbulis" />
      </div>
    </div>
  );
};

export default DesktopGalleryHeader;
