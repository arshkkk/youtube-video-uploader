import { Icons } from "ui";
import { cookies } from "next/headers";
import { Header } from "@/components/dashboard";
import { getSupabaseServerClient } from "@/utils/supabase";
import { YoutubeIntegrationButton } from "./_components/youtube-integration";

export default async function Channel() {
  const cookieStore = cookies();
  const {
    data: { user },
  } = await getSupabaseServerClient(cookieStore).auth.getUser();
  const channel = await getSupabaseServerClient(cookieStore)
    .from("channel")
    .select("*")
    .eq("user_id", user?.id || "");

  return (
    <div className="grid min-h-full grid-cols-1 grid-rows-[auto,1fr,auto] gap-6 md:grid-cols-2 md:gap-8">
      <pre>{JSON.stringify(channel, null, 2)}</pre>
      <Header
        description="Here you can see your Channel details"
        title="Channel Details"
      />
      <div className="border-border bg-background col-span-full w-full rounded-lg border border-dashed p-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <Icons.videos className="h-6 w-6" />
            <p className="text-foreground text-base">Add your Channel</p>
            <p className="text-muted-foreground text-center">
              You can see your Channel Details here
            </p>
          </div>
          <YoutubeIntegrationButton />
        </div>
      </div>
    </div>
  );
}
