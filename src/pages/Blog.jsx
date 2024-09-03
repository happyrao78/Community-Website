import React from "react";

const posts = [
  {
    title: "Blog Post 1 Title",
    date: "September 3, 2024",
    time: "10:00 AM",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "#",
  },
  {
    title: "Blog Post 2 Title",
    date: "September 2, 2024",
    time: "2:30 PM",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "#",
  },
  {
    title: "Blog Post 3 Title",
    date: "September 1, 2024",
    time: "11:15 AM",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          365dayscoding Blogs
        </h1>
        
        {/* Blogs Section Introduction */}
        <section className="mb-12">
          <p className="text-gray-600">
            Welcome to our blog section! Here, you'll find a collection of articles, guides, and insights on various topics related to web development, programming, and technology. Whether you're a beginner or an experienced developer, we hope you find something valuable and engaging. Happy reading!
          </p>
        </section>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 mb-4 text-sm">
                {post.date} • {post.time}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-teal-500 font-semibold hover:text-teal-600"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
