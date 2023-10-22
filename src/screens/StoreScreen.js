import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { storeColors } from "../theme";
import GradientButton from "../components/gradientButton";
import GameCard from "../components/gameCard";
import { categories, featured, games } from "../../assets/data";
const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Action");
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <LinearGradient
      colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
      className="flex-1 w-full">
      <SafeAreaView>
        <View className="container">
          <View className="flex-row items-center justify-between px-4">
            <Octicons name="three-bars" size={30} color={storeColors.text} />
            <FontAwesome name="bell" size={30} color={storeColors.text} />
          </View>
          <View className="mt-3 space-y-3">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-3xl font-bold">
              Browse Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => {
                  if (category == activeCategory) {
                    return (
                      <GradientButton
                        key={index}
                        containerClass="mr-2"
                        buttonClass="">
                        {category}
                      </GradientButton>
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        onPress={() => setActiveCategory(category)}
                        key={index}
                        className="p-3 px-4 rounded-full bg-blue-200 mr-2">
                        <Text>{category}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
          <View className="mt-3 space-y-4">
            <Text
              className="ml-4 text-lg font-bold"
              style={{ color: storeColors.text }}>
              Featured Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {featured.map((item, index) => {
                  return <GameCard key={index} game={item} />;
                })}
              </ScrollView>
            </View>
          </View>
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-2 px-2">
              <Text
                style={{ color: storeColors.text }}
                className="ml-4 text-lg font-bold">
                Top Action Games
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-600 font-bold text-sm">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ height: 320 }}
              showsVerticalScrollIndicator={false}>
              {games.map((game, index) => {
                let bg =
                  game.id == selectedGame
                    ? "rgba(255,255,255,.4)"
                    : "transparent";
                return (
                  <TouchableOpacity
                    style={{ backgroundColor: bg }}
                    onPress={() => setSelectedGame(game.id)}
                    key={index}
                    className="mx-4 p-3 mb-2 flex-row rounded-3xl">
                    <Image
                      source={game.image}
                      style={{ width: 80, aspectRatio: 1 }}
                      className="rounded-2xl"
                    />
                    <View className="flex-1 flex justify-center pl-3 space-y-3">
                      <Text
                        style={{ color: storeColors.text }}
                        className="font-semibold">
                        {game.title}
                      </Text>
                      <View className="flex-row space-x-3">
                        <View className="flex-row items-center space-x-1">
                          <Image
                            className="h-4 w-4 opacity-80"
                            source={require("../../assets/images/fullStar.png")}
                          />
                          <Text className="text-xs text-gray-700">
                            {game.stars} start
                          </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                          <Ionicons
                            name="ios-download-outline"
                            size={18}
                            color="black"
                          />
                          <Text className="text-xs text-gray-700">
                            {game.downloads}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex justify-center items-center">
                      <GradientButton buttonClass="py-2 px-5">
                        <Text>Play</Text>
                      </GradientButton>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StoreScreen;
