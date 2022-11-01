import classes from "./MobilenNewsMain.module.css";
import Image from "next/image";

const MobilenNewsMain = (props) => {
  return (
    <div className={classes.newsContainer}>
      <Image
        src={`/news/${props.news.image}`}
        alt={props.news.title}
        className={classes.image}
        width={6000}
        height={6000}
      />
      <div className={classes.container}>
        <h1 className={classes.title}>{props.news.title}</h1>
        <p className={classes.text}>{props.news.info}</p>
      </div>
    </div>
  );
};

export default MobilenNewsMain;
