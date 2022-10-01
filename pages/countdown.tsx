import type { NextPage } from "next";
import Head from "next/head";
import { Countdown as CountdownComponent } from "../components";

const Countdown: NextPage = () => {
  return (
    <>
      <Head>
        <title>Countdown - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <p className="text-7xl text-center py-24">Countdown</p>
        <CountdownComponent />
      </div>
    </>
  );
};

export default Countdown;
