import classes from "./MobileMainHeader.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const MobileMainHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Image src="/footer/rotala_logo.png" width={2108} height={1082} />
      </div>
      <div className={classes.nav} onClick={props.onClick}>
        <Image src="/footer/rimbulis.png" width={1330} height={1082} />
      </div>
    </div>
  );
};

export default MobileMainHeader;
