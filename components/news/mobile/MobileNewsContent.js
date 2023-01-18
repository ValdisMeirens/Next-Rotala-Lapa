import classes from "./MobileNewsContent.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const animationVariant = {
  hidden: {
    opacity: 0,
  },
  visiable: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const MobileNewsContent = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.latestNews}>JAUNUMI</div>
      </div>
      <div className={classes.textContainer}>
        <AnimatePresence>
          <motion.div
            className={classes.animationContainer}
            variants={animationVariant}
            key={props.newsid}
            initial="hidden"
            animate="visiable"
            exit="exit"
          >
            <motion.div className={classes.newsTitle}>
              <motion.div>{props.title}</motion.div>
            </motion.div>
            <motion.p className={classes.smallText}>{props.smalltext}</motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
      <Link
        href={`/zinas-par-mums-ko-nezinajat/${props.newsid}`}
        className={classes.readMore}
      >
        LASĪT VAIRĀK
      </Link>
    </div>
  );
};

export default MobileNewsContent;
