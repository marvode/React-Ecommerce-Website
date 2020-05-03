import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
	const data = [
		{
			id: 1,
			img: "./img/1.jpeg",
			name: "Specials",
		},
		{
			id: 2,
			img: "./img/2.jpg",
			name: "Phones",
		},
		{
			id: 3,
			img: "./img/3.jpg",
			name: "Laptops",
		},
		{
			id: 4,
			img: "./img/4.jpeg",
			name: "Electronics",
		},
		{
			id: 5,
			img: "./img/5.jpg",
			name: "Men Clothing",
		},
		{
			id: 6,
			img: "./img/6.jpg",
			name: "Women Clothing",
		},
		{
			id: 7,
			img: "./img/7.jpg",
			name: "Music",
		},
		{
			id: 8,
			img: "./img/8.jpg",
			name: "Art",
		},
	];
	return (
		<div>
			<p className="text-left text-gray-800 text-2xl">Categories</p>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-5">
				{data.map((datum) => (
					<CategoryItem key={datum.id} {...datum} />
				))}
			</div>
		</div>
	);
};

export default Category;
