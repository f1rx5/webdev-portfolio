import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import backroads from './assets/screenshot/backroads.png'
import cart from "./assets/screenshot/cart.png";
import colorgenerator from "./assets/screenshot/colorgenerator.png";
import comfy2 from "./assets/screenshot/comfy2.png";
import comfysloth from "./assets/screenshot/comfysloth.png";
import contentful from "./assets/screenshot/contentful.png";
import gihubsearch from "./assets/screenshot/githubsearch.png";
import jobster from "./assets/screenshot/jobster.png";
import menu from "./assets/screenshot/menu.png";
import mixmaster from "./assets/screenshot/mixmaster.png";
import unsplash from "./assets/screenshot/unsplash.png";



export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: comfysloth,
    url: "https://firas-ecommerce-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "Comfy Store - An e-commerce application",
    text: "an e-commerce web application where users can buy home decor products ",
  },
  {
    id: nanoid(),
    img: gihubsearch,
    url: "https://firas-githubsearch-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "GitHub user search ",
    text: "in this application a person can search github user and their analytics",
  },
  {
    id: nanoid(),
    img: jobster,
    url: "https://firas-jobster-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "Jobster - a employer platform application",
    text: "in this application a user can post, edit, delete, update jobs ",
  },
  {
    id: nanoid(),
    img: comfy2,
    url: "https://firas-comfystore-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "Comfy store - v2",
    text: "an e-commerce application ",
  },
  {
    id: nanoid(),
    img: mixmaster,
    url: "https://firas-mixmaster-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "Mixmaster",
    text: "a cocktails menu app ",
  },
  {
    id: nanoid(),
    img: contentful,
    url: "https://firas-contentful-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "contentful cms",
    text: "",
  },
  {
    id: nanoid(),
    img: unsplash,
    url: "https://firas-unsplash-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "unsplash clone",
    text: "in this application a user can a images and it will displayed in the UI ",
  },
  {
    id: nanoid(),
    img: cart,
    url: "https://firas-cart-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "cart",
    text: "a simple cart page ",
  },
  {
    id: nanoid(),
    img: colorgenerator,
    url: "https://firas-colorgenerator-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "color generator",
    text: "a color generating app where a user can search color code and displays 20 shades of input color with hex code",
  },
  {
    id: nanoid(),
    img: menu,
    url: "https://firas-foodmenu-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "food menu",
    text: "a food menu application for a restaurant",
  },
  {
    id: nanoid(),
    img: backroads,
    url: "https://firas-backroads-react.netlify.app/",
    github: "https://github.com/f1rx5",
    title: "backroads",
    text: "a tourism package application",
  },
];
