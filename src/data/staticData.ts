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

export const languages = [
  "English",
  "Norwegian (b1)",
  "Filipino (native)",
] as const;

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
    skill: "TailwindCSS",
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
    typeOfEducation: "Senior Highschool",
    date: "June 206 - May 2018",
    place: "St Paul College of Bocaue",
    url: "https://spcbsite.orangeapps.ph/",
  },
  {
    typeOfEducation: "Videregående",
    date: "August 2019 - June 2021",
    place: "Stabekk Videregående",
    url: "https://afk.no/stabekk-vgs/",
  },
  {
    typeOfEducation: "Bachelor's degree, Information Technology",
    date: "August 2021 - June 2024",
    place: "OsloMet - Oslo Metropolitan University",
    url: "https://www.oslomet.no/",
  },
  {
    typeOfEducation: "Masters's degree, Universal Design of ICT",
    date: "August 2024 - Present",
    place: "OsloMet - Oslo Metropolitan University",
    url: "https://www.oslomet.no/",
  },
] as const;
