import classes from "./DesktopGallery.module.css";

const DesktopGallery = (props) => {
  const items = props.items.map(
    ({ ID, IMAGE_PATH, YEAR, FOLDER_NAME, PARENT_ID }) => {
      return (
        <div className={classes.imageContainer}>
          <img
            src={`${FOLDER_NAME}/${IMAGE_PATH}`}
            alt={YEAR}
            className={classes.image}
          />
        </div>
      );
    }
  );

  return <div className={classes.row}>{items}</div>;
};

export default DesktopGallery;
