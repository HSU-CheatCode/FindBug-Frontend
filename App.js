// import App from './src/App';
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import Router from "./routers/Stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerRouter from "./routers/Drawer";
import Toast from "react-native-toast-message";

export default function App() {
  // 폰트 적용
  const [fontsLoaded, fontError] = useFonts({
    Pretendard: require("./assets/fonts/Pretendard-Black.otf"),
    Bold: require("./assets/fonts/Pretendard-Bold.otf"),
    Medium: require("./assets/fonts/Pretendard-Medium.otf"),
    Regular: require("./assets/fonts/Pretendard-Regular.otf"),
    SemiBold: require("./assets/fonts/Pretendard-SemiBold.otf"),
  });

  if (!fontsLoaded && !fontError) return null;
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <DrawerRouter />
          <StatusBar />
        </SafeAreaView>
      </NavigationContainer>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
