import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { cookies } from "next/headers";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || "";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

export const getSupabaseServerClient = (
  cookieStore: ReturnType<typeof cookies>,
) => {
  return createServerClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.delete({ name, ...options });
        } catch (error) {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};

export const getSupabaseSecretClient = () => {
  return createClient<Database>(SUPABASE_URL, SUPABASE_SECRET_KEY);
};

export const supabaseBrowserClient = createBrowserClient<Database>(
  SUPABASE_URL,
  SUPABASE_KEY,
);
