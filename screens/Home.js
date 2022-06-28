import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import GlobalStyles from '../GlobalStyles'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import ResturantItems, {localRestaurants} from '../components/ResturantItems'


const YELP_API_KEY = 
  "cY7HJSY-ONIDnzQQx8zLSw1c0wIW_DgKNbu9-vGvsmp_ompJYAUWzR7aHw_CCvNgvU56ipSbraKndfzTEddwOzE28zdKgYnjyNRYYDDu4B4a6OIxfH3fjjdfWBO6YnYx"



  export default function Home() {
  const [resturantData, setresturantData] = useState(localRestaurants);

  const getResturantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=San+Francisco"
    fetch(yelpUrl, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setresturantData(data.businesses);
    }
    )
    .catch(error => {
      console.log(error);
    }
    )
  }

  useEffect(() => {
    getResturantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={{backgroundColor: "#fff", padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <ResturantItems resturantData={resturantData}/>
      </ScrollView>
    </SafeAreaView>
  )
}