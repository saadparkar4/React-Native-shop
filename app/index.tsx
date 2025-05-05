import products from "@/data/products";
import { Image, Text, View } from "react-native";

export default function Index() {
	let storeProducts = products[0];
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "flex-start",
				alignItems: "center",
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
							margin: 10,
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
							margin: 10,
						}}>
						{storeProducts.pPrice} KWD
					</Text>
				</View>
			</View>
			<View />
		</View>
	);
}
