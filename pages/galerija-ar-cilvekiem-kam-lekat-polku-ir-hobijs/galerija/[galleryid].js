import { Fragment } from "react";

import Head from "next/head";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import DesktopGallery from "../../../components/gallery/desktop/DesktopGallery";

export default function GalleryIdPage(props) {
  const description = "TDA Rotaļa ir deju kolektīvs ar vēsturi";

  return (
    <Fragment>
      <Head>
        <title>TDA Rotaļa</title>
        <meta property="og:title" content="TDA Rotaļa" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Head> 

      <Header />
        <DesktopGallery />
      <Footer />
    </Fragment>
  );
}


export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`${process.env.host}/api/gallery`);
  const data = await res.json(); 

  const gallery = data.find(
    (galleryItem) => galleryItem.ID.toString() == params.galleryid.toString() 
  );

  return {
    props: {
      gallery,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.host}/api/gallery`);
  // console.log(res);
  const galleryIds = await res.json();

  const paths = galleryIds.map((gallery) => ({
    params: { galleryid: gallery.ID.toString() },
  }));

  return { paths, fallback: false };
}
