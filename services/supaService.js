import supabase from "../supabase/supabase";

export const getEvents = async () => {
  let { data: eventsData, error } = await supabase.from("events").select("*");

  console.log(eventsData);
  return [eventsData, error];
};
