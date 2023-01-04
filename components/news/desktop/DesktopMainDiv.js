import classes from "./DesktopMainDiv.module.css";
import DesktopNewsContent from "./DesktopNewsContent.js";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DesktopMainDiv = ({ title, smallText, image, ID, text }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div>
          <Image
            src={`/news/${image}`}
            alt="TDA Rotaļa jaunumi"
            className={classes.image}
            width={2500}
            height={2500}
          />
        </motion.div>
        <DesktopNewsContent
          title={title}
          smallText={smallText}
          newsid={ID}
          text={text}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default DesktopMainDiv;
