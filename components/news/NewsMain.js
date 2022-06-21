import DesktopNewsMain from "./desktop/DesktopNewsMain";
import MobilenNewsMain from "./mobile/MobileNewsMain";

import classes from "./NewsMain.module.css";

const NewsMain = (props) => {
  console.log(props)
  return (
    <div className={classes.mainContainer}>
      <MobilenNewsMain news={props.news} />
      <DesktopNewsMain news={props.news} />
    </div>
  );
};

export default NewsMain;
