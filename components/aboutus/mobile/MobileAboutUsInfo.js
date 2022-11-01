import classes from "./MobileAboutUsInfo.module.css";
import Image from "next/image";

const MobileAboutUsInfo = (props) => {

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <Image
          src={props.picture}
          alt={props.pictureText}
          className={classes.mainImage}
        />
        <div className={classes.mainImageTextContainer}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.role}>{props.role}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default MobileAboutUsInfo;
