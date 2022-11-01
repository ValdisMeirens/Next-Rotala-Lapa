import classes from "./MobileMainHeader.module.css";
import Image from "next/image";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";

const MobileMainHeader = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.logocontainer}>
        <Image src={rotala_logo} alt="TDA Rotala" className={classes.logo}/>
      </div>
      <div className={classes.navcontainer} onClick={props.onClick}>
        <Image src={rimbulis} alt="Rimbulis"  className={classes.nav}/>
      </div>
    </div>
  );
};

export default MobileMainHeader;
