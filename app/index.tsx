import products from "@/data/products";
import { Image, ScrollView, Text, View } from "react-native";
import ProductItems from "@/components/ProductItems";

export default function Index() {
	return (
		<View
			style={{
				// flex: 1,
				// justifyContent: "center",
				// alignItems: "center",
				overflow: "hidden",
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
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<Text
					style={{
						padding: 14,
						borderWidth: 1,
						borderRadius: 10,
						margin: 10,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 14,
						borderWidth: 1,
						borderRadius: 10,
						margin: 10,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 14,
						borderWidth: 1,
						borderRadius: 10,
						margin: 10,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 14,
						borderWidth: 1,
						borderRadius: 10,
						margin: 10,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 14,
						borderWidth: 1,
						borderRadius: 10,
						margin: 10,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 14,
						borderWidth: 1,
						borderRadius: 10,
						margin: 10,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
			</ScrollView>
			<ScrollView
				showsVerticalScrollIndicator
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%",
				}}>
				<View>
					{products.map((productItem, index) => {
						return <ProductItems key={index} product={productItem} />;
					})}
				</View>
			</ScrollView>
		</View>
	);
}
