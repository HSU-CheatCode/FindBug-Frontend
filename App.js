// import App from './src/App';
import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
<<<<<<< Updated upstream
import Router from "./routers";
import HomeDrawer from "@routers/HomeDrawer";
import { NavigationContainer } from "@react-navigation/native";
=======
import Router from "./routers/Stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerRouter from "./routers/Drawer";
import Toast from "react-native-toast-message";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Router />
        <HomeDrawer />
        <StatusBar />
      </SafeAreaView>
    </NavigationContainer>
=======
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <DrawerRouter />
          <StatusBar />
        </SafeAreaView>
      </NavigationContainer>
      <Toast />
    </>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
