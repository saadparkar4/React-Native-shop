import products from "@/data/products";
import { Image, Text, View } from "react-native";
import ProductItems from "@/components/ProductItems";

export default function Index() {
	let storeProducts = products[1];

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "flex-start",
				alignItems: "center",
				overflowY: "scroll",
			}}>
			<Text
				style={{
					margin: 10,
				}}>
				<h1> My React Native Shop</h1>
			</Text>
			<Text
				style={{
					margin: 20,
				}}>
				{" "}
				Welcome to the store of the Full Stack Tricks
			</Text>
			<Image
				source={{ uri: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp" }}
				style={{
					width: 300,
					height: 300,
					margin: 20,
					borderRadius: 10,
				}}
			/>
			<ProductItems />
			<ProductItems />

			<View />
		</View>
	);
}
