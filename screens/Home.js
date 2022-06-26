import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import GlobalStyles from '../GlobalStyles'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import ResturantItem from '../components/ResturantItem'



export default function Home() {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <ResturantItem />
      </ScrollView>
    </SafeAreaView>
  )
}