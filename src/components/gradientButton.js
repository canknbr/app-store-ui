import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ containerClass, buttonClass, children }) => {
  return (
    <LinearGradient
      colors={["rgba(9,181,211,.9)", "rgba(58,131,244,.9)"]}
      end={{ x: 1, y: 1 }}
      start={{
        x: 0.1,
        y: 0.2,
      }}
      className={`rounded-full ${containerClass}`}>
      <TouchableOpacity className={`p-3 px-4 ${buttonClass}`}>
        <Text className="text-white font-bold">{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
