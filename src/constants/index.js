import {
  nitk,
  dalroti,
  sbt,
  roastme,
  okkiy,
  housie,
  ehalo,
  filecraft,
  invest,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiVite,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiJirasoftware,
} from "react-icons/si";


import { DiCss3, DiJava,} from "react-icons/di";

export const resumeLink =
  "https://docs.google.com/document/d/1wCm2mcwC4xHGtbRSw_g4E95n7Uf92iZBIWqxaZsFKTY/edit?usp=sharing";


export const callToAction = "https://www.linkedin.com/in/Gourav-Chamaria";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "George Brown College",
    degree: "Computer Programming and analysis",
  },
];

export const skills = [
  {
    title: "Skills",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "t-7",
        icon: SiNodedotjs,
        name: "Nodejs",
      },
      {
        id: "pl-8",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "pl-9",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "t-6",
        icon: SiTypescript,
        name: "TypeScript",
      },

      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },

      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiJirasoftware,
        name: "Jira",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Ehalo",
    logo: ehalo,
    link: "https://ehalo.travel",
    positions: [
      {
        title: "Software Developer - Web",
        duration: "April 2023 - Present",
        content: [
          {
            text: "Working as a team lead and web developer at Ehalo Travel - a travel tech startup",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Daal-Roti",
    logo: dalroti,
    link: "https://daalroti.ca/waterloo/",
    positions: [
      {
        title: "Website Manager",
        duration: "September 2021 - April 2023",
        content: [
          {
            text: "Working as a website manager and web developer at Daal-Roti",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Sandhya Border Times",
    logo: sbt,
    link: "https://www.sbtnews.in/",
    positions: [
      {
        title: "Web Developer",
        duration: "March 2020 - September 2021",
        content: [
          {
            text: "Working as a web developer at Sandhya Border Times - a news company",
            link: "",
          },
        ],
      },
    ],
  },
];



export const projects = [
  {
    id: "project-1",
    title: "FileCraft.io",
    link: "https://filecraft.io",
    image: filecraft,
    content:
      "Filecraft offers an unparalleled file conversion experience by seamlessly merging speed, accuracy, and user-friendliness",
  },
  {
    id: "project-2",
    title: "Investment Calculator",
    link: "https://play.google.com/store/apps/details?id=com.zeronbit.investmentcalculator&hl=en",
    image: invest,
    content:
      "Easy to use app which help you plan your retirement or any other financial goals by performing complex calculations at a lightening speed and gives you the results with interactive graph and animations.",
  },
  {
    id: "project-3",
    title: "roastme",
    link: "https://play.google.com/store/apps/details?id=com.zeronbit.roast.me&hl=en",
    image: roastme,
    content:
      "An awesome app to insult friends or people for fun. Click their photo and show them the insulting lines on them.",
  },
  {
    id: "project-4",
    title: "SBT News",
    link: "https://www.sbtnews.in/",
    image: sbt,
    content:
      "Hindi news website of the local evening newspaper and help them grow in the market.",
  },
  {
    id: "project-5",
    title: "Okkiy",
    image: okkiy,
    content:
      " A native Android app that connects two strangers and gives the ability to voice chat without sharing any personal data.",
  },
  {
    id: "project-6",
    title: "housie",
    image: housie,
    content:
      "An Android game app for a traditional game called Tambola or Housie.",
  },
];



export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/gourav-chamaria/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/GouravChamaria",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:gouravch794@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://twitter.com/GouravChamaria",
  },
];

export const aboutMe = {
  name: "Gourav Chamaria",
  tagLine:
    "Software Developer | Web Developer | Full-Stack Developer | Frontend Developer | Backend Developer",
  intro: "Software Developer from Toronto",
};
