import type { NextPage } from "next";
import { Card, ToggleButton } from "../components";
import Head from "next/head";

const Toggle: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toggle - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-sky-500 to-blue-600 p-4 flex items-center justify-center">
        <Card title="Toggle">
          <div className="flex flex-col gap-4 lg:gap-8 w-56 items-center m-4 lg:m-8">
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
        </Card>
      </div>
    </>
  );
};

export default Toggle;
