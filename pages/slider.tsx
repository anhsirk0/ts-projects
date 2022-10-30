import type { NextPage } from "next";
import { SliderLoginSignup } from "../components";
import Head from "next/head";

const Slider: NextPage = () => {
  return (
    <>
      <Head>
        <title>Slider - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen w-screen bg-gradient-to-r from-sky-300 to-blue-500 p-4 flex flex-col items-center justify-center">
        <SliderLoginSignup />
      </div>
    </>
  );
};

export default Slider;
