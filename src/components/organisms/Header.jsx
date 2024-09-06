import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 shadow-lg">
			<nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<h1 className="text-2xl md:text-3xl font-bold tracking-wider">
					<Link to="/" className="hover:text-teal-400 transition duration-300 ease-in-out">365dayscoding</Link>
				</h1>
				<ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
					<li>
						<Link
							to="/"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/events"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="/projects"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/leaderboard"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							LeaderBoard
						</Link>
					</li>
					<li>
						<Link
							to="/blog"
							className="hover:text-teal-400 transition duration-300 ease-in-out"
						>
							Blog Posts
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
