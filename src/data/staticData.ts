import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const languages = ["English", "Filipino", "Norwegian (b1)"] as const;

export const techStack = [
  {
    skill: "HTML",
    icon: React.createElement(SiHtml5),
  },
  {
    skill: "CSS",
    icon: React.createElement(SiCss3),
  },
  {
    skill: "Javascript",
    icon: React.createElement(SiJavascript),
  },
  {
    skill: "Bootstrap",
    icon: React.createElement(SiBootstrap),
  },
  {
    skill: "ReactJS",
    icon: React.createElement(SiReact),
  },
  {
    skill: "Vite",
    icon: React.createElement(SiVite),
  },
  {
    skill: "Tailwind",
    icon: React.createElement(SiTailwindcss),
  },
  {
    skill: "Typescript",
    icon: React.createElement(SiTypescript),
  },
  {
    skill: "Git",
    icon: React.createElement(SiGit),
  },
  {
    skill: "Redux",
    icon: React.createElement(SiRedux),
  },
] as const;

export const education = [
  {
    typeOfEducation: "Masters's degree: Universal Design of ICT",
    date: "August 2024 - Present",
    place: "OsloMet",
    url: "https://www.oslomet.no/",
  },
  {
    typeOfEducation: "Bachelor's degree: Information Technology",
    date: "August 2021 - June 2024",
    place: "OsloMet",
    url: "https://www.oslomet.no/",
  },

  {
    typeOfEducation: "Senior Highschool: Adult Education",
    date: "August 2019 - June 2020",
    place: "Stabekk Videregående",
    url: "https://afk.no/stabekk-vgs/",
  },
  {
    typeOfEducation: "Senior Highschool: STEM",
    date: "June 2016 - May 2018",
    place: "St Paul College",
    url: "https://spcbsite.orangeapps.ph/",
  },
] as const;

export const certificates = [
  {
    name: "Responsive Web Design",
    date: "September 2023",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/responsive-web-design",
  },
  {
    name: "Legacy JavaScript ",
    date: "August 2024",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/javascript-algorithms-and-data-structures",
  },
  {
    name: "Legacy JavaScript (Beta)",
    date: "August 2024",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/javascript-algorithms-and-data-structures-v8",
  },
] as const;
