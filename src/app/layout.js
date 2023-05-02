import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Movie App - Naseem Khan",
	description: "Created by: Naseem Khan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
