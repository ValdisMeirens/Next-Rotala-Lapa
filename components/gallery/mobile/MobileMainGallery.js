import classes from "./MobileMainGallery.module.css";
import Link from "next/link";
import InfoMobile from "../../header/common/InfoMobile";
import galerijaTitulbilde from "../../../public/gallery_header/galerijas_titulbilde.png";
import galerija from "../../../public/header/GALERIJA.png";

import Image from "next/image";

const MobileMainGallery = (props) => {
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
        </div>
        <div className={classes.title}>{NAME}</div>
      </Link>
    );
  });

  return (
    <div className={classes.galleryContainer}>
      <InfoMobile
        backgroundImage={galerijaTitulbilde}
        backgroundImageText="Galerija"
        image={galerija}
        imageText="Galerija Teksts"
      />
      {galleryItems}
    </div>
  );
};

export default MobileMainGallery;
