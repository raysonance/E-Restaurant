import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SearchBar() {
  return (
    <View style={{ flexDirection: "row", marginTop: 15}}>
      <GooglePlacesAutocomplete 
        placeholder='Search'
        styles={{
            textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            },
            textInputContainer: {
                backgroundColor: '#eee',
                borderRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10
            }
        }}

        renderLeftButton = {() => (
            <View style={{ marginLeft: 10 }}>
                <Ionicons name="location-sharp" size={24} />
            </View>
        )}
        renderRightButton = {() => (
            <View>
                <TouchableOpacity style={{ 
                    marginRight: 10, 
                    flexDirection: "row", 
                    padding: 10, 
                    backgroundColor: "white", 
                    borderRadius: 30,
                }}>    
                    <Ionicons name="search-circle" size={16} />
                    <Text style={{ fontWeight: "900"}}> Search </Text>
                </TouchableOpacity>
            </View>
        )}
        />
    </View>
  )
}