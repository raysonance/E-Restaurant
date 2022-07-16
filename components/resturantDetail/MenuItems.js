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
      "https://media.istockphoto.com/photos/lasagna-on-a-square-white-plate-picture-id535851351?b=1&k=20&m=535851351&s=170667a&w=0&h=Ata4rEU3Z8oGcjJunBDJZIiyLgU49Q1pgDoQu690mXQ=",
    price: "$13.50",
    description: "With butter, lettuce, tomato and sauce bechamel",
  },
  {
    title: "Chilaquies",
    image:
      "https://st3.depositphotos.com/1373322/15052/i/450/depositphotos_150524334-stock-photo-tortillas-with-tomato-salsa-chicken.jpg",
    price: "$14.50",
    description: "Chilaquies with cheese and sause. A delicious mexican dish",
  },
  {
    title: "Tandoori Chicken",
    image:
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRhbmRvb3JpfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    price: "$19.20",
    description: "A most delicious indian dish.",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },

];

export default function MenuItems({ restaurantName }) {
  const height = 0.5 * Dimensions.get("window").height;

  const items = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const checking = (food, cartItems) => {
      return Boolean(cartItems.find((check) => check.title == food.title))
  }

  const dispatch = useDispatch();

  const selectItem = (item, restaurantName, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
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
                onPress={(checkboxValue) => selectItem(food, restaurantName, checkboxValue)}
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
