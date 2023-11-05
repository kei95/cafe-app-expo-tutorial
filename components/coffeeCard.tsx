import { Dimensions, Image, View, Text, TouchableOpacity } from "react-native";
import { SHADOW_CLASS, THEME_COLORS } from "../constants/styleTheme";
import { Coffee } from "../constants/coffeeItems";
import { PlusIcon, StarIcon } from "react-native-heroicons/solid";

const { height } = Dimensions.get("window");

export const CARD_HEIGHT = height * 0.6;

export function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <View
      className={`${SHADOW_CLASS} rounded-3xl shadow-lg shadow-black/75 w-80 self-center bg-bgDark`}
    >
      <View
        className={`${SHADOW_CLASS} h-60 w-60 flex-row justify-center -mt-20 rounded-full self-center`}
      >
        <Image source={coffee.image} className=" h-60 w-60 bg-slate-50" />
      </View>
      <View className="px-8 pt-4">
        <Text className="text-3xl font-semibold text-white">{coffee.name}</Text>

        {/* Coffee Review */}
        <View className="items-start pt-2">
          <View className=" bg-slate-100/25 flex-row items-center rounded-3xl py-1 px-2">
            <StarIcon size="15" color="white" />
            <Text className="text-white font-semibold text-base">
              {coffee.stars}
            </Text>
          </View>
        </View>

        {/* Coffee volume */}
        <View className=" flex-row space-x-1 pt-2">
          <Text className=" font-semibold text-white text-base opacity-60">
            Volume
          </Text>
          <Text className=" font-semibold text-white text-base">
            {coffee.volume}
          </Text>
        </View>

        {/* Coffee price */}
        <View className="flex-row justify-between items-center">
          <Text className=" text-white font-bold text-lg pt-12 pb-12">
            $ {coffee.price}
          </Text>
          <TouchableOpacity className="bg-white p-4 rounded-full">
            <PlusIcon size={25} strokeWidth={2} color={THEME_COLORS.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
