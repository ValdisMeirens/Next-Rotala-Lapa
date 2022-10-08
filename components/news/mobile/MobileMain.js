import { useState, useEffect } from "react";
import classes from "./MobileMain.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileMain = (props) => {
  const pictureText = "TDA Rotaļa Jaunumi";

  const arrayLenght = props.news.data.news.length - 1;
  let counter = 0;
  const [title, setTitle] = useState(props.news.data.news[0].title);
  const [smallText, setSmallText] = useState(props.news.data.news[0].smalltext);
  const [picture, setPicture] = useState(props.news.data.news[0].image);
  const [newsid, setNewsId] = useState(props.news.data.news[0].ID);
  const item = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  };

  useEffect(() => {
    const changeNews = setInterval(() => {
      counter = counter === arrayLenght ? 0 : counter + 1;

      setTitle(props.news.data.news[counter].title);
      setSmallText(props.news.data.news[counter].smalltext);
      setPicture(props.news.data.news[counter].image);
      setNewsId(props.news.data.news[counter].ID);
    }, 2000);
    return () => clearInterval(changeNews);
  }, []);

  return (
    <div className={classes.container}>
      <img
        src={`/news/${picture}`}
        alt={pictureText}
        className={classes.image}
      />
      <div className={classes.newsContainer}>
        <div className={classes.latestNews}>JAUNUMI</div>
        <motion.div
          className={classes.newsTitle}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.div>
        <p className={classes.smallText}>{smallText}</p>
        <Link href={`/zinas-par-mums-ko-nezinajat/${newsid}`}>
          <div className={classes.readMore}>LASĪT VAIRĀK</div>
        </Link>
      </div>
    </div>
  );

};

export default MobileMain;
