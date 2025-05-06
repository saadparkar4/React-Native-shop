import products, { product } from "@/data/products";
import { Image, StyleSheet, Text, View } from "react-native";

// const styles = StyleSheet.create({
// 	productView: {
// 		display: "flex",
// 		// flex: 1, -- This will squeeze everything inside one single div or section in the view area
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		alignItems: "flex-start",
// 		width: "100%",
// 	},
// });

interface ProductItemsProps {
	product: product;
}

const ProductItems = ({ product }: ProductItemsProps) => {
	return (
		<View
			style={{
				padding: 10,
				flexWrap: "wrap",
				alignItems: "center",
				width: "100%",
			}}>
			<Image
				source={{ uri: product.pImage }}
				style={{
					width: 120,
					height: 120,
					margin: 20,
					borderRadius: 10,
				}}
			/>
			<Text
				style={{
					margin: 10,
				}}>
				{product.pName}
			</Text>
			<Text
				style={{
					marginBottom: 10,
				}}>
				{product.pPrice} KWD
			</Text>
		</View>
	);
};

export default ProductItems;
