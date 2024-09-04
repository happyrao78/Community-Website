import React, { useState } from "react";

const posts = [
  {
    title: "Blog Post 1 Title",
    date: "September 3, 2024",
    time: "10:00 AM",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "/NotFound",
  },
  {
    title: "Blog Post 2 Title",
    date: "September 2, 2024",
    time: "2:30 PM",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "/NotFound",
  },
  {
    title: "Blog Post 3 Title",
    date: "September 1, 2024",
    time: "11:15 AM",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "/NotFound",
  },
];

const Blog = () => {
  const [likes, setLikes] = useState(Array(posts.length).fill(false));
  const [saved, setSaved] = useState(Array(posts.length).fill(false));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handleSave = (index) => {
    const newSaved = [...saved];
    newSaved[index] = !newSaved[index];
    setSaved(newSaved);
  };

  const handleShare = (link) => {
    navigator.clipboard.writeText(window.location.origin + link);
    alert("Post link copied to clipboard!");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 flex">
      <div className="container mx-auto px-4 flex">
        <div className="w-full lg:w-3/4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            365dayscoding Blogs
          </h1>

          <section className="mb-12">
            <p className="text-gray-600">
              Welcome to our blog section! Here, you'll find a collection of articles, guides, and insights on various topics related to web development, programming, and technology. Whether you're a beginner or an experienced developer, we hope you find something valuable and engaging. Happy reading!
            </p>
          </section>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4 text-sm">
                  {post.date} • {post.time}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-teal-500 font-semibold hover:text-teal-600 block"
                >
                  Read More &rarr;
                </a>
                <div className="absolute bottom-6 right-6 flex space-x-4">
                  <button
                    className="text-2xl"
                    onClick={() => handleLike(index)}
                  >
                    {likes[index] ? "❤️" : "🤍"}
                  </button>
                  <button
                    className="text-2xl"
                    onClick={() => handleSave(index)}
                  >
                    {saved[index] ? "🔖" : "📥"}
                  </button>
                  <button
                    className="text-teal-500 font-semibold hover:text-teal-600"
                    onClick={() => handleShare(post.link)}
                  >
                    Share &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/4 lg:pl-8">
          <div className="sticky top-20">
            <button
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold w-full transition-transform duration-300 transform hover:scale-105 hover:bg-teal-600"
              onClick={() => alert("Redirect to create blog post page")}
            >
              Create Blog Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
