import { Fragment } from "react";

import Head from "next/head";
import Footer from "../../../components/footer/Footer";
import DesktopGallery from "../../../components/gallery/desktop/DesktopGallery";
import HeaderGallery from "../../../components/header/HeaderGallery";
import { server } from "../../../components/config/index";
import MobileGallery from "../../../components/gallery/mobile/MobileGallery";

export default function GalleryIdPage(props) {
  const description = "TDA Rotaļa ir deju kolektīvs ar vēsturi";
  console.log(props);

  return (
    <Fragment>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Head>

      <HeaderGallery />
      <MobileGallery items={props.gallery} />

      <DesktopGallery items={props.gallery} />
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`${server}/api/gallery`);
  const data = await res.json();
  const gallery = data.filter(
    (galleryItem) =>
      galleryItem.PARENT_ID.toString() == params.galleryid.toString()
  );

  return {
    props: {
      gallery,
    },
  };
}
