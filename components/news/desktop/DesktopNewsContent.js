import classes from "./DesktopNewsContent.module.css";
import Link from "next/link";

const DesktopNewsContent = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.smallText}>{props.smallText}</div>
      <div className={classes.text}>{props.text}</div>

      <div className={classes.readMoreContainer}>
        <Link href={`/zinas-par-mums-ko-nezinajat/${props.newsid}`}>
          <div className={classes.readmore}>Lasīt vairāk...</div>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNewsContent;
