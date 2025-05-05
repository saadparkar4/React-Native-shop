import { Image, Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "flex-start",
				alignItems: "center",
			}}>
			<Text>
				<h1> My React Native Shop</h1>
			</Text>
			<Text> Welcome to the store of the Full Stack Tricks</Text>
			<Image
				source={{ uri: "https://i.giphy.com/KX5nwoDX97AtPvKBF6.webp" }}
				style={{
					width: 500,
					height: 500,
				}}
			/>
		</View>
	);
}

// 1. Add a heading showing your shop name.
// 2. Add a Description.
// 3. Center the title and description.
// 4. Add an image from your desktop.

//     <aside>
//     ❗

//     Do some research to find out how to [add local images](https://reactnative.dev/docs/images) to your project.

//     </aside>

// 5. Change the images' dimensions if needed.
