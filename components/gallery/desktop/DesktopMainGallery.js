import classes from "./DesktopMainGallery.module.css";
import Link from "next/link";
import InfoDesktop from "../../header/common/InfoDesktop";

const DesktopMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(({ ID, NAME, IMAGE_NAME }) => {
    return (
      <Link
        key={ID}
        href={`/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs/galerija/${ID}`}
      >
        <div className={classes.container}>
          <img
            src={`/gallery_header/${IMAGE_NAME}`}
            alt={NAME}
            className={classes.image}
          />
          <div className={classes.title}>{NAME}</div>
        </div>
      </Link>
    );
  });

  return (
    <div className={classes.galleryContainer}>
      <InfoDesktop
        backgroundImage="/gallery_header/galerijas_titulbilde.png"
        backgroundImageText="Galerija"
        image="/header/GALERIJA.png"
        imageText="Galerija teksts"
      />
      {galleryItems}
    </div>
  );
};

export default DesktopMainGallery;
