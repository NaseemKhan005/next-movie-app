import Image from "next/image";
import Link from "next/link";

const Login = ({ title, checkUser, reDirect, link, placeholder }) => {
	return (
		<>
			<section className="body-font relative w-full md:h-auto md:pb-0">
				{/* background banner image */}
				<div className="absolute -z-50 m-auto w-full h-full bg-black">
					<Image
						src="/bg-img.jpg"
						alt="banner"
						width={500}
						height={500}
						className="m-auto w-full h-full object-cover object-left hidden md:block"
					/>
				</div>

				{/* form container */}
				<div className="p-0 md:px-5 md:py-24 w-full h-auto m-auto flex items-start md:items-center justify-center bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] ">
					{/* sign in from */}
					<div className="w-full h-auto md:w-[450px] md:h-[660px] bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] rounded-lg flex flex-col gap-5 md:mx-auto w-full relative shadow-md p-16 text-[#b3b3b3]">
						<h2 className="text-3xl mb-3 font-bold title-font text-white">{title}</h2>

						<div className="relative">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email or phone number"
								className="w-full bg-[#333] rounded focus:border-none outline-none p-[.9rem] px-6 text-base"
							/>
						</div>

						<div className="relative">
							<input
								type="password"
								id="password"
								name="password"
								placeholder={placeholder}
								className="w-full bg-[#333] rounded focus:border-none outline-none py-[.9rem] px-6 text-base"
							/>
						</div>

						<button className="btn py-[.8rem] px-4 mt-5 text-white bg-red-600 border-0 hover:bg-red-700 w-full ">
							<span className="w-full mx-auto font-semibold">{title}</span>
						</button>

						<div className="text-sm">
							<div className="inline-flex items-center">
								<input type="checkbox" id="remember" className="w-4 h-4 caret-[#333]" />
								<label htmlFor="remember" className="cursor-pointer select-none ml-1">
									Remeber me
								</label>
							</div>
							<Link href={"/contact"} className="float-right hover:underline">
								Need help?
							</Link>
						</div>

						<div className="my-12 ">
							<p>
								{checkUser}?&#160;
								<Link href={link} className="text-white hover:underline">
									{reDirect} now
								</Link>
								.
							</p>
							<p className="text-sm mt-3">
								This page is protected by Google reCAPTCHA to ensure you're not a bot.
								<span className="text-blue-700 hover:underline">Learn more.</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
