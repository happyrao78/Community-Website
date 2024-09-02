// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-gray-800 text-white p-4">
			<nav className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Link to="/">365dayscoding</Link>
				</h1>
				<ul className="flex space-x-4">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/events">Events</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/leaderboard">LeaderBoard</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
