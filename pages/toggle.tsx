import type { NextPage } from "next";
import { ToggleButton } from "../components";
import Head from "next/head";

const Toggle: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toggle - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex flex-col gap-8 md:gap-16 items-center justify-center">
        <p className="text-7xl">Toggle compound component</p>
        <ToggleButton onToggle={(on: boolean) => console.log(on)}>
          <ToggleButton.Switch />
          <ToggleButton.On>
            <p className="text-3xl text-emerald-500">Toggle is on</p>
          </ToggleButton.On>
          <ToggleButton.Off>
            <p className="text-3xl text-gray-500">Toggle is off</p>
          </ToggleButton.Off>
        </ToggleButton>
      </div>
    </>
  );
};

export default Toggle;
