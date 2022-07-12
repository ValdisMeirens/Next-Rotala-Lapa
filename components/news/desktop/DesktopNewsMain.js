import classes from "./DesktopNewsMain.module.css";

const DesktopNewsMain1 = (props) => {
  return (
    <div className={classes.desktopContainer}>
      <img
        src={`/news/${props.news.image}`}
        alt={props.news.title}
        className={classes.image}
      />
      <div className={classes.container}>
        <h1 className={classes.title}>{props.news.title}</h1>
        <p className={classes.text}>{props.news.info}</p>
      </div>
    </div>
  );
};

export default DesktopNewsMain1;
