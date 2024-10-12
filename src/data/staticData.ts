import React from "react";
import {
  FaBook,
  FaBriefcase,
  FaHome,
  FaPalette,
  FaTools,
  FaUserGraduate,
  FaLaptopCode,
  FaReact,
  FaPaintBrush,
  FaGraduationCap,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrBraille } from "react-icons/gr";
import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMaterialdesign,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";

export const aboutCart = [
  {
    name: "Frontend Dev",
    icon: React.createElement(FaLaptopCode),
  },
  {
    name: "Minimalist Design",
    icon: React.createElement(FaPaintBrush),
  },
  {
    name: "React User",
    icon: React.createElement(FaReact),
  },
  {
    name: "Student",
    icon: React.createElement(FaGraduationCap),
  },
];

export const experience = [
  {
    title: "Project Collaboration",
    date: "January 2024 - June 2024",
    desc: "Developed a proof-of-concept flashcard app for Forte Digital that integrated AI to enhance user feedback and automate flashcard creation, leading to more effective and engaging study sessions.",
    place: "Forte Digital",
    icon: React.createElement(FaLaptopCode),
  },
  {
    title: "Work Immersion",
    date: "January 2018 - February 2018",
    desc: "Completed a one-month internship in a structural engineering company during senior high school, gaining practical experience in engineering concepts and project development.",
    place: "Nander",
    icon: React.createElement(FaBriefcase),
  },
] as const;

export const languages = [
  "English",
  "Filipino (native)",
  "Norwegian (b1)",
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
    skill: "JavaScript",
    icon: React.createElement(SiJavascript),
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
    skill: "TypeScript",
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
  {
    skill: "Bootstrap",
    icon: React.createElement(SiBootstrap),
  },
  {
    skill: "Tailwind",
    icon: React.createElement(SiTailwindcss),
  },
  {
    skill: "Shadcn UI",
    icon: React.createElement(SiShadcnui),
  },
  {
    skill: "Material UI",
    icon: React.createElement(SiMaterialdesign),
  },
] as const;

export const tools = [
  {
    tool: "Figma",
    icon: React.createElement(SiFigma),
  },

  {
    tool: "VS Code",
    icon: React.createElement(SiVisualstudiocode),
  },
  {
    tool: "GitHub",
    icon: React.createElement(SiGithub),
  },
  {
    tool: "Git Bash",
    icon: React.createElement(SiGit),
  },
  {
    tool: "Visual Studio",
    icon: React.createElement(SiVisualstudio),
  },
] as const;

export const otherSkills = [
  {
    title: "Web Accessibility: Ensuring Inclusive Web Experiences",
    desc: "Able to evaluate websites for accessibility using WCAG guidelines, combining automated tools with manual assessments. Familiar with applying ARIA attributes to improve usability for individuals with disabilities, promoting inclusive access to digital content.",
    icon: React.createElement(GrBraille),
  },
  {
    title: "User Testing: Experience in Conducting Structured Tests",
    desc: "Knowledgable in designing and conducting user testing, drawing on hands-on experience from Human-Computer Interaction course. This includes creating structured test plans, recruiting participants, and observing user interactions with prototypes.",
    icon: React.createElement(FaMagnifyingGlass),
  },
  {
    title: "Web Designing: Crafting Simple and Intuitive Interfaces",
    desc: "Familiar with design principles such as atomic design and Gestalt laws. Emphasizes the creation of simple and intuitive interfaces which adheres to one of the principles of universal design, making applications more accessible to a diverse audience.",
    icon: React.createElement(FaPalette),
  },
] as const;

export const education = [
  {
    title: "Master's Degree: Universal Design of ICT",
    date: "August 2024 - Present",
    desc: "Currently engaged in a program focused on inclusive design and accessibility, covering topics like web accessibility and user experience to create digital environments for all users.",
    place: "OsloMet",
    icon: React.createElement(FaBook),
  },
  {
    title: "Bachelor's Degree: Information Technology",
    date: "August 2021 - June 2024",
    desc: "Completed coursework in software development, covering frontend and backend technologies, databases, and cybersecurity, with hands-on experience in frameworks like React. This experience sparked a strong interest in frontend development.",
    place: "OsloMet",
    icon: React.createElement(FaUserGraduate),
  },
  {
    title: "Videregående: Voksneopplæring",
    date: "August 2019 - June 2020",
    desc: "Completed adult education with a focus on essential academic qualifications, preparing for higher education.",
    place: "Stabekk Videregående",
    icon: React.createElement(FaUserGraduate),
  },
  {
    title: "Senior High School (K-12): STEM strand",
    date: "June 2016 - May 2018",
    desc: "Specialized in Science, Technology, Engineering, and Mathematics (STEM), preparing for studies in technology and engineering fields.",
    place: "St Paul College",
    icon: React.createElement(FaUserGraduate),
  },
] as const;

export const certificates = [
  {
    title: "Responsive Web Design",
    date: "September 2023",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/responsive-web-design",
  },
  {
    title: "Legacy JavaScript ",
    date: "August 2024",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/javascript-algorithms-and-data-structures",
  },
  {
    title: "Legacy JavaScript (Beta)",
    date: "August 2024",
    from: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/cartman11/javascript-algorithms-and-data-structures-v8",
  },
] as const;

export const links = [
  {
    name: "Introduction",
    hash: "#intro",
    icon: React.createElement(FaHome),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(FaTools),
  },
  {
    name: "Background",
    hash: "#background",
    icon: React.createElement(FaBriefcase),
  },
] as const;
