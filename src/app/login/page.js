// import Image from "next/image";
import Form from "../components/Form";

const Login = () => {
	const content = {
		title: "Sign In",
		checkUser: "New to KhanMovies",
		reDirect: "Sign Up",
		link: "/signup",
		placeholder: "Password",
	};
	const { title, checkUser, reDirect, link, placeholder } = content;

	return (
		<>
			<div>
				<Form
					title={title}
					checkUser={checkUser}
					reDirect={reDirect}
					link={link}
					placeholder={placeholder}
				/>
			</div>
		</>
	);
};

export default Login;
