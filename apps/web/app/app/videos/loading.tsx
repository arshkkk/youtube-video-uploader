import { Skeleton } from "ui";
import { Header } from "@/components/dashboard";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";

export default function VideosLoading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      <div className="col-span-full flex w-full justify-between">
        <Header.Skeleton>
          <Skeleton className="h-9 w-20" />
        </Header.Skeleton>
      </div>
      <div className="col-span-full w-full">
        <DataTableSkeleton />
      </div>
    </div>
  );
}
