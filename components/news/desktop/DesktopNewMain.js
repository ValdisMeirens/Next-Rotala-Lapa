import classes from "./DesktopNewMain.module.css";

const DesktopNewMain = (props) => {
  console.log(props);
  return (
    <div className={classes.desktopContainer}>
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

export default DesktopNewMain;
