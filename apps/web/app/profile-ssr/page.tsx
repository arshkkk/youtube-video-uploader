import { cookies } from "next/headers";
import { getSupabaseServerClient } from "../../src/utils/supabase";

export default async function ProfileSSR() {
  const cookieStore = cookies();
  const supabase = getSupabaseServerClient(cookieStore);

  const { data: profiles } = await supabase.from("profiles").select("id");

  const session = await supabase.auth.getUser();

  return (
    <div>
      <pre>{JSON.stringify({ profiles, session }, null, 2)}</pre>;
    </div>
  );
}
