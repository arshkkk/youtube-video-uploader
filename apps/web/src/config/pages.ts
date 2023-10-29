import type { ValidIcon } from "@/config/social";

interface Page {
  title: string;
  description: string;
  href: string;
  icon: ValidIcon;
  disabled?: boolean;
}

// TODO: add to <Header id="app" /> to easily access title and description - ideally allow both
export const pagesConfig: Page[] = [
  {
    title: "Channel",
    description: "Channel Information",
    href: "/channel",
    icon: "layout-dashboard",
  },
  {
    title: "Videos",
    description: "Check all the responses in one place.",
    href: "/monitors",
    icon: "videos",
  },
  {
    title: "Members",
    description: "Where you can see all the pages.",
    href: "/status-pages",
    icon: "users",
  },
  {
    title: "Notifications",
    description: "Where you can see all the notifications.",
    href: "/notifications",
    icon: "bell",
  },
  // {
  //   title: "Integrations",
  //   description: "Where you can see all the integrations.",
  //   href: "/integrations",
  //   icon: "plug",
  // },
  // ...
];
