import type { Icons } from "ui";

export type ValidIcon = keyof typeof Icons;

interface Social {
  title: string;
  href: string;
  icon: ValidIcon;
}

export const socialsConfig: Social[] = [
  {
    title: "Discord",
    href: "/discord",
    icon: "discord",
  },
  {
    title: "GitHub",
    href: "/github",
    icon: "gitHub",
  },
  // add cal.com
];
