import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

const Movie = async () => {
	// await new Promise((resolve) => setTimeout(resolve, 3000));

	// const url = process.env.RAPID_KEY;
	// getting movies and shows using rapid api

	const url =
		"https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "54daf2d7f2msh14a7180c7507ec1p1092e5jsna98a0d6dac7b",
			"X-RapidAPI-Host": "netflix54.p.rapidapi.com",
		},
	};

	const response = await fetch(url, options);
	const result = await response.json();
	const data = result.titles;

	const searchMovie = (value) => {
		// data.filter((curElem) => {
		// 	return curElem.jawSummary.title === value;
		// });
		console.log(value);
	};

	return (
		<section className="w-full text-gray-600 body-font">
			<div className="container mx-auto">
				<div className="py-16 px-3 pt-10">
					<div className="flex items-center justify-between flex-wrap mx-auto px-5 pb-8">
						<div>
							<h1 className="text-3xl font-medium">Shows & Movies</h1>
						</div>
						<div>
							"use server"; <Search searchMovie={searchMovie} />
						</div>
					</div>

					<div className="flex items-start justify-center flex-wrap">
						{/* looping the response */}
						{data.map((curElem) => {
							return <MovieCard key={curElem.id} {...curElem} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Movie;
