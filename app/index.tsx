import products from "@/data/products";
import { Image, ScrollView, Text, View } from "react-native";
import ProductItems from "@/components/ProductItems";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				height: "auto",
			}}>
			<View
				style={{
					alignItems: "center",
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
						margin: 20,
						borderRadius: 10,
					}}
				/>
			</View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					alignItems: "flex-start",
					paddingHorizontal: 10,
					justifyContent: "center",
					height: 140, // Limit height for horizontal scroll
				}}
				style={{
					marginBottom: 20,
				}}>
				<Text
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						marginHorizontal: 10,
						textAlign: "center",
						fontSize: 12,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						marginHorizontal: 10,
						textAlign: "center",
						fontSize: 12,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						marginHorizontal: 10,
						textAlign: "center",
						fontSize: 12,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						marginHorizontal: 10,
						textAlign: "center",
						fontSize: 12,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						marginHorizontal: 10,
						textAlign: "center",
						fontSize: 12,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
				<Text
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						marginHorizontal: 10,
						textAlign: "center",
						fontSize: 12,
					}}>
					HIIIIIIIIIIIIIIIIII
				</Text>
			</ScrollView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingBottom: 20,
					alignItems: "center",
					justifyContent: "center",
					width: "auto",
				}}
				// style={
				// 	{
				// 		// alignItems: "center",
				// 		// flex: 1,
				// 		// flexDirection: "row",
				// 		// width: "auto",
				// 		// height: "auto",
				// 	}
				// }
			>
				{products.map((productItem, index) => {
					return <ProductItems key={index} product={productItem} />;
				})}
			</ScrollView>
		</View>
	);
}
