import products from "@/data/products";
import { Image, Text, View } from "react-native";

const ProductItems = () => {
	let storeProducts = products[2];

	return (
		<View
			style={{
				display: "flex",
				flex: 1,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "flex-start",
				width: "100%",
				alignContent: "center",
			}}>
			<View
				style={{
					padding: 10,
					display: "flex",
					alignItems: "center",

					justifyContent: "center",
				}}>
				<Image
					source={{ uri: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp" }}
					style={{
						width: 100,
						height: 100,
						margin: 20,
						borderRadius: 10,
					}}
				/>
				<Text
					style={{
						margin: 10,
					}}>
					{storeProducts.pName}
				</Text>
				<Text
					style={{
						marginBottom: 10,
					}}>
					{storeProducts.pPrice} KWD
				</Text>
			</View>
			<View
				style={{
					padding: 10,
					display: "flex",
					alignItems: "center",

					justifyContent: "center",
				}}>
				<Image
					source={{ uri: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp" }}
					style={{
						width: 100,
						height: 100,
						margin: 20,
						borderRadius: 10,
					}}
				/>
				<Text
					style={{
						margin: 10,
					}}>
					{storeProducts.pName}
				</Text>
				<Text
					style={{
						marginBottom: 10,
					}}>
					{storeProducts.pPrice} KWD
				</Text>
			</View>
		</View>
	);
};

export default ProductItems;
