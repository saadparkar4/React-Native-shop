import { Image, Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "flex-start",
				alignItems: "center",
			}}>
			<Text
				style={{
					margin: 20,
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
					width: 500,
					height: 500,
					margin: 20,
				}}
			/>
		</View>
	);
}
