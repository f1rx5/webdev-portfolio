import heroImg from "../assets/hero.svg";

import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaDownload,
} from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
const Hero = () => {
  return (
    <div id="home" className="bg-emerald-100 py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider ">
            I'm Firas Sharief
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/f1rx5">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/firassharief/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.instagram.com/_f1rx5_/">
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1htX_dDdJ3a97r1MunpPGWpRBVO6Fl9DP/view"
              className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 text-white font-bold py-2 px-4 rounded "
            >
              Get resume
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
