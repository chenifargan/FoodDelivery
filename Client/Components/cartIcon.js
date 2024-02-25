import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../Theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../Slices/cartSlice";
export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return;
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgb(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          {" "}
          View Card
        </Text>
        <Text className="font-extrabold text-white text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}