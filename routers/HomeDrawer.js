import Home from "@components/pages/home";
import HomeHeader from "@components/pages/home/home-header";
import DrawerTemplate from "@components/templates/drawer-template";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <DrawerTemplate />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="HomeHeader" component={HomeHeader} />
      <Drawer.Screen name="DrawerTemplate" component={DrawerTemplate} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
