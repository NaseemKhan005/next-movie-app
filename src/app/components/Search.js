"use client";
import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

const Search = ({ searchMovie }) => {
	const [search, setSearch] = useState();
	const InputEvent = (e) => {
		const value = e.target.value;
		setSearch(value);
		// console.log(search);
	};
	searchMovie(search);

	return (
		<div className="relative">
			<CgSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-lg" />
			<input
				type="search"
				placeholder="Search"
				className="p-3 pl-10 pr-4 rounded-full bg-slate-100 w-72 border-none outline-none capitalize"
				onChange={InputEvent}
				value={search}
			/>
		</div>
	);
};

export default Search;
