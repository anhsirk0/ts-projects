import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-7xl">Some React/Typescript projects.</p>
      </div>
    </>
  );
};

export default Home;
