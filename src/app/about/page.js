import HeroSection from "../components/HeroSection";
import Infromation from "../components/Infromation";
import { HiOutlineMail, HiOutlineUserGroup } from "react-icons/hi";
import { MdVoiceChat } from "react-icons/md";
// import { GrGroup } from "react-icons/gr";

const content = {
	title: `Our Story`,
	paragraph:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt necessitatibus illo deserunt officia laudantium sit ullam quas a perferendis in nostrum esse vero ratione aliquam, voluptatibus rerum quasi pariatur dolorum!",
	imgSrc: "/video-streaming.png",
	alt: "About image",
};

const { title, paragraph, imgSrc, alt } = content;

const About = () => {
	return (
		<>
			<HeroSection title={title} imgSrc={imgSrc} para={paragraph} alt={alt} />

			<div className="container my-5 mb-20 mx-auto px-10 md:px-0">
				<h1 className="text-center text-2xl md:text-4xl font-extrabold mb-10 ">
					We'd love to hear <span className="text-red-600">from you</span>
				</h1>

				<div className="container flex items-center justify-center flex-wrap box-border gap-8 md:gap-5 lg:gap-8">
					<Infromation
						title={"Email"}
						icon={<HiOutlineMail />}
						para1={"Monday to Friday Expected"}
						para2={"Response time: 72 hours"}
						btnTxt={"send email"}
					/>
					<Infromation
						title={"Live Chat"}
						icon={<MdVoiceChat />}
						para1={"Saturday & Sunday"}
						para2={"Timing: 7pm - 8pm"}
						btnTxt={"Register Now"}
					/>
					<Infromation
						title={"Community Forum"}
						icon={<HiOutlineUserGroup />}
						para1={"Thursday & Friday"}
						para2={"Response time: 48 hours"}
						btnTxt={"ask the community"}
					/>
				</div>
			</div>
		</>
	);
};

export default About;
