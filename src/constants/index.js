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
  lenovo,
  cgi,
  accenture,
  bexia,
  canadianshirtcompany,
  lachickpick,
  indianshirtcompany,
  intuit,
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

import { DiCss3, DiJava } from "react-icons/di";

export const resumeLink =
  "https://docs.google.com/document/d/1jlaoRhUPC2Wvp4M-nWZ4JMoCg2HaLm7C4-7kGyvaoec/edit?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/Gourav-Chamaria";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
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
    organisation: "Intuit",
    logo: intuit,
    link: "https://www.intuit.com/ca/",
    positions: [
      {
        title: "Software Developer - Web",
        duration: "November 2023 - Present",
        content: [
          {
            text: "Currently Working as Software Developer at Intuit (Turbo Tax) in Toronto for more than 2 years",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "CGI",
    logo: cgi,
    link: "https://www.cgi.com/en",
    positions: [
      {
        title: "Web Developer",
        duration: "May 2022 - July 2023",
        content: [
          {
            text: "Worked as web developer at CGI, maintaining the website and adding new features to it.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Lenovo",
    logo: lenovo,
    link: "https://www.lenovo.com/ca/en/",
    positions: [
      {
        title: "Jr. Web Developer",
        duration: "August 2020 - September 2021",
        content: [
          {
            text: "Worked as a Jr Web developer at Lenovo India, learning the new technologies and implementing them in the project.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Accenture",
    logo: accenture,
    link: "https://www.accenture.com/ca-en",
    positions: [
      {
        title: "Jr. Web Developer",
        duration: "April 2019 - May 2020",
        content: [
          {
            text: "Worked as a Jr Web developer at Accenture India, working with a team of 5 developers to develop a web application for a client.",
            link: "",
          },
        ],
      },
    ],
  }
];

export const projects = [
  // {
  //   id: "project-1",
  //   title: "BEXIA",
  //   link: "https://bexia.ca/",
  //   image: bexia,
  //   content:
  //     "Women clothing clothing webiste.",
  // },
  // {
  //   id: "project-2",
  //   title: "Canadian Shirt Company",
  //   link: "https://canadianshirtcompany.com/",
  //   image: canadianshirtcompany,
  //   content:
  //     "Canadian Shirt Company, your go-to shopping website for premium shirts in Canada",
  // },
  // {
  //   id: "project-3",
  //   title: "La Chic Pick",
  //   link: "https://lachicpick.in/",
  //   image: lachickpick,
  //   content:
  //     "Premium shopping site to shop around the world",
  // },
  // {
  //   id: "project-4",
  //   title: "Indian Shirt Company",
  //   link: "https://indianshirtcompany.com/",
  //   image: indianshirtcompany,
  //   content:
  //     "Shopping site for premium shirts in India",
  // },
  {
    id: "project-5",
    title: "Ehalo",
    link: "https://ehalo.travel/",
    image: ehalo,
    content:
      "A travel planner for any occasion. Create trips, share with your friends & collaborate.",
  },
  {
    id: "project-6",
    title: "SBT News",
    link: "https://www.sbtnews.in/",
    image: sbt,
    content:
      "Hindi news website of the local evening newspaper and help them grow in the market.",
  },
  {
    id: "project-7",
    title: "FileCraft.io",
    image: filecraft,
    content:
      "Filecraft offers an unparalleled file conversion experience by seamlessly merging speed, accuracy, and user-friendliness",
  },
  {
    id: "project-8",
    title: "roastme",
    image: roastme,
    content:
      "An awesome app to insult friends or people for fun. Click their photo and show them the insulting lines on them.",
  },
  {
    id: "project-9",
    title: "Okkiy",
    image: okkiy,
    content:
      " A native Android app that connects two strangers and gives the ability to voice chat without sharing any personal data.",
  },
  {
    id: "project-10",
    title: "Investment Calculator",
    image: invest,
    content:
      "Easy to use app which help you plan your retirement or any other financial goals by performing complex calculations at a lightening speed and gives you the results with interactive graph and animations.",
  },
  {
    id: "project-11",
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
