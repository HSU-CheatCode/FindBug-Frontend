import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
const logo = require('@assets/icons/home_logo.png');
const loginIcon = require('@assets/icons/login_icon.png');
const burger = require('@assets/icons/burger_icon.png');

import { ColorStyle } from 'styles/color';
import VerticalBlank from 'components/atoms/VerticalBlank';

const HomeHeader = ({ navigation }) => {
    const [login, setLogin] = useState(false); // 로그인 상태에 따라 로그인 버튼 / 프로파일 이미지
    return React.createElement(
        View,
        { style: styles.container },
        React.createElement(Image, { source: logo, style: styles.logoImage }),
        React.createElement(
            View,
            { style: styles.row },
            !login
                ? React.createElement(
                      TouchableOpacity,
                      { style: styles.loginButton },
                      React.createElement(Text, { style: styles.loginText }, '로그인')
                  )
                : React.createElement(Image, { source: loginIcon, style: styles.loginImage }),
            React.createElement(VerticalBlank, { width: 15 }),
            React.createElement(
                TouchableOpacity,
                { onPress: () => navigation.openDrawer() },
                React.createElement(Image, { source: burger, style: { width: 24, height: 24 } })
            )
        )
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 30,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: ColorStyle.White,
    },
    logoImage: {
        width: 33,
        height: 30,
    },
    loginImage: {
        width: 24,
        height: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: ColorStyle.Blue2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
    },
    loginText: {
        color: ColorStyle.White,
        fontSize: 14,
        letterSpacing: -0.32,
        lineHeight: 16.94,
    },
});
