import Image from "next/image";
import classes from "./MobileSocialNetwork.module.css";

const MobileSocialNetwork = (props) => {
  return (
    <div className={classes.imageContainer}>
      <a href={props.url} target="_blank">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </a>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
};

export default MobileSocialNetwork;
