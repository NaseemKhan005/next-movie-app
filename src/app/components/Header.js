"use client";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<>
			<header className="text-gray-600 body-font shadow-md overflow-hidden">
				<div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
					{/* logo */}
					<Link
						href={"/"}
						className="flex title-font font-medium items-center text-gray-900"
					>
						<span className="ml-3 text-xl font-[fantasy]">
							Khan<span className="text-red-600 font-[fantasy]">Movies</span>
						</span>
					</Link>

					{/* Navbar component */}
					<Navbar />
				</div>
			</header>
		</>
	);
};

export default Header;
