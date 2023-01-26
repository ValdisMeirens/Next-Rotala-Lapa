import classes from "./MobileMainDiv.module.css";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Fragment, useEffect } from "react";
import Link from "next/link";
import MobileNewsContent from "./MobileNewsContent";

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

const MobileMainDiv = (props) => {
  const newsImageArray = props.data.news.data.news.map((news) => (
    <motion.div
      variants={animationVariant}
      key={news.ID}
      initial="hidden"
      animate="visiable"
      exit="exit"
    >
      <Image
        src={`/news/${news.image}`}
        alt="TDA Rotaļa jaunumi"
        className={classes.image}
        width={2000}
        height={2000}
      />
    </motion.div>
  ));

  const newsArray = props.data.news.data.news.map((news) => (
    <MobileNewsContent
      title={news.title}
      smalltext={news.smalltext}
      text={news.text}
      newsid={news.ID}
      key={news.ID}
    />
  ));

  const [currentImage, setCurrentImage] = useCycle(...newsImageArray);
  const [currentNews, setCurrentNews] = useCycle(...newsArray);

  useEffect(() => {
    const timeout = setInterval(setCurrentImage, 5000);

    return () => clearInterval(timeout);
  }, [setCurrentImage, currentImage]);

  useEffect(() => {
    const timeout = setInterval(setCurrentNews, 16000);

    return () => clearInterval(timeout);
  }, [setCurrentNews, currentNews]);

  return (
    <Fragment>
      <div className={classes.imageContainer}>
        <AnimatePresence>{currentImage}</AnimatePresence>
      </div>
      <div className={classes.textContainer}>{currentNews}</div>
    </Fragment>
  );
};

export default MobileMainDiv;
