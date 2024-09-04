import React from "react";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Lead Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Team Member 2",
    role: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Team Member 3",
    role: "Project Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              At 365dayscoding, our mission is to empower developers of all
              levels by providing comprehensive resources, community support,
              and real-world projects to enhance their coding skills. We believe
              in continuous learning and the power of collaboration to drive
              innovation and excellence in the tech industry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700">
              365dayscoding started as a small group of 
			        passionate developers who wanted to create a platform where
              learners and professionals alike could share their knowledge and
              grow together. Over the years, we’ve grown into a thriving
              community, offering a wide range of tutorials, coding challenges,
              and collaborative projects to help members stay ahead in their
              careers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700">
              We’re always looking for new contributors and collaborators!
              Whether you want to share your expertise through tutorials, lead a
              coding challenge, or contribute to our projects, there are plenty
              of opportunities to get involved. Join our community today and
              start making a difference.
            </p>
          </section>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
