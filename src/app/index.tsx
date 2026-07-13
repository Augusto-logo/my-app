import { Text, View } from "react-native";
import { Image } from "expo-image";
import "../../global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAssets } from "expo-asset";
import AnimatedStyleUpdateExample from "@/components/AnimatedStyleUpdateExample";

export default function Index() {
  const [assets, error] = useAssets([
    require("@/assets/images/index/paisagem_2.jpg"),
  ]);

  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="flex-1 w-full bg-white gap-4">
        <AnimatedStyleUpdateExample />
      </View>
    </SafeAreaView>
  );
}
