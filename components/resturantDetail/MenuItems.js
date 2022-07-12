import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

export const foods = [
  {
    title: "Lasagna",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    price: "$13.50",
    description: "With butter, lettuce, tomato and sauce bechamel",
  },
  {
    title: "Chilaquies",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "$6.98",
    description: "Chilaquies with cheese and sause. A delicious mexican dish",
  },
  {
    title: "Tandoori Chicken",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    price: "$6.98",
    description: "A most delicious indian dish.",
  },
];

export default function MenuItems({ resturantName }) {
  const height = 0.5 * Dimensions.get("window").height;

  const items = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const checking = (food, cartItems) => {
      return Boolean(cartItems.find((check) => check.title == food.title))
  }

  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        resturantName: resturantName,
        checkboxValue: checkboxValue,
      },
    });
  return (
    <View style={{ height: height }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: "5%" }}
      >
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
                fillColor="green"
                isChecked={checking(food, items)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: "53%", justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{
      width: 100,
      height: 100,
      borderRadius: 8,
    }}
  />
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
