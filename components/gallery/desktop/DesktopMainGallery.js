import { Fragment } from "react";
import classes from "./DesktopMainGallery.module.css";

const DesktopMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(({ ID, NAME, IMAGE_NAME }) => {
    return (
      <div key={ID} className={classes.galleryImageContainer}>
        <img
          src={`/gallery_header/${IMAGE_NAME}`}
          alt={NAME}
          className={classes.galleryImage}
        />
        <div className={classes.imageTitle}>{NAME}</div>
      </div>
    );
  });

  return (
    <div className={classes.galleryContainer}>
      <div className={classes.mainImageContainer}>
        <img
          src={`/gallery_header/galerijas_titulbilde.png`}
          alt="GALERIJA"
          className={classes.mainImage}
        />
      </div>
      {galleryItems}
    </div>
  );
};

export default DesktopMainGallery;
