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
		<div className="app">
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/leaderboard" element={<LeaderBoard />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
