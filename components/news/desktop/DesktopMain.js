import { useState, useEffect } from "react";
import classes from "./DesktopMain.module.css";
import DesktopNewsContent from "./DesktopNewsContent.js";
import Image from "next/image";

const DesktopMain = (props) => {
  const pictureText = "TDA Rotaļa Jaunumi";
  // const [dataResponse, setDataResponse] = useState([]);
  // useEffect(() => {
  //   {
  //     async function getPageData() {
  //       const apiUrlEndpoint = `http://localhost:3000/api/news`;
  //       const response = await fetch(apiUrlEndpoint);
  //       const res = await response.json();
  //       setDataResponse(res);
  //     }
  //     getPageData();
  //   }
  // }, []);

  // const apiUrlEndpoint = `http://localhost:3000/api/news`;

  // async function getPageData() {
  //   const response = await fetch(apiUrlEndpoint);
  //   const res = await response.json();
  //   console.log(res);
  //   return;
  // }
  // useEffect(() => {
  //   getPageData();
  // }, []);

  const arrayLenght = props.news.data.news.length - 1;
  let counter = 0;
  const [title, setTitle] = useState(props.news.data.news[0].title);
  const [smallText, setSmallText] = useState(props.news.data.news[0].smalltext);
  const [picture, setPicture] = useState(props.news.data.news[0].image);
  const [newsid, setNewsId] = useState(props.news.data.news[0].ID);
  const [text, setText] = useState(props.news.data.news[0].text);

  // const arrayLenght = dataResponse.news.length - 1;
  // console.log(arrayLenght);
  // let counter = 0;
  // const [title, setTitle] = useState(props.news[0].title);
  // const [smallText, setSmallText] = useState(props.news[0].smalltext);
  // const [picture, setPicture] = useState(props.news[0].image);
  // const [newsid, setNewsId] = useState(props.news[0].ID);
  // const [text, setText] = useState(props.news[0].text);

  useEffect(() => {
    console.log("test");
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

  return (
    <div className={classes.desktopContainer}>
      <div className={classes.image}>
        <Image
          src={`/news/${picture}`}
          objectFit="cover"
          className={classes.image}
          layout="fill"
        />
      </div>

      <DesktopNewsContent
        title={title}
        smallText={smallText}
        newsid={newsid}
        text={text}
      />
    </div>
  );
};

export default DesktopMain;
