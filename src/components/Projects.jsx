import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 0.75 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-8">
          <h1 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>
          
        </div>
      </div>

      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.content}
      </p>

      <div className="flex mt-4 -mx-2">
        {props.github ? (
          <a href={props.github} target="_blank">
            <AiFillGithub
              size="2rem"
              className="text-white mr-1 hover:text-teal-200"
            ></AiFillGithub>
          </a>
        ) : (
          ""
        )}
        {props.link ? (
          <a href={props.link} target="_blank">
            {/* sliding link button */}
            <button className="flex items-center px-4 py-2 mt-2 text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-md shadow-md hover:from-teal-500 hover:to-blue-600">
              <span>Visit Site</span>
              <BsLink45Deg size="1rem" className="ml-1"></BsLink45Deg>
            </button>
          </a>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Projects
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
