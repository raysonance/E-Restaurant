import { View, Text, ScrollView } from "react-native";
import React from "react";
import About from "../components/resturantDetail/About";
import { Divider } from "react-native-elements";
import ResturantItems, {
  localRestaurants,
} from "../components/home/ResturantItems";
import BottomTabs from "../components/home/BottomTabs";
import MenuItems from "../components/resturantDetail/MenuItems";

export default function ResturantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={0.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
