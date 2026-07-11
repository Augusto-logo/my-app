import { Text, View } from "react-native";
import "../../global.css"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}