"use client";
import { useTheme } from "next-themes";
import { cn, Icons } from "ui";
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "./user-nav";

export function NavBar() {
  const { theme } = useTheme();

  return (
    <div className="bg-background py-6 px-24 flex justify-between">
      <Icons.twitter className={cn(theme === "dark" && "fill-white", "h-6")} />Z
      <div className="flex gap-4">
        <ModeToggle />
        <UserNav />
      </div>
    </div>
  );
}
