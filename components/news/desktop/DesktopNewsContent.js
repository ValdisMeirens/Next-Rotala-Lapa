import classes from "./DesktopNewsContent.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const DesktopNewsContent = (props) => {
  return (
    <motion.div className={classes.container}>
      <motion.div className={classes.title}>{props.title}</motion.div>
      <motion.div className={classes.smallText}>{props.smallText}</motion.div>
      <motion.div className={classes.text}>{props.text}</motion.div>

      <motion.div className={classes.readMoreContainer}>
        <Link href={`/zinas-par-mums-ko-nezinajat/${props.newsid}`}>
          <div className={classes.readmore}>Lasīt vairāk...</div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DesktopNewsContent;
