import Image from "next/image";
import classes from "./MobileSocialNetwork.module.css";

const MobileSocialNetwork = (props) => {
  return (
    <div className={classes.imageContainer}>
      <a href={props.url} target="_blank" rel="noreferrer">
        <Image src={props.src} alt={props.alt} className={classes.image} />
      </a>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
};

export default MobileSocialNetwork;
