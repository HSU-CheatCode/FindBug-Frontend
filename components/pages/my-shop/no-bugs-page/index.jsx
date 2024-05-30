<<<<<<< Updated upstream

=======

// import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import { ColorStyle } from 'styles/color';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// const smile = require('@assets/icons/smile_icon.png');
// import { RouteParamList } from 'routers/type';

// const NoBugsPage = ({ data }) => {
//     const { navigate } = useNavigation();

//     return (
//         <LinearGradient colors={['#fff', '#324FE5']} style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollViewContent}>
//                 <Text style={styles.normalText}>현재 매장에 벌레가</Text>
//                 <Text style={styles.boldText}>없습니다!</Text>
//                 <HorizontalBlank height={30} />
//                 <Image style={styles.image} source={smile} />
//                 <HorizontalBlank height={40} />
//                 <Text style={styles.semiBoldText}>일주일 내에 발견된 해충이 없습니다.</Text>
//                 <HorizontalBlank height={120} />
//                 <View style={styles.bugInfoContainer}>
//                     <Text style={styles.detectedInfoText}>
//                         카메라: {data.detectedInfo.cameraName}
//                     </Text>
//                     <Text style={styles.detectedInfoText}>
//                         감지 일자: {new Date(data.detectedInfo.detectedDate).toLocaleString()}
//                     </Text>
//                 </View>
//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={() => navigate(RouteParamList.MyShopDetail, { bugs: false })}
//                 >
//                     <Text style={styles.buttonText}>해충 예방방법 보러가기</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </LinearGradient>
//     );
// };

// export default NoBugsPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     scrollViewContent: {
//         alignItems: 'center',
//         paddingTop: 80,
//         paddingHorizontal: 20,
//     },
//     button: {
//         paddingVertical: 24,
//         paddingHorizontal: 40,
//         backgroundColor: ColorStyle.Blue3,
//         borderRadius: 16,
//     },
//     normalText: {
//         color: '#191919',
//         fontSize: 24,
//         fontFamily: TypoStyle.Regular,
//         lineHeight: 28.64,
//         textAlign: 'center',
//         letterSpacing: -0.32,
//     },
//     boldText: {
//         color: '#324FE5',
//         fontSize: 50,
//         fontFamily: TypoStyle.Bold,
//         lineHeight: 59.67,
//         textAlign: 'center',
//         letterSpacing: -0.32,
//     },
//     image: {
//         width: 80,
//         height: 80,
//     },
//     semiBoldText: {
//         color: '#324FE5',
//         fontSize: 20,
//         fontFamily: TypoStyle.SemiBold,
//         lineHeight: 23.87,
//         textAlign: 'center',
//         letterSpacing: -0.32,
//     },
//     buttonText: {
//         color: '#FFFFFF',
//         fontSize: 24,
//         fontFamily: TypoStyle.Bold,
//         lineHeight: 28.64,
//         textAlign: 'center',
//         letterSpacing: -0.32,
//     },
//     bugInfoContainer: {
//         alignItems: 'center',
//         width: '100%',
//     },
//     detectedInfoText: {
//         fontSize: 16,
//         color: '#191919',
//         textAlign: 'center',
//         fontFamily: TypoStyle.Regular,
//         marginBottom: 10,
//     },
// });
>>>>>>> Stashed changes


import HorizontalBlank from 'components/atoms/HorizontalBlank';
const smile = require('@assets/icons/smile_icon.png');
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';
import { RouteParamList } from 'routers/type';

// 벌레 존재하지 않을 때 나의 가게 페이지 화면
const NoBugsPage = () => {
    const { navigate } = useNavigation();
    return (
        <LinearGradient colors={['#fff', '#324FE5']} style={styles.container}>
            <Text style={styles.normalText}>현재 매장에 벌레가 </Text>
            <Text style={styles.boldText}>없습니다!</Text>
            <HorizontalBlank height={30} />
            <Image style={styles.image} source={smile} />
            <HorizontalBlank height={40} />
            <Text style={styles.semiBoldText}>일주일 내에 발견된 해충이 없습니다.</Text>
            <HorizontalBlank height={120} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate(RouteParamList.MyShopDetail, { bugs: false })}
            >
                <Text style={styles.buttonText}>해충 예방방법 보러가기</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default NoBugsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
    },
    button: {
        paddingVertical: 24,
        paddingHorizontal: 40,
        backgroundColor: ColorStyle.Blue3,
        borderRadius: 16,
    },
    normalText: {
        color: '#191919',
        fontSize: 24,
        fontFamily: TypoStyle.Regular,
        lineHeight: 28.64,
        textAlign: 'center',
        letterSpacing: -0.32,
    },
    boldText: {
        color: '#324FE5',
        fontSize: 50,
        fontFamily: TypoStyle.Bold,
        lineHeight: 59.67,
        textAlign: 'center',
        letterSpacing: -0.32,
    },
    image: {
        width: 80,
        height: 80,
    },
    semiBoldText: {
        color: '#324FE5',
        fontSize: 20,
        fontFamily: TypoStyle.SemiBold,
        lineHeight: 23.87,
        textAlign: 'center',
        letterSpacing: -0.32,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: TypoStyle.Bold,
        lineHeight: 28.64,
        textAlign: 'center',
        letterSpacing: -0.32,
    },
});
