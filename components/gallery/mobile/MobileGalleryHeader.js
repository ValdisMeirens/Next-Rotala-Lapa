import classes from "./MobileGalleryHeader.module.css";
import Image from "next/image";
const MobileGalleryHeader = (props) => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.fadecontainer}></div> */}
      <Image
        src={props.backgroundImage}
        alt={props.backgroundImageText}
        className={classes.backgroundImage}
        width={2000}
        height={2000}
      />
      <div className={classes.imageTextContainer}>
        <div>{props.imageText}</div>
      </div>
    </div>
  );
};

export default MobileGalleryHeader;
