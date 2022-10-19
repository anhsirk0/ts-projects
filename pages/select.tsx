import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Select as SelectField } from "../components";

const Select: NextPage = () => {
  const options = [
    { label: "Homer Simpson", value: "homer" },
    { label: "Bart Simpson", value: "bart" },
    { label: "Lisa Simpson", value: "lisa" },
    { label: "Marge Simpson", value: "marge" },
    { label: "Maggie Simpson", value: "maggie" },
  ];
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <>
      <Head>
        <title>Select - TS Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen">
        <p className="text-7xl text-center py-24">Select component.</p>
        <SelectField
          value={value}
          options={options}
          onChange={(v: { label: string; value: string }) => {
            setValue(v);
          }}
        />
      </div>
    </>
  );
};

export default Select;
