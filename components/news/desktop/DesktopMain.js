import { useState,useEffect } from "react";
import classes from "./DesktopMain.module.css";
import DesktopNewsContent from "./DesktopNewsContent.js";

const DesktopMain = (props) => {
  const pictureText = "TDA Rotaļa Jaunumi";

  const arrayLenght = props.news.length - 1;
  let counter = 0;
  const [title, setTitle] = useState(props.news[0].title);
  const [smallText, setSmallText] = useState(props.news[0].smalltext);
  const [picture, setPicture] = useState(props.news[0].image);
  const [newsid, setNewsId] = useState(props.news[0].ID);


  useEffect(() => {
      const changeNews = setInterval(() => {
        counter = counter === arrayLenght ? 0 : counter + 1;
  
        setTitle(props.news[counter].title);
        setSmallText(props.news[counter].smalltext);
        setPicture(props.news[counter].image);

        setNewsId(props.news[counter].ID);
      }, 3000);
      return () => clearInterval(changeNews);
    }, []);

  return (
    <div className={classes.desktopContainer}>
      <img
        src={`/news/${picture}`}
        alt={pictureText}
        className={classes.image}
      />
      <DesktopNewsContent title={title} text={smallText} newsid={newsid}/>
    </div>
  );
};

export default DesktopMain;
