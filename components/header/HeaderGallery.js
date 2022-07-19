import { Fragment } from "react";
import DesktopGalleryHeader from "./desktop/DesktopGalleryHeader";
import MobileNavigation from "./mobile/MobileNavigation";

const HeaderGallery = () => {
  return (
    <Fragment>
      <MobileNavigation />
      <DesktopGalleryHeader />
    </Fragment>
  );
};

export default HeaderGallery;
