import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
	// state for opening and closing menu bar
	const [isOpened, setIsOpened] = useState(false);

	return (
		<>
			<div className="overflow-hidden">
				<nav className={isOpened ? "navbar active" : "navbar"}>
					<Link href={"/"} className="mr-5 hover:text-gray-900">
						Home
					</Link>
					<Link href={"/about"} className="mr-5 hover:text-gray-900">
						About
					</Link>
					<Link href={"/movies"} className="mr-5 hover:text-gray-900">
						Movies
					</Link>
					<Link href={"/contact"} className="mr-5 hover:text-gray-900">
						Contact
					</Link>

					{/* close menu icon */}
					<IoIosCloseCircleOutline
						className="md:hidden absolute top-5 right-12 text-4xl cursor-pointer"
						onClick={() => setIsOpened(false)}
					/>

					{/* signIn signOut Buttons */}
					<div className="flex flex-col items-center justify-center md:flex-row gap-4 -ml-5 md:gap-2  md:ml-0">
						<Link href={"/login"}>
							<button className="btn bg-gray-100 hover:bg-gray-200">Sign In</button>
						</Link>

						<Link href={"/signup"}>
							<button className="btn bg-red-600 hover:bg-red-700 text-white">
								Sign Up
							</button>
						</Link>
					</div>
				</nav>

				{/* open menu icon */}
				<HiOutlineBars3
					className="md:hidden text-2xl cursor-pointer"
					onClick={() => setIsOpened(true)}
				/>
			</div>
		</>
	);
};

export default Navbar;
