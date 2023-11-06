import { useState } from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { THEME_COLORS } from "./constants/styleTheme";
import { CATEGORIES } from "./constants/categories";
import { CoffeeCard } from "./components/coffeeCard";
import { COFFEE_ITEMS } from "./constants/coffeeItems";

export default function App() {
  const [activeGenre, setActiveGenre] = useState<number | null>(null);

  return (
    <View className="flex-1 relative bg-white">
      <Image
        source={require("./assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10 h-56"
      />
      <SafeAreaView className="flex-1">
        {/* Header? */}
        <View className="px-md flex-row justify-between items-center">
          <Image
            source={require("./assets/images/avatar.png")}
            className="h-9 w-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={THEME_COLORS.bgLight} />
            <Text className="text-base font-semibold">New York, NYC</Text>
          </View>
          <BellIcon size="27" color={"#000000"} />
        </View>

        {/* Status Bar */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-md flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity className={`rounded-full p-sm bg-bgLight`}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories horizontal list */}
        <View className=" px-lg mt-lg">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CATEGORIES}
            keyExtractor={(category) => `${category.id}`}
            className=" overflow-visible"
            renderItem={({ item }) => {
              const isActive = item.id === activeGenre;
              const textClassName = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => {
                    const selectedIndex =
                      item.id === activeGenre ? null : item.id;
                    setActiveGenre(selectedIndex);
                  }}
                  style={{
                    backgroundColor: isActive
                      ? THEME_COLORS.bgLight
                      : THEME_COLORS.textBackground,
                  }}
                  className="p-md px-lg rounded-full mr-2"
                >
                  <Text className={`font-semibold ${textClassName}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* coffee cards */}
        <View className="py-sm">
          <Carousel
            loop
            mode="parallax"
            width={Dimensions.get("screen").width}
            data={COFFEE_ITEMS}
            modeConfig={{
              parallaxScrollingOffset: 160,
            }}
            renderItem={({ item }) => <CoffeeCard coffee={item} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
