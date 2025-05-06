export interface product {
	id: number;
	pName: string;
	pImage: string;
	pPrice: number;
}

const products: product[] = [
	{
		id: 1,
		pName: "Mobile Stand",
		pImage: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp",
		pPrice: 10,
	},

	{
		id: 2,
		pName: "Tablet Stand",
		pImage: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp",
		pPrice: 20,
	},

	{
		id: 3,
		pName: "Laptop Stand",
		pImage: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp",
		pPrice: 30,
	},

	{
		id: 4,
		pName: "TV Stand",
		pImage: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp",
		pPrice: 40,
	},
];

export default products;
