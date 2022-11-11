import { useState, useEffect } from "react";
import classes from "./MobileMain.module.css";
import Link from "next/link";
import Image from "next/image";

const MobileMain = (props) => {
  const pictureText = "TDA Rotaļa Jaunumi";

  const arrayLenght = props.news.data.news.length - 1;
  let counter = 0;
  const [title, setTitle] = useState(props.news.data.news[0].title);
  const [smallText, setSmallText] = useState(props.news.data.news[0].smalltext);
  const [picture, setPicture] = useState(props.news.data.news[0].image);
  const [newsid, setNewsId] = useState(props.news.data.news[0].ID);

  useEffect(() => {
    const changeNews = setInterval(() => {
      counter = counter === arrayLenght ? 0 : counter + 1;
      setTitle(props.news.data.news[counter].title);
      setSmallText(props.news.data.news[counter].smalltext);
      setPicture(props.news.data.news[counter].image);
      setNewsId(props.news.data.news[counter].ID);
    }, 1000);
    return () => clearInterval(changeNews);
  }, []);

  return (
    <div className={classes.container}>
      <Image
        src={`/news/${picture}`}
        alt={pictureText}
        className={classes.image}
        width={2000}
        height={2000}
      />
      <div className={classes.newsContainer}>
        <div className={classes.latestNews}>JAUNUMI</div>
        <div className={classes.newsTitle}><div>{title}</div></div>
        <p className={classes.smallText}>{smallText}</p>
        <Link
          href={`/zinas-par-mums-ko-nezinajat/${newsid}`}
          className={classes.readMore}
        >
          LASĪT VAIRĀK
        </Link>
      </div>
    </div>
  );
};

export default MobileMain;
