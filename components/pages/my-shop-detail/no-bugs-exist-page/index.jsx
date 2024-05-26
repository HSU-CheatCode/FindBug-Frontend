// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
// import { ColorStyle } from 'styles/color';
// import { TypoStyle } from 'styles/font';
// // import bugsImage from '@assets/images/bugs_image.png';
// const bugsImage = require('@assets/images/bugs_image.png');
// import VerticalBlank from 'components/atoms/VerticalBlank';
// import BugsInflowSection from './BugsInflowSection';
// import BugsPreventionSection from './BugsPreventionSection';

// const NoBugsExistPage = () => {
//     return (
//         <View style={{ flex: 1, backgroundColor: '#fff' }}>
//             <ScrollView contentContainerStyle={styles.container}>
//                 <HorizontalBlank height={12} />
//                 <View style={styles.row}>
//                     <Text style={styles.normalText}>우리 가게 청결도</Text>
//                     <VerticalBlank width={10} />
//                     <Text style={styles.semiBoldText}>좋음</Text>
//                 </View>
//                 <HorizontalBlank height={20} />
//                 <Text style={styles.semiBoldText}>해충 예방 방법</Text>
//                 <HorizontalBlank height={5} />
//                 <Text style={styles.normal14Text}>우리 가게에서 나타나기 쉬운 벌레 예방 방법을 알려드립니다.</Text>
//                 <View style={styles.imageWrapper}>
//                     <Image source={bugsImage} resizeMode="contain" style={[styles.bugImage, { flex: 1 }]} />
//                     <View style={{ flex: 1, justifyContent: 'center' }}>
//                         <Text style={styles.bold14Text}>집안에서 볼 수 있는 벌레 특징</Text>
//                         <HorizontalBlank height={15} />
//                         <View style={styles.row}>
//                             <Text style={styles.bold14Text}>번식력</Text>
//                             <VerticalBlank width={10} />
//                             <Text style={styles.normal14Text}>높음</Text>
//                         </View>
//                         <HorizontalBlank height={15} />
//                         <View style={styles.row}>
//                             <Text style={styles.bold14Text}>질병</Text>
//                             <VerticalBlank width={10} />
//                             <Text style={styles.normal14Text}>여러 전염병 유발</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <BugsInflowSection />
//                 <HorizontalBlank height={80} />
//                 <BugsPreventionSection />
//             </ScrollView>
//         </View>
//     );
// };

// export default NoBugsExistPage;

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 17,
//         paddingBottom: 50,
//     },
//     imageWrapper: {
//         flexDirection: 'row',
//         paddingVertical: 40,
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     center: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     button: {
//         backgroundColor: '#2C48DA',
//         padding: 16,
//         borderRadius: 12,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     buttonText: {
//         fontFamily: TypoStyle.SemiBold,
//         color: ColorStyle.White,
//         letterSpacing: -0.32,
//         fontSize: 16,
//         lineHeight: 22.4,
//     },
//     cameraWrapper: {
//         backgroundColor: '#F5F5F5',
//         borderRadius: 16,
//         flexDirection: 'row',
//         paddingVertical: 24,
//     },
//     normalText: {
//         fontFamily: TypoStyle.Regular,
//         fontSize: 16,
//         lineHeight: 19.09,
//         letterSpacing: -0.32,
//         color: '#191919',
//     },
//     normal14Text: {
//         fontFamily: TypoStyle.Regular,
//         fontSize: 14,
//         lineHeight: 16.71,
//         letterSpacing: -0.32,
//         color: '#191919',
//     },
//     semiBoldText: {
//         fontFamily: TypoStyle.SemiBold,
//         fontSize: 20,
//         lineHeight: 23.87,
//         letterSpacing: -0.32,
//         color: '#191919',
//     },
//     bold14Text: {
//         fontFamily: TypoStyle.Bold,
//         fontSize: 14,
//         lineHeight: 17.9,
//         letterSpacing: -0.32,
//         color: '#191919',
//     },
//     bugImage: {
//         width: 92.48,
//         height: 109,
//     },
// });


import React from 'react';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';
const bugsImage = require('@assets/images/bugs_image.png');
import VerticalBlank from 'components/atoms/VerticalBlank';
import BugsInflowSection from './BugsInflowSection';
import BugsPreventionSection from './BugsPreventionSection';

const NoBugsExistPage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <HorizontalBlank height={12} />
                <View style={styles.row}>
                    <Text style={styles.normalText}>우리 가게 청결도</Text>
                    <VerticalBlank width={10} />
                    <Text style={styles.semiBoldText}>좋음</Text>
                </View>
                <HorizontalBlank height={20} />
                <Text style={styles.semiBoldText}>해충 예방 방법</Text>
                <HorizontalBlank height={5} />
                <Text style={styles.normal14Text}>우리 가게에서 나타나기 쉬운 벌레 예방 방법을 알려드립니다.</Text>
                <View style={styles.imageWrapper}>
                    <Image source={bugsImage} resizeMode="contain" style={[styles.bugImage, { flex: 1 }]} />
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.bold14Text}>집안에서 볼 수 있는 벌레 특징</Text>
                        <HorizontalBlank height={15} />
                        <View style={styles.row}>
                            <Text style={styles.bold14Text}>번식력</Text>
                            <VerticalBlank width={10} />
                            <Text style={styles.normal14Text}>높음</Text>
                        </View>
                        <HorizontalBlank height={15} />
                        <View style={styles.row}>
                            <Text style={styles.bold14Text}>질병</Text>
                            <VerticalBlank width={10} />
                            <Text style={styles.normal14Text}>여러 전염병 유발</Text>
                        </View>
                    </View>
                </View>
                <BugsInflowSection />
                <HorizontalBlank height={80} />
                <BugsPreventionSection />
            </ScrollView>
        </View>
    );
};

export default NoBugsExistPage;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingBottom: 50,
    },
    imageWrapper: {
        flexDirection: 'row',
        paddingVertical: 40,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2C48DA',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: TypoStyle.SemiBold,
        color: ColorStyle.White,
        letterSpacing: -0.32,
        fontSize: 16,
        lineHeight: 22.4,
    },
    cameraWrapper: {
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        flexDirection: 'row',
        paddingVertical: 24,
    },
    normalText: {
        fontFamily: TypoStyle.Regular,
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.32,
        color: '#191919',
    },
    normal14Text: {
        fontFamily: TypoStyle.Regular,
        fontSize: 14,
        lineHeight: 16.71,
        letterSpacing: -0.32,
        color: '#191919',
    },
    semiBoldText: {
        fontFamily: TypoStyle.SemiBold,
        fontSize: 20,
        lineHeight: 23.87,
        letterSpacing: -0.32,
        color: '#191919',
    },
    bold14Text: {
        fontFamily: TypoStyle.Bold,
        fontSize: 14,
        lineHeight: 17.9,
        letterSpacing: -0.32,
        color: '#191919',
    },
    bugImage: {
        width: 92.48,
        height: 109,
    },
});

