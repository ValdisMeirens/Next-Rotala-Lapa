import classes from "./DesktopMainHeader.module.css";
import Image from "next/image";
import { motion } from "framer-motion";


const DesktopMainHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logocontainer}>
        <div className={classes.logo}>
          <Image src="/footer/rotala_logo.png" width={2108} height={1082} />
        </div>
      </div>
      <motion.div className={classes.navcontainer}   whileHover={{ rotate:'1111deg' }} 
          transition={{ duration: 2 }}
      >
        <div className={classes.nav}>
          <Image
            src="/footer/rimbulis.png"
            width={1330}
            height={1082}
            onMouseEnter={props.onMouseEnter}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DesktopMainHeader;
