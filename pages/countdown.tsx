import type { NextPage } from "next";
import Head from "next/head";
import { Card, Countdown as CountdownComponent } from "../components";

const Countdown: NextPage = () => {
  return (
    <>
      <Head>
        <title>Countdown - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen p-4 bg-gradient-to-r from-green-200 via-green-400 to-green-500 flex items-center justify-center">
        <Card title="Countdown">
          <CountdownComponent />
        </Card>
      </div>
    </>
  );
};

export default Countdown;
