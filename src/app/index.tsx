import { Text, View } from "react-native";
import { Image } from "expo-image";
import "../../global.css"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAssets } from "expo-asset";

export default function Index() {
  const [assets, error] = useAssets([
    require("@/assets/images/index/paisagem_2.jpg"),
  ]);

  return (
      <SafeAreaView className="flex-1 items-center">
        <View className="flex-1 items-center bg-white gap-4">
          <Text className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni recusandae odio totam. Necessitatibus, sunt iure! Veniam voluptas numquam, cupiditate provident voluptatem eius rem iste illum, eum sint itaque modi!</Text>
          <Image 
          contentFit="cover"
          style={{ width: 300, height: 300, borderRadius: 10 }}
          source={require("@/assets/images/index/paisagem_1.jpg")}
          className=""
          />

          <Image
          contentFit="cover"
          style={{ width: 300, height: 300, borderRadius: 10 }}
          source={{uri: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"}}
          className=""
          />
          
          
        </View>
      </SafeAreaView>
    
  );
}