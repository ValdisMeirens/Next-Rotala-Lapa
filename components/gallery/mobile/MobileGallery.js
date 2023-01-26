import classes from "./MobileGallery.module.css";
import Image from "next/image";
import MobileGalleryHeader from "./MobileGalleryHeader";

const MobileGallery = (props) => {
  const items = props.items.map(
    ({ ID, IMAGE_PATH, YEAR, FOLDER_NAME, PARENT_ID }) => {
      return (
        <div className={classes.imageContainer} key={ID}>
          <div className={classes.image}>
            <Image
              src={`${FOLDER_NAME}/${IMAGE_PATH}`}
              alt="Galerija"
              width={2000}
              height={2000}
              className={classes.image}
            />
          </div>
        </div>
      );
    }
  );

  const headerImage = `${props.items[props.items.length - 1].FOLDER_NAME}/${
    props.items[props.items.length - 1].IMAGE_PATH
  }`;
  const headerText = props.items[1].NAME;

  return (
    <div className={classes.row}>
      <MobileGalleryHeader
        backgroundImage={headerImage}
        backgroundImageText="Galerija"
        imageText={headerText}
      />
      {items}
    </div>
  );
};

export default MobileGallery;
