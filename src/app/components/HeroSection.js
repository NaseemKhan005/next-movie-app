import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ title, para, imgSrc, alt }) => {
	return (
		<>
			<div className="w-full h-full py-16 md:py-0 md:h-screen flex items-center justify-between">
				<div className="container mx-auto flex items-center justify-between flex-col md:flex-row gap-5 px-10">
					<div>
						<h1 className="text-xl md:text-3xl lg:text-[40px] md:leading-tight font-bold md:font-extrabold font-sans">
							{title}
						</h1>

						<p className="my-3 md:my-6 text-sm md:text-base">{para}</p>

						<Link href={"/movie"}>
							<button className="btn bg-red-600 hover:bg-red-700 text-white text-sm md:text-base">
								explore movies
							</button>
						</Link>
					</div>

					<div className="w-full md:w-auto">
						<Image src={imgSrc} alt={alt} width={1550} height={500} />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
