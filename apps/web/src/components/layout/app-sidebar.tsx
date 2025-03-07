"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, Icons } from "ui";
import { pagesConfig } from "@/config/pages";

export function AppSidebar() {
  const pathname = usePathname();
  // return null;
  return (
    <div className="flex h-full flex-col justify-between">
      <ul className="grid gap-1">
        {pagesConfig.map(({ title, href, icon, disabled }) => {
          const Icon = Icons[icon];

          const link = `/app${href}`;
          const isActive = pathname.startsWith(link);
          return (
            <li className="w-full" key={title}>
              <Link
                className={cn(
                  "hover:bg-muted/50 hover:text-foreground text-muted-foreground group flex w-full min-w-[200px] items-center rounded-md border border-transparent px-3 py-1",
                  isActive && "bg-muted/50 border-border text-foreground", // font-semibold
                  disabled && "pointer-events-none opacity-60",
                )}
                href={link}
              >
                <Icon className={cn("mr-2 h-4 w-4")} />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul>
        <li className="w-full">
          <Link
            className={cn(
              "hover:bg-muted/50 hover:text-foreground text-muted-foreground group flex w-full min-w-[200px] items-center rounded-md border border-transparent px-3 py-1",
              pathname.startsWith(`/app/settings`) &&
                "bg-muted/50 border-border text-foreground",
            )}
            href="/app/settings"
          >
            <Icons.cog className={cn("mr-2 h-4 w-4")} />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
