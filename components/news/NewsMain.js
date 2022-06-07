import DesktopNewMain from "./desktop/DesktopNewMain";
import MobilenNewsMain from "./mobile/MobileNewsMain";

import classes from "./NewsMain.module.css";

const NewsMain = (props) => {

  return (
    <div className={classes.mainContainer}>
      <MobilenNewsMain news={props.news} />
      <DesktopNewMain news={props.news} />
    </div>
  );
};

export default NewsMain;
