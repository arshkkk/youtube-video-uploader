"use client";

import Link from "next/link";
import { Button, Icons } from "ui";
import { socialsConfig } from "@/config/social";
import { UserNav } from "@/components/navbar/user-nav";
import { Shell } from "../shell";

/**
 * TODO: work on a better breadcrumb navigation like Vercel
 * [workspace/project/deploymenents/deployment]
 * This will allow us to 'only' save, and not redirect the user to the other pages
 * and therefore, can after saving the monitor/page go to the next tab!
 * Probably, we will need to use useSegements() from vercel, but once done properly, it could be really nice to share
 */

export function AppHeader() {
  return (
    <header className="border-border sticky top-3 z-50 w-full md:top-6">
      <Shell className="bg-background/70 flex w-full items-center justify-between px-3 py-3 backdrop-blur-lg md:px-6 md:py-3">
        <Link
          className="font-cal text-muted-foreground hover:text-foreground text-lg"
          href="/app"
        >
          OpenStatus
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex gap-2">
            {/*<li className="w-full">*/}
            {/*  <Button variant="link">*/}
            {/*    <Link href="https://docs.openstatus.dev" target="_blank">*/}
            {/*      Docs*/}
            {/*      <ArrowRightIcon className="ml-1 h-4 w-4 flex-shrink-0" />*/}
            {/*    </Link>*/}
            {/*  </Button>*/}
            {/*</li>*/}
            {socialsConfig.map(({ title, href, icon }) => {
              const Icon = Icons[icon];
              return (
                <li className="w-full" key={title}>
                  <Button size="icon" variant="ghost">
                    <a href={href} rel="noreferrer" target="_blank">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                </li>
              );
            })}
          </ul>
          <UserNav />
        </div>
      </Shell>
    </header>
  );
}
