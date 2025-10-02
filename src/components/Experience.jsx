"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import udemy from "../assets/udemy.jpg";
import freelancer from "../assets/freelancer.jpg";
import wordpress from "../assets/wordpress.jpg";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={udemy}
              title="UDEMY"
              subtitle="Angela Yu's Student - Web Development"
              para="- Learned Full Stack Web Developement and made tons of projects to build skills in logic building and problem-solving."
            />
            <Exp_prop
              img={freelancer}
              title="MERN Stack Developer"
              subtitle="Collaborative Freelance  Projects"
              para="- Worked with clients to create and maintain websites that align with their brand identity and business goals."
            />
            <Exp_prop
              img={wordpress}
              title="WordPress Developer"
              subtitle="Indivisual WordPress Projects"
              para="- Developed and customized WordPress themes and plugins to enhance website functionality and user experience."
            />
           
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
