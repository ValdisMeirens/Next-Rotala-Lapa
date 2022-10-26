import classes from "./DesktopMainHeader.module.css";
import Image from "next/image";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png"

// import { motion } from "framer-motion";


const DesktopMainHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logocontainer}>
        <Image src={rotala_logo} className={classes.logo} alt="TDA Rotala"/>
      </div>
      {/* <motion.div className={classes.navcontainer}   whileHover={{ rotate:'1111deg' }} 
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
      </motion.div> */}
      <div className={classes.navcontainer}>
        <Image
          src={rimbulis}
          className={classes.nav}
          alt="Rimbulis"
          onMouseEnter={props.onMouseEnter}
        />
      </div>
    </div>
  );
};

export default DesktopMainHeader;
