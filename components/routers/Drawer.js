import { createDrawerNavigator } from "@react-navigation/drawer";
import MyShop from "../components/pages/my-shop";
import MyPageScreen from "../Screens/MyPageScreen";
import Home from "../components/pages/home";
import DrawerTemplate from "../components/templates/drawer-template";
import StackRouter from "./Stack";

const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerTemplate {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: "HOME" }}
      />
      <Drawer.Screen
        name="StackRouter"
        component={StackRouter}
        options={{ drawerLabel: "STACKROUTER" }}
      />
      <Drawer.Screen
        name="MyShop"
        component={MyShop}
        options={{ drawerLabel: "MYSHOP" }}
      />
      {/* <Drawer.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ drawerLabel: "MYPAGESREEN" }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerRouter;
