import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTabs() {
    const [active, setActive] = React.useState('Delivery');

  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
        <HeaderButton 
        text="Delivery" 
        btnColor="black" 
        textColor="white" 
        active={active} 
        setActive={setActive}
        />
        <HeaderButton 
        text="Pickup" 
        btnColor="white" 
        textColor="black" 
        active={active} 
        setActive={setActive}
        />
    </View>
  )
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.active === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            }}
        onPress = {() => {props.setActive(props.text)}}
    >
        <Text style={{
            color: props.active === props.text ? "white" : "black",
            fontSize: 16,
            fontWeight: "900",
            }}> {props.text} </Text> 
    </TouchableOpacity>  
)