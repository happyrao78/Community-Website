import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          365dayscoding Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-teal-500 font-semibold hover:text-teal-600"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
