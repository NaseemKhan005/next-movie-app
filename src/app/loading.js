import React from "react";
import styles from "../app/styles/loading.module.css";

const Loading = () => {
	return (
		<section className="container">
			<span className={styles.loading}></span>
		</section>
	);
};

export default Loading;
