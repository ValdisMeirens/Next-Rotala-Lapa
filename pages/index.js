import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/news/Main";
import { server } from "../components/config/index";

export default function Home(props) {
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
        <Main news={props} />

        <Footer />
      </main>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/news`);
  console.log(res);

  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
