import { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Head from "next/head";
import NewsMain from "../../components/news/NewsMain";
import { server } from "../../components/config/index";

export default function NewsIdPage(props) {
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
        <NewsMain news={props.news} />
        <Footer />
      </main>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`${server}/api/news`);
  const data = await res.json();
  const news = data.news.find(
    (news) => news.ID.toString() === params.newsid.toString()
  );

  return {
    props: {
      news,
    },
  };
}
