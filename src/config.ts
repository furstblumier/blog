import type { Socials,Quotes } from "./types";

export const SITE_URL = "https://blog.furst.blue"; // Replace with your site url
export const SITE_TITLE = "Fürst's Blog :3";
export const SITE_DESCRIPTION = "be gay, do crimes";
export const SITE_LOGO = "/logo.gif";

export const SOCIALS: Socials = [
  {
    name: "Github",
    href: "https://github.com/furstblumier",
    linkTitle: `My Github`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/aryanjha256/verve",
  //   linkTitle: `${SITE_TITLE} on Facebook`,
  //   active: false,
  // },
  // {
  //   name: "Instagram",
  //   href: "https://github.com/aryanjha256/verve",
  //   linkTitle: `${SITE_TITLE} on Instagram`,
  //   active: false,
  // },
  {
    name: "Twitter",
    href: "https://twitter.com/furstblumier",
    linkTitle: `My Twitter`,
    active: true,
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://github.com/aryanjha256/verve",
  //   linkTitle: `${SITE_TITLE} on LinkedIn`,
  //   active: false,
  // },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE_TITLE}`,
    active: false,
  },
];

export const QUOTES: Quotes = [
  "OwO? What's this?",
  "*notices your error log*",
  "Bwark bwark bwark (\\'ω'/)",
  "I made the fatal error of working on a part of it,\n so now I own the whole thing.",
]