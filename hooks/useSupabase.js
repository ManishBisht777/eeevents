import React, { useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { useSession } from "next-auth/react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export default function useSupabase() {
  const { data: session } = useSession();
  console.log(session);

  const { supabaseAccessToken } = session;

  const supabase = createClient(supabaseUrl, supabaseKey, {
    // global: {
    //   headers: {
    //     Authorization: `Bearer ${supabaseAccessToken}`,
    //   },
    // },
  });

  return supabase;
}
