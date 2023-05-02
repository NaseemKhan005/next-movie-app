import HeroSection from "./components/HeroSection";
// import image from "../../public/Netflix.png";

const content = {
	title: "LET'S WATCH MOVIE TOGETHER",
	paragraph:
		"From award-winning dromos to blockbuster action movies, we've got you covered. Browse our selection ofthe atest and greatest movies, and find your new favorite today.",
	imgSrc: "/Netflix.png",
	alt: "Netflix image",
};

const { title, paragraph, imgSrc, alt } = content;

const Home = () => {
	return (
		<>
			<HeroSection title={title} para={paragraph} imgSrc={imgSrc} alt={alt} />
		</>
	);
};

export default Home;
