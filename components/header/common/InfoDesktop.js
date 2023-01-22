import classes from "./InfoDesktop.module.css";
import Image from "next/image";
const InfoDesktop = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.fadecontainer}></div>
      <Image
        src={props.backgroundImage}
        alt={props.backgroundImageText}
        className={classes.backgroundImage}
      />
      <div className={classes.imageTextContainer}>
        <Image
          src={props.image}
          alt={props.imageText}
          className={classes.imageText}
        />
      </div>
    </div>
  );
};

export default InfoDesktop;
