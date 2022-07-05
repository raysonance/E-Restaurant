import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      <TextInput
        autoCorrect={true}
        placeholder={props.placeholder}
        value={props.text}
        underlineColorAndroid="transparent"
        clearButtonMode="always"
        style={styles.text}
        onChangeText={props.onChange}
        onSubmitEditing={props.onSubmit}
      />
      <View style={{ marginRight: 7 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "white",
            borderRadius: 30,
          }}
          onPress={props.onSubmit}
        >
          <Ionicons name="search-circle" size={16} />
          <Text style={{ fontWeight: "900" }}> Search </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginTop: 15,
    padding: 7,
  },

  text: {
    marginLeft: 7,
    fontWeight: "700",
    flex: 1,
  },
});

// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import Ionicons from 'react-native-vector-icons/Ionicons'

// export default function SearchBar() {
//   return (
//     <View style={{ flexDirection: "row", marginTop: 15}}>
//       <GooglePlacesAutocomplete
//         placeholder='Search'
//         styles={{
//             textInput: {
//             backgroundColor: "#eee",
//             borderRadius: 20,
//             fontWeight: "700",
//             marginTop: 7,
//             },
//             textInputContainer: {
//                 backgroundColor: '#eee',
//                 borderRadius: 50,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginRight: 10
//             }
//         }}

//         renderLeftButton = {() => (
//             <View style={{ marginLeft: 10 }}>
//                 <Ionicons name="location-sharp" size={24} />
//             </View>
//         )}
//         renderRightButton = {() => (
//             <View>
//                 <TouchableOpacity style={{
//                     marginRight: 10,
//                     flexDirection: "row",
//                     padding: 10,
//                     backgroundColor: "white",
//                     borderRadius: 30,
//                 }}>
//                     <Ionicons name="search-circle" size={16} />
//                     <Text style={{ fontWeight: "900"}}> Search </Text>
//                 </TouchableOpacity>
//             </View>
//         )}
//         />
//     </View>
//   )
// }
