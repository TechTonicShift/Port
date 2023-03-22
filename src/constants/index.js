import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DSA Problem Solver",
    icon: mobile,
  },
  {
    title: "Blockchain Enthusiast",
    icon: backend,
  },
  {
    title: "Academic Research Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Academic Research Assistant",
    company_name: "JV Research Work",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 2021 - Nov 2021",
    points: [
      "Learnt how to use new research software and tools for writing different types of research Papers.",
      "Collaborating with cross-functional teams including designers, product managers, and other researchers to create high-quality papers.",
      "Learnt and develop positive working relationships with internal and external contacts.",
      "Learnt and develop knowledge and skills relating to the latest techniques and applications",
    ],
  },
  {
    title: "WebGameDuo",
    company_name: "Avishkar -MNNIT Allahabad",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022- Oct 2022",
    points: [
      "Developed an open video sharing platform during the Avishkar Hackathon, enabling expert gamers to share their gameplays and allowing viewers to like, comment, and track content, using React JS for the frontend, Sanity for the backend, and TypeScript for the implementation",
      "Implemented a login and signup feature, allowing users to access the platform as both viewers and creators.",
      "Received appreciation from senior professionals for the successful creation and implementation of the platform.",
    ],
  },

];

const testimonials = [
 
];

const projects = [
  {
    name: "WebGameDuo",
    description:
      "An open video sharing platform using React JS for the frontend, Sanity for the backend, and TypeScript for implementation. The platform enabled expert gamers to share their gameplays, while viewers could like, comment, and track content. It also included a login and signup feature for users to access the platform as both viewers and creators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TechTonicShift/WebGameDuo",
  },
  {
    name: "React Movie App (API learning project)",
    description:
      "Designed a responsive and user-friendly application that enabled users to search for movies and retrieve information about their release year, plot, and other details.Gained knowledge and proficiency in API integration by utilizing ReactJS libraries such as useState, useEffect, and axios to manage state, handle user input, and make API requests.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Hooks and States",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TechTonicShift/React-Movie-Explorer",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
