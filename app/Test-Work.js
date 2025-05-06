import products from "@/data/products";
import { Image, ScrollView, Text, View } from "react-native";
import ProductItems from "@/components/ProductItems";

const titles = ["title1", "title2", "title3", "title1", "title2", "title3", "title1", "title2", "title3", "title1", "title2", "title3"];

export default function Index() {
	return (
		<View>
			<ScrollView horizontal={true} style={{ flexDirection: "row" }}>
				{titles.map((title) => (
					<Text style={{ padding: 10 }}>{title}</Text>
				))}
			</ScrollView>
			<ScrollView>
				{products.map((productItem, index) => {
					return <ProductItems key={index} product={productItem} />;
				})}
			</ScrollView>
		</View>
	);
}
