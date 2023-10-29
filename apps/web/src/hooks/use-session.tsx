import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabaseBrowserClient } from "../utils/supabase";

export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    void (async () => {
      const _session = await supabaseBrowserClient.auth.getSession();
      if (_session.data.session) setSession(_session.data.session);
    })();
  }, []);
  return { session };
};
