import { View, Text, Image } from "react-native";
import React from "react";
import Rating from "../home/Rating";

export default function About({ route }) {
  const yelpResturantInfo = {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    title: "Farmhouse Kitchen Thai Cuisine",
    price: "$$",
    rating: 4,
    reviews: 2340,
    categories: [{ title: "Thai" }, { title: "Comfort Food" }],
  };

  const { image, title, price, rating, reviews, categories } = route.params;

  console.log(image);
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  return (
    <View style={{ height: "45%", marginBottom: 8 }}>
      <ResturantImage image={image} />
      <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        <ResturantTitle text={title} price={price} />
        <ResturantInfo
          text={formattedCategories}
          rating={rating}
          reviews={reviews}
        />
      </View>
    </View>
  );
}

const ResturantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);

const ResturantTitle = (props) => (
  <>
    <Text
      style={{
        fontWeight: "600",
        fontSize: 29,
        width: "65%",
      }}
    >
      {props.text}
    </Text>
    <Text style={{ fontSize: 29, position: "absolute", top: 30, right: 16 }}>
      {props.price}
    </Text>
  </>
);

const ResturantInfo = (props) => (
  <View>
    <Text
      style={{
        fontSize: 15,
        fontWeight: "400",
        width: "65%",
        color: "grey",
        marginTop: 4,
        marginVertical: 16,
      }}
    >
      {props.text}
    </Text>
    <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: "400" }}>
      {" "}
      Rating:{" "}
    </Text>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Rating color={"#f8e825"} number={props.rating} />
      <Text style={{ color: "grey", fontWeight: "400", marginLeft: 5 }}>
        ({props.reviews}+) reviews
      </Text>
    </View>
  </View>
);
