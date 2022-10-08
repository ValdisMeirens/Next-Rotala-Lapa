import DesktopMain from "./desktop/DesktopMain";
import MobileMain from "./mobile/MobileMain";
import classes from "./Main.module.css";
import { useEffect, useState } from "react";

const Main = (props) => {
  // const [dataResponse, setDataResponse] = useState([]);
  // useEffect(() => {
  //   return () => {
  //     async function getPageData() {
  //       const apiUrlEndpoint = `http://localhost:3000/api/news`;
  //       const response = await fetch(apiUrlEndpoint);
  //       const res = await response.json();
  //       setDataResponse(res.results);
  //     }
  //     getPageData();
  //   };
  // }, []);

  return (
    <div className={classes.mainContainer}>
      <MobileMain news={props.news} />
      <DesktopMain news={props.news} />
    </div>
  );
};

export default Main;
