import type { NextPage } from "next";
import { BottomNavbar } from "../components";
import Head from "next/head";
import Link from "next/link";

const BottomNav: NextPage = () => {
  return (
    <>
      <Head>
        <title>BottomNav - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 bg-gradient-to-r p-4 flex items-center justify-center">
        <BottomNavbar />
      </div>
    </>
  );
};

export default BottomNav;
