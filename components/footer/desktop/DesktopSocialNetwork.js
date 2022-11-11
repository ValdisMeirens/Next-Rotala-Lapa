import Image from "next/image";
import classes from "./DesktopSocialNetwork.module.css";
import Link from "next/link";

const DesktopSocialNetwork = (props) => {
  return (
    <div className={classes.container}>
      <Link href={props.url} target="_blank" rel="noreferrer">
        <Image src={props.src} alt={props.alt} className={classes.image} />
      </Link>
     </div>
  );
};

export default DesktopSocialNetwork;
