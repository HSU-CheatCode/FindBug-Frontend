<<<<<<< Updated upstream
import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
=======
// import React, { useState } from 'react';
// import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
// const logo = require('@assets/icons/home_logo.png');
// const loginIcon = require('@assets/icons/login_icon.png');
// const burger = require('@assets/icons/burger_icon.png');

// import { ColorStyle } from 'styles/color';
// import VerticalBlank from 'components/atoms/VerticalBlank';

// const HomeHeader = ({ navigation }) => {
//     const [login, setLogin] = useState(false); // 로그인 상태에 따라 로그인 버튼 / 프로파일 이미지
//     return React.createElement(
//         View,
//         { style: styles.container },
//         React.createElement(Image, { source: logo, style: styles.logoImage }),
//         React.createElement(
//             View,
//             { style: styles.row },
//             !login
//                 ? React.createElement(
//                       TouchableOpacity,
//                       { style: styles.loginButton },
//                       React.createElement(Text, { style: styles.loginText }, '로그인')
//                   )
//                 : React.createElement(Image, { source: loginIcon, style: styles.loginImage }),
//             React.createElement(VerticalBlank, { width: 15 }),
//             React.createElement(
//                 TouchableOpacity,
//                 { onPress: () => navigation.openDrawer() },
//                 React.createElement(Image, { source: burger, style: { width: 24, height: 24 } })
//             )
//         )
//     );
// };

// export default HomeHeader;


// < 1차 오류 수정>


import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text,TypoStyle } from 'react-native';
>>>>>>> Stashed changes
const logo = require('@assets/icons/home_logo.png');
const loginIcon = require('@assets/icons/login_icon.png');
const burger = require('@assets/icons/burger_icon.png');

import { ColorStyle } from 'styles/color';
import VerticalBlank from 'components/atoms/VerticalBlank';

const HomeHeader = ({ navigation }) => {
    const [login, setLogin] = useState(false); // 로그인 상태에 따라 로그인 버튼 / 프로파일 이미지
<<<<<<< Updated upstream
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
=======
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logoImage} resizeMode="contain" />
            <View style={styles.row}>
                {!login ? (
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>로그인</Text>
                    </TouchableOpacity>
                ) : (
                    <Image source={loginIcon} style={styles.loginImage} />
                )}
                <VerticalBlank width={15} />
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={burger} style={styles.burgerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: ColorStyle.headerBackground,
        height: 60,
    },
    logoImage: {
        width: 100,
        height: 40,
>>>>>>> Stashed changes
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginButton: {
<<<<<<< Updated upstream
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
=======
        width: 61,
        height: 34,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: ColorStyle.Blue3,
        borderRadius: 4,
    },
    loginText: {
        color: '#FFFFFF',
        fontSize:14,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: -0.32,

    },
    loginImage: {
        width: 30,
        height: 30,
    },
    burgerIcon: {
        width: 24,
        height: 24,
    },
});

export default HomeHeader;

// // axios를 추가한 첫 번째 

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
// import axios from 'axios';

// const logo = require('@assets/icons/home_logo.png');
// const loginIcon = require('@assets/icons/login_icon.png');
// const burger = require('@assets/icons/burger_icon.png');

// import { ColorStyle } from 'styles/color';
// import VerticalBlank from 'components/atoms/VerticalBlank';

// const HomeHeader = ({ navigation }) => {
//     const [login, setLogin] = useState(false);

//     useEffect(() => {
//         axios.get('/api/auth/status')
//             .then(response => {
//                 setLogin(response.data.loggedIn);
//             })
//             .catch(error => {
//                 console.error("Login check failed:", error);
//             });
//     }, []);

//     const handleLogin = () => {
//         navigation.navigate('LoginScreen');
//     };

//     return (
//         <View style={styles.container}>
//             <Image source={logo} style={styles.logoImage} resizeMode="contain" />
//             <View style={styles.row}>
//                 {!login ? (
//                     <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//                         <Text style={styles.loginText}>로그인</Text>
//                     </TouchableOpacity>
//                 ) : (
//                     <Image source={loginIcon} style={styles.loginImage} />
//                 )}
//                 <VerticalBlank width={15} />
//                 <TouchableOpacity onPress={() => navigation.openDrawer()}>
//                     <Image source={burger} style={styles.burgerIcon} />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: 10,
//         backgroundColor: ColorStyle.headerBackground,
//         height: 60,
//     },
//     logoImage: {
//         width: 100,
//         height: 40,
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     loginButton: {
//         width: 61,
//         height: 34,
//         paddingVertical: 5,
//         paddingHorizontal: 5,
//         backgroundColor: ColorStyle.Blue3,
//         borderRadius: 4,
//     },
//     loginText: {
//         color: '#FFFFFF',
//         fontSize: 14,
//         lineHeight: 22,
//         textAlign: 'center',
//         letterSpacing: -0.32,
//     },
//     loginImage: {
//         width: 30,
//         height: 30,
//     },
//     burgerIcon: {
//         width: 24,
//         height: 24,
//     },
// });

// export default HomeHeader;
>>>>>>> Stashed changes
