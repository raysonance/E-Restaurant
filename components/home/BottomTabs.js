import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <View style={{ alignItems: "center" }}>
    <TouchableOpacity>
      <FontAwesome5
        style={{ alignSelf: "center", marginBottom: 3 }}
        name={props.name}
        size={25}
        color="black"
      />
      <Text style={{ fontWeight: "600", fontSize: 13, alignSelf: "center" }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
