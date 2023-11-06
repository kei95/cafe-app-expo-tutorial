import { Dimensions, Image, View, TouchableOpacity } from "react-native";
import { PlusIcon, StarIcon } from "react-native-heroicons/solid";

import { Text } from "components/Text";
import { THEME_COLORS } from "constants/designTokens";
import { Coffee } from "constants/coffeeItems";

const { height } = Dimensions.get("window");

export const CARD_HEIGHT = height * 0.6;

export function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <View
      className={`rounded-3xl w-80 self-center bg-bgDark shadow-xl shadow-black/75`}
    >
      <View
        className={`h-60 w-60 flex-row justify-center -mt-20 rounded-full self-center bg-white shadow-md shadow-black/75`}
      >
        <Image source={coffee.image} className=" h-60 w-60 bg-slate-50" />
      </View>

      {/* Card body */}
      <View className="px-lg pt-md">
        <Text variant="title" styleClass="text-white">
          {coffee.name}
        </Text>

        {/* Coffee Review */}
        <View className="items-start pt-sm">
          <View className=" p-sm bg-textBackground flex-row items-center rounded-3xl py-base">
            <StarIcon size="15" color="white" />
            <Text variant="base" styleClass="text-white">
              {coffee.stars}
            </Text>
          </View>
        </View>

        {/* Coffee volume */}
        <View className=" flex-row space-x-1 pt-sm">
          <Text variant="base" styleClass="text-white opacity-60">
            Volume:
          </Text>
          <Text variant="base" styleClass="text-white">
            {coffee.volume}
          </Text>
        </View>

        {/* Coffee price */}
        <View className="flex-row justify-between items-center py-xxxl">
          <Text variant="md" styleClass="text-white">
            $ {coffee.price}
          </Text>
          <TouchableOpacity className="bg-white p-md rounded-full">
            <PlusIcon size={25} strokeWidth={2} color={THEME_COLORS.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
