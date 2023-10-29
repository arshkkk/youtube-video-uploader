"use client";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabaseBrowserClient } from "../../src/utils/supabase";

export default function Profile() {
  const [session, setSession] = useState<Session | null>(null);
  // const session = await supabseServerClient.auth.getSession();
  useEffect(() => {
    void (async () => {
      const sessionData = await supabaseBrowserClient.auth.getSession();
      setSession(sessionData.data.session || null);
    })();
  }, []);
  // return null;
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
