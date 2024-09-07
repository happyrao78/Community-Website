import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-6 shadow-inner">
			<div className="container mx-auto text-center">
				<p className="text-lg tracking-wider">
					&copy; {new Date().getFullYear()} 365dayscoding | All rights reserved 
				</p>
				<div className="mt-4">
					<ul className="flex justify-center space-x-6">
						<li>
							<a
								href="https://chat.whatsapp.com/FA29nAabUKuAIHnbEznkV7?fbclid=PAZXh0bgNhZW0CMTEAAabvFP3pCNXBPzM4J88xV9Iy65MU8MNsTOfZ7usK_vyZwoJLGvca6vIpLvU_aem_oTFiLy4tSg4DZMKqiFWZEQ"
								className="hover:text-teal-400 transition duration-300 ease-in-out"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span role="img" aria-label="whatsapp">
									📱
								</span>{" "}
								WhatsApp
							</a>
						</li>
						<li>
							<a
								href="https://discord.com/invite/Mc82NgTS?fbclid=PAZXh0bgNhZW0CMTEAAabBJxKTfZNWSjv6FUeWL9s09sulgsyUOBUN-Q0bJ-pW565SSjbanITE29Q_aem_aKG36Pb2sylLLAwSGkc-cg"
								className="hover:text-teal-400 transition duration-300 ease-in-out"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span role="img" aria-label="discord">
									🎮
								</span>{" "}
								Discord
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/365codingdays?igsh=MTg0am5iNHBhMjcxcA=="
								className="hover:text-teal-400 transition duration-300 ease-in-out"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span role="img" aria-label="instagram">
									📷
								</span>{" "}
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
