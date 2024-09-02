import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LeaderBoard from "./pages/LeaderBoard";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="app flex flex-col min-h-screen">
				<Header className="bg-gray-800 text-white p-4" />
				<main className="flex-grow container mx-auto p-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/events" element={<Events />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/leaderboard"
							element={<LeaderBoard />}
						/>
						<Route path="/blog" element={<Blog />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer className="bg-gray-800 text-white p-4 mt-auto" />
			</div>
		</Router>
	);
}

export default App;
