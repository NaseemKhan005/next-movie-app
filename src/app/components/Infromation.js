import { BsArrowRightShort } from "react-icons/bs";

const Infromation = ({ title, icon, para1, para2, btnTxt }) => {
	return (
		<>
			<div className="shadow-lg rounded-lg w-full md:w-[30%] p-5 box-border text-center hover:-translate-y-3 transition-all">
				{/* <{icon} className="mx-auto text-3xl mb-1 text-red-600" /> */}
				<span className="flex items-center justify-center text-3xl mb-1 text-red-600">
					{icon}
				</span>
				<span className="text-lg font-bold">{title}</span>
				<p className="md:mt-2 lg:mt-3 md:text-sm lg:text-base">{para1}</p>
				<p className="md: mb-0 lg:mb-3 md:text-sm lg:text-base">{para2}</p>
				<button className="flex items-center mx-auto cursor-pointer p-2 rounded capitalize hover:bg-slate-100 md:text-sm lg:text-base mt-2">
					{btnTxt}
					<BsArrowRightShort className="hover:translate-x-1 transition-all" />
				</button>
			</div>
		</>
	);
};

export default Infromation;
