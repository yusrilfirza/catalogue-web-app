import Head from "next/head";
import Header from "@/shared/components/layout/header";
import "@/styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <section id="header">
        <Head>
          <title>Catalogue Web Apps | Yusril Firza</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Header />
      </section>
      <Component {...pageProps} />
      <section id="footer">
        © by Yusril Firza
      </section>
    </>
  );
}
