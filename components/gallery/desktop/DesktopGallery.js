import classes from "./DesktopGallery.module.css";
import Image from "next/image";

const DesktopGallery = (props) => {
  const items = props.items.map(
    ({ ID, IMAGE_PATH, YEAR, FOLDER_NAME, PARENT_ID }) => {
      return (
        <div className={classes.imageContainer} key={ID}>
          <div className={classes.image}>
            <Image
              src={`${FOLDER_NAME}/${IMAGE_PATH}`}
              alt="Galerija"
              width={1900}
              height={1900}
              className={classes.image}
            />
          </div>
        </div>
      );
    }
  );

  return <div className={classes.row}>{items}</div>;
};

export default DesktopGallery;
