import classes from "./DesktopGalleryHeader.module.css";
import Image from "next/image";

const DesktopGalleryHeader = (props) => {
  return (
      <div className={classes.container}>
        <div className={classes.logo}>
          <Image src="/footer/rotala_logo.png" width={2108} height={1082} />
        </div>
        <div className={classes.text}>JAUNUMI</div>
        <div className={classes.text}>GALERIJA</div>
        <div className={classes.text}>PAR MUMS</div>

        <div className={classes.circle}>
          <Image src="/footer/rimbulis.png" width={1330} height={1082} />
        </div>
      </div>
  );
};

export default DesktopGalleryHeader;
