import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { BiRightArrowAlt } from "react-icons/bi";

const MovieCard = (curElem) => {
	const { id, title, type, synopsis, titleMaturity } = curElem.jawSummary;

	const watched = curElem.jawSummary.genres[0].id;
	return (
		<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
			<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
				<div className="w-full">
					<Image
						className="lg:h-48 md:h-36 w-full object-cover object-center"
						src={curElem.jawSummary.backgroundImage.url}
						alt={title}
						width={200}
						height={260}
					/>
				</div>
				<div className="py-4 px-3 pb-5">
					<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
						{type}
					</h2>
					<h1 className="title-font text-lg font-bold text-gray-900 mb-2">
						{/* {title.length >= 28 ? `${title.slice(0, 28)}...` : { title }} */}
						{title.slice(0, 25)}...
					</h1>
					<p className="leading-relaxed mb-2 text-sm md:text-base">{synopsis.slice(0, 110)}...</p>
					<div className="flex items-center flex-wrap ">
						<Link
							href={`/movies/${id}`}
							className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"
						>
							Learn More
							<BiRightArrowAlt className="text-lg" />
						</Link>
						<span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
							<AiOutlineEye className="text-xl mr-1" />
							{watched.length > 1000 ? watched : watched.toString().slice(0, 2) + "k"}
						</span>
						<span className="text-gray-400 flex items-center leading-none text-sm">
							<HiOutlineChatBubbleOvalLeft className="text-lg mr-1" />
							{titleMaturity.level}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
