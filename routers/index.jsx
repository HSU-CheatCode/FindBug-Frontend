import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerTemplate from "components/templates/drawer-template";
import Home from "components/pages/home";
import MyShop from "components/pages/my-shop";
import MyShopDetail from "components/pages/my-shop-detail";
import MyPageScreen from "Screens/MyPageScreen";
import DetectedVideoScreen from "Screens/DetectedVideoScreen";
import ModifyCameraInfoScreen from "Screens/ModifyCameraInfoScreen";
import ModifyUserInfoScreen from "Screens/ModifyUserInfoScreen";

import BugsExistPage from "components/pages/my-shop-detail/bugs-exist-page/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createNativeStackNavigator();

const Router = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <DrawerTemplate />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      {/* 메인페이지 */}
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      {/* 나의 가게 페이지 */}
      <Drawer.Screen name="MyShop" component={MyShop} />
      {/* 나의 가게 상세 페이지 */}
      <Drawer.Screen name="MyShopDetail" component={MyShopDetail} />
      {/* 마이페이지 */}
      <Drawer.Screen name="MyPage" component={MyPageScreen} />
      {/* 마이페이지 감지영상 */}
      <Drawer.Screen
        name="DetectedVideoScreen"
        component={DetectedVideoScreen}
      />
      {/* 마이페이지 카메라 정보 수정 */}
      <Drawer.Screen
        name="ModifyCameraInfoScreen"
        component={ModifyCameraInfoScreen}
      />
      {/* 마이페이지 회원 정보 수정 */}
      <Drawer.Screen
        name="ModifyUserInfoScreen"
        component={ModifyUserInfoScreen}
      />
      {/* 마이페이지 회원 정보 수정 */}
      <Drawer.Screen name="BugsExistPage" component={BugsExistPage} />
    </Drawer.Navigator>
  );
};

export default Router;
