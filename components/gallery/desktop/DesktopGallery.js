import classes from "./DesktopGallery.module.css";

const DesktopGallery = (props) => {
//   const galleryItems = props.gallery.data.map(({ ID, NAME, IMAGE_NAME }) => {
//     return (
//       <Link
//         key={ID}
//         href={`/galerija-ar-cilvekiem-kam-lekat-polku-ir-hobijs/galerija/${ID}`}
//       >
//         <div className={classes.galleryImageContainer}>
//           <img
//             src={`/gallery_header/${IMAGE_NAME}`}
//             alt={NAME}
//             className={classes.galleryImage}
//           />
//           <div className={classes.imageTitle}>{NAME}</div>
//         </div>
//       </Link>
//     );
//   });

  return (
    <div className={classes.galleryContainer}>
      TEST
    </div>
  );
};

export default DesktopGallery;
