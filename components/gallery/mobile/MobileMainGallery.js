import classes from "./MobileMainGallery.module.css";
import Link from "next/link";

const MobileMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(({ ID, NAME, IMAGE_NAME }) => {
    return (
      <Link
        key={ID}
        href={`/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs/galerija/${ID}`}
      >
        <div className={classes.galleryImageContainer}>
          <img
            src={`/gallery_header/${IMAGE_NAME}`}
            alt={NAME}
            className={classes.galleryImage}
          />
          <div className={classes.imageTitle}>{NAME}</div>
        </div>
      </Link>
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
        <div className={classes.mainImageTextContainer}>
          <img
            src={`/header/GALERIJA.png`}
            alt="GALERIJA TEKSTS"
            className={classes.galleryTextImage}
          />
        </div>
      </div>
      {galleryItems}
    </div>
  );
};

export default MobileMainGallery;
