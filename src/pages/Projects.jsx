import React from "react";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Skill A", "Skill B"],
    github: "#",
    demo: "#",
    info: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Skill C", "Skill A"],
    github: "#",
    demo: "#",
    info: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Skill B", "Skill D"],
    github: "#",
    demo: "#",
    info: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          365dayscoding Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-teal-100 text-teal-600 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.info}
                  className="inline-block text-teal-500 font-semibold hover:text-teal-600"
                >
                  Learn More &rarr;
                </a>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={project.info}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaInfoCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
