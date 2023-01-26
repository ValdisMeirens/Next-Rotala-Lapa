import classes from "./DesktopMainGallery.module.css";
import Link from "next/link";
import InfoDesktop from "../../header/common/InfoDesktop";
import Image from "next/image";
import galleryTitlePicture from "../../../public/gallery_header/galerijas_titulbilde.png";
import imageAboutUs from "../../../public/header/GALERIJA.png";

const DesktopMainGallery = (props) => {
  const galleryItems = props.gallery.data.map(({ ID, NAME, IMAGE_NAME }) => {
    return (
      <Link
        key={ID}
        href={`/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs/galerija/${ID}`}
      >
        <div className={classes.container}>
          <Image
            src={`/gallery_header/${IMAGE_NAME}`}
            alt={NAME}
            className={classes.image}
            width={1900}
            height={1900}
          />
          <div className={classes.title}>
            <div>{NAME}</div>
          </div>
        </div>
      </Link>
    );
  });

  {
    /* <div>
          <div className={classes.gridimagecontainer}>
            <Image
              src={`/gallery_header/${IMAGE_NAME}`}
              alt={NAME}
              className={classes.gridimage}
              width={2000}
              height={2000}
            />
          </div>

          <div className={classes.gridtitle}>{NAME}</div>
        </div> */
  }

  return (
    <div className={classes.galleryContainer}>
      <InfoDesktop
        backgroundImage={galleryTitlePicture}
        backgroundImageText="Galerija"
        image={imageAboutUs}
        imageText="Galerija teksts"
      />
      {/* <div className={classes.gridcontainer}>{galleryItems}</div> */}
      {galleryItems}
    </div>
  );
};

export default DesktopMainGallery;
