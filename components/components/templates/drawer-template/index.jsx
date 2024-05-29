import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ColorStyle } from "styles/color";
import { TypoStyle } from "styles/font";

const DATA = [
  { title: "메인", navigation: "Home" },
  { title: "내 가게 보기", navigation: "MyShop" },
  { title: "마이페이지", navigation: "StackRouter" }, // 마이페이지 작업 시 route 이름 추가 필요
];

// 햄버거바 화면
const DrawerTemplate = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {DATA.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.navigation)}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DrawerTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: ColorStyle.White,
  },
  title: {
    fontSize: 20,
    lineHeight: 29.05,
    letterSpacing: -0.32,
    color: ColorStyle.Black,
    fontFamily: TypoStyle.SemiBold,
    paddingBottom: 30,
  },
});
