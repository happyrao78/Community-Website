import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 shadow-lg">
			<nav className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl md:text-3xl font-bold tracking-wider">
					<Link to="/" className="hover:text-teal-400 transition duration-300 ease-in-out">365dayscoding</Link>
				</h1>

				<div className="md:hidden">
					{menuOpen ? (
						<AiOutlineClose
							className="text-3xl cursor-pointer"
							onClick={toggleMenu}
						/>
					) : (
						<AiOutlineMenu
							className="text-3xl cursor-pointer"
							onClick={toggleMenu}
						/>
					)}
				</div>

				<ul className="hidden md:flex items-center space-x-6">
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

				{menuOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-50 md:hidden">
						<Link
							to="/"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							Home
						</Link>
						<Link
							to="/about"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							About
						</Link>
						<Link
							to="/events"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							Events
						</Link>
						<Link
							to="/projects"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							Projects
						</Link>
						<Link
							to="/contact"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							Contact
						</Link>
						<Link
							to="/leaderboard"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							LeaderBoard
						</Link>
						<Link
							to="/blog"
							onClick={toggleMenu}
							className="text-2xl text-teal-400 hover:text-teal-300 transition duration-300 ease-in-out"
						>
							Blog Posts
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
