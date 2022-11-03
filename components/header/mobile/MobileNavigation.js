import classes from "./MobileNavigation.module.css";
import { useState } from "react";
import rotala_logo from "../../../public/footer/rotala_logo.png";
import rimbulis from "../../../public/footer/rimbulis.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const clickHandler = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div className={classes.mobileContainer}>
      <div className={classes.container}>
        <div className={classes.logocontainer}>
          {!showNavLinks && (
            <Image
              src={rotala_logo}
              alt="TDA Rotala"
              className={classes.logo}
            />
          )}
        </div>
        <div className={classes.navcontainer} onClick={clickHandler}>
          {!showNavLinks && (
            <Image src={rimbulis} alt="Rimbulis" className={classes.nav} />
          )}
        </div>
      </div>
      <motion.div
        animate={{
          visibility: showNavLinks ? "visible" : "hidden",
          opacity: showNavLinks ? 0.9 : 0,
        }}
        transition={{ type: "tween", duration: 0.3 }}
        onClick={() => {
          setShowNavLinks(!showNavLinks);
        }}
        className={classes.overlaycontainer}
      >
        <div className={classes.overlay}>
          <div className={classes.logocontainer}>
            <Image
              src={rotala_logo}
              alt="TDA Rotala"
              className={classes.logo}
            />
          </div>
          <div className={classes.close} onClick={clickHandler}>
            X
          </div>
        </div>

        <div className={classes.navtextcontainer}>
          <ul className={classes.childnavtextcontainer}>
            <Link href="/" className={classes.size}>
              <li>JAUNUMI</li>
            </Link>
            <Link href="/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs" className={classes.size}>
              <li>GALERIJA</li>
            </Link>
            <Link href="/par-mums-skaistajiem-cilvekiem" className={classes.size}>
              <li>PAR MUMS</li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavigation;
