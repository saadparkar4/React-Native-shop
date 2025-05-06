import products from "@/data/products";
import { Image, Text, View } from "react-native";

interface ProductItemsProps {
	pName: string;
	pImage: string;
	pPrice: number;
}

const ProductItems = ({ pName, pImage, pPrice }: ProductItemsProps) => {
	return (
		<View
			style={{
				display: "flex",
				// flex: 1, -- This will squeeze everything inside one single div or section in the view area
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "flex-start",
				width: "100%",
			}}>
			<View
				style={{
					padding: 10,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Image
					source={{ uri: pImage }}
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
					{pName}
				</Text>
				<Text
					style={{
						marginBottom: 10,
					}}>
					{pPrice} KWD
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
					source={{ uri: pImage }}
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
					{pName}
				</Text>
				<Text
					style={{
						marginBottom: 10,
					}}>
					{pPrice} KWD
				</Text>
			</View>
		</View>
	);
};

export default ProductItems;
