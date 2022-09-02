import Head from "next/head";

import Home from "../components/home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mitramas Infosys Global Dashboard</title>
        <meta name="description" content="Mitramas Infosys Global Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
