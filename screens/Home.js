import { View, Text, SafeAreaView, ScrollView, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import GlobalStyles from "../GlobalStyles";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ResturantItems, { localRestaurants } from "../components/ResturantItems";

const YELP_API_KEY =
  "cY7HJSY-ONIDnzQQx8zLSw1c0wIW_DgKNbu9-vGvsmp_ompJYAUWzR7aHw_CCvNgvU56ipSbraKndfzTEddwOzE28zdKgYnjyNRYYDDu4B4a6OIxfH3fjjdfWBO6YnYx";

export default function Home() {
  const [resturantData, setresturantData] = useState(localRestaurants);
  const [text, setText] = useState("Hollywood");
  const [location, setLocation] = useState("Hollywood");
  const [active, setActive] = React.useState("Delivery");

  const getResturantsFromYelp = (location) => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`;
    fetch(yelpUrl, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // set resturant data as local data if there is no data about that particular location
        data.businesses
          ? setresturantData(
              data.businesses.filter((businesses) =>
                businesses.transactions.includes(active.toLowerCase())
              )
            )
          : setresturantData(localRestaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getResturantsFromYelp(location);
  }, [location, active]);

  const handleOnChange = (event) => {
    setText(event);
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    // if location is still text call it again regardless of useeffect
    if (location == text) getResturantsFromYelp(location);
    else setLocation(text);
  };

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs active={active} setActive={setActive} />
        <SearchBar
          placeholder="Search"
          text={text}
          onChange={handleOnChange}
          onSubmit={onSubmit}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
