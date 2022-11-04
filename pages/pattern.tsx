import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { RandomShape, QuarterCircle } from "../components/Shapes";
import { getRandomInt } from "../helpers";

const Pattern: NextPage = () => {
  const bgChoices = ["bg-blue-200", "bg-transparent"];
  const colorChoices = ["bg-blue-200", "bg-blue-600", "bg-blue-600"];

  return (
    <>
      <Head>
        <title>Pattern - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen p-4 bg-white flex justify-center items-center">
        <div className="grid grid-cols-8 grid-rows-8 w-96 h-96 lg:w-[45rem] lg:h-[45rem] 2xl:w-[55rem] 2xl:h-[55rem]">
          {Array.from(Array(64).keys()).map((idx) => (
            <RandomShape
              color={colorChoices[getRandomInt(colorChoices.length)]}
              classes={bgChoices[getRandomInt(bgChoices.length)]}
              key={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pattern;
