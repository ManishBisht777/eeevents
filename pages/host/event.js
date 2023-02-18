import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import { useState } from "react";

import supabase from "../../supabase/supabase";

export default function event() {
  const [name, setName] = useState("");

  return (
    <>
      <Head>
        <title>Host Event</title>
        <meta name="description" content="host events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <p>host event</p>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <button onClick={() => submitForm()}>create</button> */}
      </main>
    </>
  );
}
