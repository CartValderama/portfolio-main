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
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import { FaFolderClosed, FaMagnifyingGlass } from "react-icons/fa6";
import { GrBraille } from "react-icons/gr";
import {
  SiJavascript,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import {
  svgBootstrap,
  svgCSS,
  svgFigma,
  svgGit,
  svgGitBash,
  svgGithub,
  svgHTML,
  svgJavaScript,
  svgReact,
  svgRedux,
  svgShadcn,
  svgTailwind,
  svgTypescript,
  svgVisualStudio,
  svgVite,
  svgVSCode,
} from "./svgLists";

export const techStack = [
  {
    skill: "HTML",
    svg: svgHTML,
    icon: React.createElement(FaHtml5),
  },
  {
    skill: "CSS",
    svg: svgCSS,
    icon: React.createElement(FaCss3),
  },
  {
    skill: "JavaScript",
    svg: svgJavaScript,
    icon: React.createElement(SiJavascript),
  },
  {
    skill: "ReactJS",
    svg: svgReact,
    icon: React.createElement(FaReact),
  },
  {
    skill: "Vite",
    svg: svgVite,
    icon: React.createElement(SiVite),
  },
  {
    skill: "TypeScript",
    svg: svgTypescript,
    icon: React.createElement(SiTypescript),
  },
  {
    skill: "Git",
    svg: svgGit,
    icon: React.createElement(FaGitAlt),
  },
  {
    skill: "Redux",
    svg: svgRedux,
    icon: React.createElement(SiRedux),
  },
  {
    skill: "Bootstrap",
    svg: svgBootstrap,
    icon: React.createElement(FaBootstrap),
  },
  {
    skill: "Tailwind",
    svg: svgTailwind,
    icon: React.createElement(SiTailwindcss),
  },
  {
    skill: "Shadcn UI",
    svg: svgShadcn,
    icon: React.createElement(SiShadcnui),
  },
] as const;

export const tools = [
  {
    tool: "VS Code",
    svg: svgVSCode,
    icon: React.createElement(SiVisualstudiocode),
  },
  {
    tool: "Figma",
    svg: svgFigma,
    icon: React.createElement(FaFigma),
  },

  {
    tool: "GitHub",
    svg: svgGithub,
    icon: React.createElement(FaGithub),
  },
  {
    tool: "Git Bash",
    svg: svgGitBash,
    icon: React.createElement(FaGitAlt),
  },
  {
    tool: "Visual Studio",
    svg: svgVisualStudio,
    icon: React.createElement(SiVisualstudio),
  },
] as const;

export const aboutCart = [
  {
    title: "Frontend Dev",
    icon: React.createElement(FaLaptopCode),
  },
  {
    title: "Minimalist Design",
    icon: React.createElement(FaPaintBrush),
  },
  {
    title: "React User",
    icon: React.createElement(FaReact),
  },
  {
    title: "Student",
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
    place: "Nander Engineering Group",
    icon: React.createElement(FaBriefcase),
  },
] as const;

export const languages = [
  "English (US)",
  "Filipino (native)",
  "Norwegian (b1)",
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
    desc: "Familiar with design principles such as atomic design and Gestalt laws. Emphasizes the creation of interfaces which adheres to one of the principles of universal design, making applications more accessible to a diverse audience.",
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
    desc: "Successfully completed an adult education program in Norway to attain the qualifications necessary for pursuing higher education.",
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
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaFolderClosed),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(FaBriefcase),
  },
  {
    name: "Education",
    hash: "#education",
    icon: React.createElement(FaBook),
  },
] as const;

export const companyList = [
  {
    title: "Forte Digital",
    imgUrl:
      "https://th.bing.com/th/id/OLC.XdXwPSRp7IwMPA480x360?&rs=1&pid=ImgDetMain",
    desc: "Forte Digital is an international consulting company that serves as a long-term digital partner, helping businesses grow through innovative solutions.",
  },
  {
    title: "Nander",
    imgUrl: "https://i.imgur.com/EentFrs.png",
    desc: "Nander Engineering Group is an engineering consulting company that specializes in modern design strategies for sustainable infrastructure.",
  },
];
