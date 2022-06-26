import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ResturantItem() {
  return (
    <View>
      <ResturantImage />
      {/* resturant info */}
    </View>
  )
}

const ResturantImage = () => (
    <>
    <Image source={require("../assets/images/bg1.jpg")} style={{
        width: "100%",
        height: 180,
    }}/>
    <TouchableOpacity style={{ position: "absolute", right: 20, top:10 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
    </>
    
)