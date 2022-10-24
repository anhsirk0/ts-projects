import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Hero: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hero - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
        className="min-h-screen relative flex items-center justify-center bg-cover"
        style={{
          backgroundImage: `url("https://placeimg.com/1200/800/arch")`,
        }}
      >
        <div className="inset-0 absolute bg-gray-800 bg-opacity-60"></div>
        <div className="text-center text-white z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hero component</h1>
            <p className="mb-5 text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/">
              <button className="px-6 py-3 bg-sky-400 hover:bg-sky-500 rounded-lg uppercase">
                Go home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
