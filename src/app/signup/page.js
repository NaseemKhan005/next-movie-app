import Form from "../components/Form";

const SignUp = () => {
	const content = {
		title: "Sign Up",
		checkUser: "Already have an Account",
		reDirect: "Sign In",
		link: "/login",
		placeholder: "Minimum 8 characters",
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

export default SignUp;
