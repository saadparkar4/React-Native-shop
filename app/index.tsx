import products from "@/data/products";
import { Image, Text, View } from "react-native";
import ProductItems from "@/components/ProductItems";
import ProductItemsProps from "@/components/ProductItems";

export default function Index() {
	return (
		<View
			style={{
				// display: "flex",
				// // flex: 1,
				justifyContent: "flex-start",
				alignItems: "center",
				overflowY: "scroll",
			}}>
			<Text
				style={{
					margin: 10,
					fontSize: 34,
					fontWeight: "bold",
				}}>
				My React Native Shop
			</Text>
			<Text
				style={{
					margin: 20,
				}}>
				Welcome to the store of the Full Stack Tricks
			</Text>
			<Image
				source={{ uri: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp" }}
				style={{
					width: 300,
					height: 300,
					margin: 10,
					borderRadius: 10,
				}}
			/>
			<ProductItems pName="Image" pImage="Image" pPrice={10} />

			<View />
		</View>
	);
}
