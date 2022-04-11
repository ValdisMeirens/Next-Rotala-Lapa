import MobileMainHeader from "./MobileMainHeader";
import classes from "./MobileNavigation.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileNavigation = () => {
  const container = {
    hidden: { display: "none" },
    show: {
      display: "block",
      transition: { delayChildren: 0.2, staggerDirection: 1 },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const clickHandler = () => {
    setShowMobileNavigation(!showMobileNavigation);
  };

  return (
    <div className={classes.mobileContainer}>
      <MobileMainHeader onClick={clickHandler} />
      {showMobileNavigation && (
        <motion.div className={classes.navLinksContainer}>
          <motion.nav
            className={classes.container}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.ul>
              <Link href="/">
                <motion.li variants={item}>Jaunumi</motion.li>
              </Link>
              <Link href="/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs">
                <motion.li variants={item}>Galerija</motion.li>
              </Link>
              <Link href="/par-mums-skaistajiem-cilvekiem">
                <motion.li variants={item}>Par Mums</motion.li>
              </Link>
            </motion.ul>
          </motion.nav>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavigation;
