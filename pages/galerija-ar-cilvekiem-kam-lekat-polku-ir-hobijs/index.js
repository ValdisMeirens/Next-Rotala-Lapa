import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import DesktopMainGallery from "../../components/gallery/desktop/DesktopMainGallery";
import MobileMainGallery from "../../components/gallery/mobile/MobileMainGallery";
import Header from "../../components/header/Header";
import { server } from "../../components/config/index";

export default function GalleryMain(props) {
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

      <main>
        <Header />
        <MobileMainGallery gallery={props} />

        <DesktopMainGallery gallery={props} />
        <Footer />
      </main>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/gallery_headers`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
