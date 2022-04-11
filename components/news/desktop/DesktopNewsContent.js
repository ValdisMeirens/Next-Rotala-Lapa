import classes from "./DesktopNewsContent.module.css";
import Link from "next/link";

const DesktopNewsContent = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.smallText}>{props.text}</p>
      <div className={classes.readMoreContainer}>
        <Link href={`/zinas-par-mums-ko-nezinajat/${props.newsid}`}>
          <div className={classes.readmore}>Lasīt vairāk...</div>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNewsContent;
