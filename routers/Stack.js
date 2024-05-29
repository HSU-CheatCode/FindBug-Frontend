import React from "react";

import BugsExistPage from "components/pages/my-shop-detail/bugs-exist-page/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/pages/home";
import MyPageScreen from "../Screens/MyPageScreen";
import DetectedVideoScreen from "../Screens/DetectedVideoScreen";
import ModifyCameraInfoScreen from "../Screens/ModifyCameraInfoScreen";
import ModifyUserInfoScreen from "../Screens/ModifyUserInfoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { BLACK, WHITE } from "@styles/color";
import HeaderLeftButton from "@components/HeaderLeftButton";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: "center",
        headerTintColor: BLACK,
        headerStyle: { fontWeight: "700" },
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      {/* 메인페이지 */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* 마이페이지 */}
      <Stack.Screen name="MyPage" component={MyPageScreen} />
      {/* 마이페이지 감지영상 */}
      <Stack.Screen
        name="DetectedVideoScreen"
        component={DetectedVideoScreen}
      />
      {/* 마이페이지 카메라 정보 수정 */}
      <Stack.Screen
        name="ModifyCameraInfoScreen"
        component={ModifyCameraInfoScreen}
      />
      {/* 마이페이지 회원 정보 수정 */}
      <Stack.Screen
        name="ModifyUserInfoScreen"
        component={ModifyUserInfoScreen}
      />
    </Stack.Navigator>
  );
};

export default StackRouter;
