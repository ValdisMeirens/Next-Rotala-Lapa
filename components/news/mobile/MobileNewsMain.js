import classes from "./MobilenNewsMain.module.css";

const MobilenNewsMain = (props) => {
  return (
    <div className={classes.newsContainer}>
      <img
        src={`/news/${props.news.image}`}
        alt={props.news.title}
        className={classes.image}
      />
      <div className={classes.container}>
        <h1 className={classes.title}>{props.news.title}</h1>
        <p className={classes.text}>{props.news.text}</p>
      </div>
    </div>
  );
};

export default MobilenNewsMain;
