import type { NextPage } from "next";
import Head from "next/head";
import { Timer as TimerComponent, Card } from "../components";

const Timer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timer - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen p-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center">
        <Card title="Timer">
          <TimerComponent />
        </Card>
      </div>
    </>
  );
};

export default Timer;
