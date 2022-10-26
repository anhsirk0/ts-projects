import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const links: { title: string; url: string }[] = [
    { title: "Toggle", url: "/toggle" },
    { title: "Select", url: "/select" },
    { title: "Timer", url: "/timer" },
    { title: "Countdown", url: "/countdown" },
    { title: "Hero", url: "/hero" },
  ];

  return (
    <>
      <Head>
        <title>TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen p-4 bg-gradient-to-r from-rose-400 to-pink-600 flex flex-col gap-8 items-center justify-center">
        <p className="text-xl md:text-3xl text-center text-white">
          Some React + TS components.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {links.map((link) => (
            <Link className="ring-rose-500" key={link.url} href={link.url}>
              <a className="flex items-center justify-center px-8 h-20 md:h-24 bg-white rounded-2xl shadow cursor-pointer hover:bg-opacity-95 hover:shadow-lg">
                <span className="text-3xl md:text-4xl text-center text-gray-700">
                  {link.title}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
