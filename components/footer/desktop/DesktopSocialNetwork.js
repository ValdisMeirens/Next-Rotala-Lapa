import Image from "next/image";
import classes from "./DesktopSocialNetwork.module.css";

const DesktopSocialNetwork = (props) => {
  return (
    <div className={classes.container}>
      <a href={props.url} target="_blank" rel="noreferrer">
        <Image src={props.src} alt={props.alt} className={classes.image} />
      </a>
     </div>
  );
};

export default DesktopSocialNetwork;
