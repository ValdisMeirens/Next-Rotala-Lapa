import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimateSharedLayout, LayoutGroup, motion } from "framer-motion";
import classes from "./DesktopMain.module.css";
import DesktopMainDiv from "./DesktopMainDiv.js";

const DesktopMain = (props) => {
  // const firstNews = (
  //   <DesktopMainDiv
  //     title={props.news.data.news[0].title}
  //     smallText={props.news.data.news[0].smallText}
  //     image={props.news.data.news[0].image}
  //     ID={props.news.data.news[0].ID}
  //     text={props.news.data.news[0].text}
  //   />
  // );

  // const secondNews = (
  //   <DesktopMainDiv
  //     title={props.news.data.news[1].title}
  //     smallText={props.news.data.news[1].smallText}
  //     image={props.news.data.news[1].image}
  //     ID={props.news.data.news[1].ID}
  //     text={props.news.data.news[1].text}
  //   />
  // );

  // const thirdNews = (
  //   <DesktopMainDiv
  //     title={props.news.data.news[2].title}
  //     smallText={props.news.data.news[2].smallText}
  //     image={props.news.data.news[2].image}
  //     ID={props.news.data.news[2].ID}
  //     text={props.news.data.news[2].text}
  //   />
  // );

  // const [first, setFirst] = useState(true);
  // const [second, setSecond] = useState(false);
  // const [third, setThird] = useState(false);

  const arrayLenght = props.news.data.news.length - 1;
  let counter = 0;

  const [title, setTitle] = useState(props.news.data.news[0].title);
  const [smallText, setSmallText] = useState(props.news.data.news[0].smalltext);
  const [picture, setPicture] = useState(props.news.data.news[0].image);
  const [newsid, setNewsId] = useState(props.news.data.news[0].ID);
  const [text, setText] = useState(props.news.data.news[0].text);

  useEffect(() => {
    const changeNews = setInterval(() => {
      counter = counter === arrayLenght ? 0 : counter + 1;
      setTitle(props.news.data.news[counter].title);
      setSmallText(props.news.data.news[counter].smalltext);
      setPicture(props.news.data.news[counter].image);

      setNewsId(props.news.data.news[counter].ID);
      setText(props.news.data.news[counter].text);
    }, 3000);
    return () => clearInterval(changeNews);
  }, []);

  // useEffect(() => {
  //   const changeNews = setInterval(() => {
  //     console.log("esmu te");

  //     if (first) {
  //       console.log("first" + first);
  //       setFirst(false);
  //       setSecond(true);
  //     } else if (second) {
  //       console.log("second" + second);

  //       setSecond(false);
  //       setThird(true);
  //     } else if (third) {
  //       console.log("third" + third);

  //       setThird(false);
  //       setFirst(true);
  //     }
  //   }, 3000);
  //   return () => clearInterval(changeNews);
  // }, [first, second, third]);

  return (
    // <div className={classes.desktopContainer}>
    //   <LayoutGroup>
    //     {first && firstNews}
    //     {second && secondNews}
    //     {third && thirdNews}
    //   </LayoutGroup>
    // </div>
    <LayoutGroup>
      <motion.div className={classes.desktopContainer}>
        <DesktopMainDiv
          title={title}
          smallText={smallText}
          image={picture}
          ID={newsid}
          text={text}
        />
      </motion.div>
    </LayoutGroup>
  );
};

export default DesktopMain;
