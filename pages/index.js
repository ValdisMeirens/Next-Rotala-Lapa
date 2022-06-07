import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/news/Main";

export default function Home(props) {
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

      <main>
        <Header />
        <Main news={props.data} />
        <Footer />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.host}/api/news`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
