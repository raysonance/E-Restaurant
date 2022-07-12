import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      
      {total ? (
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            position: "absolute",
            bottom: "5%",
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginRight: "19%",
                }}
              >
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>${totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
