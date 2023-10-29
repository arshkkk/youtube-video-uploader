import { Header } from "@/components/dashboard";

export default function Videos() {
  return (
    <div className="grid min-h-full grid-cols-1 grid-rows-[auto,1fr,auto] gap-6 md:grid-cols-2 md:gap-8">
      {/*<pre>{JSON.stringify(channel, null, 2)}</pre>*/}
      <Header
        description="Here you can see your videos upload via Platform"
        title="Videos"
      />
    </div>
  );
}
