import Image from "next/image";
import classes from "./DesktopSocialNetwork.module.css";

const DesktopSocialNetwork = (props) => {
  return (
    <div className={classes.image}>
      <a href={props.url} target="_blank">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </a>
    </div>
  );
};

export default DesktopSocialNetwork;
