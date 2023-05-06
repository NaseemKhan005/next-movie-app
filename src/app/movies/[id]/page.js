import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
	const id = params.id;
	const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "54daf2d7f2msh14a7180c7507ec1p1092e5jsna98a0d6dac7b",
			"X-RapidAPI-Host": "netflix54.p.rapidapi.com",
		},
	};

	const response = await fetch(url, options);
	const result = await response.json();
	const data = result[0].details;

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto p-8 flex items-start justify-center flex-col">
					<div>
						<p className="text-xl capitalize tracking-wider">
							Netflix/<span className="text-red-600">{data.type}</span>
						</p>
					</div>
					<div className="w-full">
						<Image
							className="lg:w-2/6 md:w-3/6 w-full mb-10 object-cover object-center rounded"
							width={500}
							height={500}
							alt={data.title}
							src={data.backgroundImage.url}
						/>
					</div>
					<div className="text-left lg:w-2/3 w-full">
						<h1 className="title-font text-lg sm:text-2xl md:text-3xl mb-4 font-medium text-gray-900">
							{data.title}
						</h1>
						<p className="mb-8 leading-relaxed text-sm md:text-base">
							{data.synopsis}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
