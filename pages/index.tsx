import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const links: { title: string; url: string }[] = [
    { title: "Toggle", url: "/toggle" },
    { title: "Select", url: "/select" },
    { title: "Timer", url: "/timer" },
  ];

  return (
    <>
      <Head>
        <title>TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
        <p className="text-3xl">Some React/Typescript projects.</p>
        <ul className="list-disc space-y-4">
          {links.map((link) => (
            <li key={link.url} className="text-4xl">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
