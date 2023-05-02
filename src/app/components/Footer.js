import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-white body-font bg-black py-10">
				{/* footer top section */}
				<div className="container flex items-center justify-between gap-4 md:gap-0 flex-wrap mx-auto px-8">
					{/* logo */}
					<div>
						<Link
							href={"/"}
							className="flex title-font font-medium items-center text-white"
						>
							<span className="text-3xl font-[fantasy]">
								Khan<span className="text-red-600 font-[fantasy]">Movies</span>
							</span>
						</Link>
					</div>

					{/* social Icons */}
					<div className="flex items-center gap-2 text-white">
						<Link href={"/"}>
							<FaFacebookF className="bg-blue-600 rounded-full w-8 h-8 p-2 cursor-pointer hover:-translate-y-2 transition-all" />
						</Link>

						<Link href={"/"}>
							<FaTwitter className="bg-sky-500 rounded-full w-8 h-8 p-2 cursor-pointer hover:-translate-y-2 transition-all" />
						</Link>

						<Link href={"/"}>
							<FaInstagram className="bg-pink-600 rounded-full w-8 h-8 p-2 cursor-pointer hover:-translate-y-2 transition-all" />
						</Link>

						<Link href={"/"}>
							<FaLinkedinIn className="bg-blue-700 rounded-full w-8 h-8 p-2 cursor-pointer hover:-translate-y-2 transition-all" />
						</Link>

						<Link href={"/"}>
							<FaYoutube className="bg-red-600 rounded-full w-8 h-8 p-2 cursor-pointer hover:-translate-y-2 transition-all" />
						</Link>
					</div>
				</div>

				<div className="container py-10 lg:py-16 px-8 mx-auto gap-10 lg:gap-0 flex md:items-start lg:items-start lg:flex-row md:flex-col md:flex-nowrap flex-wrap flex-col">
					<div className="flex-grow flex flex-wrap justify-between md:w-full lg:w-auto gap-10 lg:gap-0 -mb-10 md:mt-0  md:text-left">
						<div className="lg:w-1/4 md:w-fit -mb-10 md:mb-0">
							<h2 className="text-white mb-6 text-lg font-bold relative">
								Company
								<span className="absolute left-0 -bottom-1 w-12 rounded-lg h-[2px] bg-white"></span>
							</h2>
							<nav className="list-none mb-10">
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href={"/about"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										About us
									</Link>
								</li>
								<li>
									<Link
										href={"/contact"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Contact us
									</Link>
								</li>
								<li>
									<Link
										href={"/login"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Get Started
									</Link>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-fit -mb-10 md:mb-0 ">
							<h2 className="text-white mb-6 text-lg font-bold relative">
								Services
								<span className="absolute left-0 -bottom-1 w-12 rounded-lg h-[2px] bg-white"></span>
							</h2>
							<nav className="list-none mb-10">
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										App Design
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Web Design
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Logo Design
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Banner Design
									</Link>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-fit -mb-10 md:mb-0">
							<h2 className="text-white mb-6 text-lg font-bold relative">
								Account
								<span className="absolute left-0 -bottom-1 w-12 rounded-lg h-[2px] bg-white"></span>
							</h2>
							<nav className="list-none mb-10">
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Profile
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										My Account
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Preferences
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Purchase
									</Link>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-fit -mb-10 md:mb-0">
							<h2 className="text-white mb-6 text-lg font-bold relative">
								Courses
								<span className="absolute left-0 -bottom-1 w-12 rounded-lg h-[2px] bg-white"></span>
							</h2>
							<nav className="list-none mb-10">
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										HTML & CSS
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										JavaScript
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Photoshop
									</Link>
								</li>
								<li>
									<Link
										href={"/"}
										className="text-white hover:text-gray-300 hover:underline"
									>
										Photography
									</Link>
								</li>
							</nav>
						</div>
					</div>

					<div className="md:w-fit w-full lg:px-4 mt-5 md:mt-0">
						<h2 className="text-white mb-6 text-lg font-bold relative">
							Subscribe
							<span className="absolute left-0 -bottom-1 w-12 rounded-lg h-[2px] bg-white"></span>
						</h2>
						<input
							type="email"
							placeholder="Enter your email"
							required
							className="border w-full p-[0.55rem] mb-2 rounded focus:outline-none  focus:border-blue-500 text-black"
						/>
						<button className=" bg-red-600 text-white border-0 p-[0.65rem] text-center focus:outline-none hover:bg-red-700 rounded mt-4 md:mt-0 w-full">
							Subscribe
						</button>
					</div>
				</div>

				<div className="w-full border-t-2"></div>
				<div className="flex items-center justify-between flex-wrap container mx-auto px-8 py-2 gap-4 md:gap-1 mt-4">
					<div className="text-xs md:text-md">
						<span>copyright © {year} Naseem Khan - All Right Reserved</span>
					</div>
					<div className="text-xs md:text-md">
						<span>Privacy Policy - Terms & Conditions</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
