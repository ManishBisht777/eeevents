import Navbar from "@/components/navbar/Navbar";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import supabase from "../../supabase/supabase";

export default function event() {
  const { data: session } = useSession();

  const [eventInfo, setEventInfo] = useState({
    name: "",
    description: "",
    location: "",
    type: "",
    startDate: "",
    endDate: "",
    user: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    eventInfo.user = session.user;

    const { data, error } = await supabase.from("events").insert([
      {
        name: eventInfo.name,
        description: eventInfo.description,
        location: eventInfo.location,
        type: eventInfo.type,
        startDate: eventInfo.startDate,
        endDate: eventInfo.endDate,
        user: eventInfo.user,
      },
    ]);

    console.log(data, error);
  };

  const handleChange = (e) => {
    setEventInfo({ ...eventInfo, [e.target.name]: e.target.value });
  };

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
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="location"
            name="location"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="date"
            placeholder="startDate"
            name="startDate"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="date"
            placeholder="endDate"
            name="endDate"
            onChange={(e) => handleChange(e)}
          />
          <select name="type" id="">
            <option value="">both</option>
            <option value="online">online</option>
            <option value="offline">offline</option>
          </select>

          <button type="submit">create</button>
        </form>
      </main>
    </>
  );
}
