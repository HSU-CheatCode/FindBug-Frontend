
// import React from 'react';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { ColorStyle } from 'styles/color';
// import { TypoStyle } from 'styles/font';
// import dayjs from 'dayjs';
// // import bugsImage from '@assets/images/bugs_image.png';
// const bugsImage = require('@assets/images/bugs_image.png');
// import BugsKillSection from './BugsKillSection';
// import DetectedVideoScreen from 'Screens/DetectedVideoScreen';

// const DATA = [
//     {
//         name: '지네',
//         feature: '독을 가지고 있음',
//         life: '2년에서 5년 생존',
//     },
//     {
//         name: '바퀴벌레',
//         feature: '식중독을 일으킬 수 있음',
//         life: '6개월 에서 1년 생존',
//     },
//     {
//         name: '집게벌레',
//         feature: '물릴 수 있음',
//         life: '약 7개월 생존',
//     },
//     {
//         name: '다지류',
//         feature: '독을 가지고 있을 수\n있고, 병균을 옮김',
//         life: '2년에서 5년 생존',
//     },
//     {
//         name: '그리마',
//         feature: '독을 가지고 있으며\n사람을 물 수 있음',
//         life: '3년에서 7년 생존',
//     },
//     {
//         name: '좀벌레',
//         feature: '병균을 옮김',
//         life: '3년 정도 생존',
//     },
// ];

// const BugsExistPage = () => {
//     const now = dayjs().format('YYYY-MM-DD HH:MM');
//     return (
//         <View style={{ flex: 1, backgroundColor: '#fff' }}>
//             <ScrollView contentContainerStyle={styles.container}>
//                 <HorizontalBlank height={12} />
//                 <Text style={styles.normalText}>매장에 벌레가 나타났습니다!</Text>
//                 <HorizontalBlank height={30} />
//                 <Text style={styles.semiBoldText}>우리 가게에 나타난 해충</Text>
//                 <HorizontalBlank height={5} />
//                 <Text style={styles.normal14Text}>우리 가게에 나타난 해충을 확인하세요! 박멸 방법도 알려드립니다</Text>
//                 <View style={styles.imageWrapper}>
//                     <Image source={bugsImage} resizeMode="contain" style={[styles.bugImage, { flex: 1 }]} />
//                     {/* 벌레 종류에 따라 해당 값 들어가게 만들기 */}
//                     <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 20 }}>
//                         <Text style={styles.bold15Text}>지네</Text>
//                         <HorizontalBlank height={15} />
//                         <Text style={styles.normal14Text}>독을 가지고 있음</Text>
//                         <HorizontalBlank height={10} />
//                         <Text style={styles.normal14Text}>2년에서 5년 생존</Text>
//                     </View>
//                 </View>
//                 {/* 카메라 종류와 발견 시간에 따라 해당 값 변경하기*/}
//                 <View style={styles.cameraWrapper}>
//                     <View style={styles.center}>
//                         <Text style={styles.bold15Text}>cam1</Text>
//                         <HorizontalBlank height={15} />
//                         <Text style={styles.normal14Text}>발견 카메라</Text>
//                     </View>
//                     <View style={styles.divider} />
//                     <View style={styles.center}>
//                         <Text style={styles.bold15Text}>{now}</Text>
//                         <HorizontalBlank height={15} />
//                         <Text style={styles.normal14Text}>발견 시간</Text>
//                     </View>
//                 </View>
//                 <HorizontalBlank height={40} />
//                 <BugsKillSection />
//                 {/* 마이페이지 영상보기 연결하는 부분 */}

//                 <TouchableOpacity style={styles.button} onPress={() => navigate( DetectedVideoScreen )}>
//                     <Text style={styles.buttonText}>발견 영상 보기</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </View>
//     );
// };

// export default BugsExistPage;

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 17,
//         paddingBottom: 50,
//     },
//     imageWrapper: {
//         flexDirection: 'row',
//         paddingVertical: 30,
//     },
//     center: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     divider: {
//         width: 1,
//         backgroundColor: '#EBEBEB',
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
//     bold15Text: {
//         fontFamily: TypoStyle.Bold,
//         fontSize: 15,
//         lineHeight: 17.9,
//         letterSpacing: -0.32,
//         color: '#191919',
//     },
//     bugImage: {
//         width: 92.48,
//         height: 109,
//     },
// });

<<<<<<< Updated upstream
import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
=======
// 헤더 추가하는 수정해봄

// import React, { useEffect } from 'react';
// import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import { ColorStyle } from 'styles/color';
// import { TypoStyle } from 'styles/font';
// import dayjs from 'dayjs';
// const bugsImage = require('@assets/images/bugs_image.png');
// import BugsKillSection from './BugsKillSection';

// const DATA = [
//     {
//         name: '지네',
//         feature: '독을 가지고 있음',
//         life: '2년에서 5년 생존',
//     },
//     {
//         name: '바퀴벌레',
//         feature: '식중독을 일으킬 수 있음',
//         life: '6개월 에서 1년 생존',
//     },
//     {
//         name: '집게벌레',
//         feature: '물릴 수 있음',
//         life: '약 7개월 생존',
//     },
//     {
//         name: '다지류',
//         feature: '독을 가지고 있을 수\n있고, 병균을 옮김',
//         life: '2년에서 5년 생존',
//     },
//     {
//         name: '그리마',
//         feature: '독을 가지고 있으며\n사람을 물 수 있음',
//         life: '3년에서 7년 생존',
//     },
//     {
//         name: '좀벌레',
//         feature: '병균을 옮김',
//         life: '3년 정도 생존',
//     },
// ];

// const BugsExistPage = () => {
//     const navigation = useNavigation();
//     const now = dayjs().format('YYYY-MM-DD HH:MM');

//     useEffect(() => {
//         navigation.setOptions({
//             headerTitle: '나의 가게',
//             headerTitleAlign: 'center',
//             headerTintColor: '#000',
//             headerStyle: { backgroundColor: '#fff' },
//         });
//     }, [navigation]);

//     return (
//         <View style={{ flex: 1, backgroundColor: '#fff' }}>
//             <ScrollView contentContainerStyle={styles.container}>
//                 <HorizontalBlank height={12} />
//                 <Text style={styles.normalText}>매장에 벌레가 나타났습니다!</Text>
//                 <HorizontalBlank height={30} />
//                 <Text style={styles.semiBoldText}>우리 가게에 나타난 해충</Text>
//                 <HorizontalBlank height={5} />
//                 <Text style={styles.normal14Text}>우리 가게에 나타난 해충을 확인하세요! 박멸 방법도 알려드립니다</Text>
//                 <View style={styles.imageWrapper}>
//                     <Image source={bugsImage} resizeMode="contain" style={[styles.bugImage, { flex: 1 }]} />
//                     <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 20 }}>
//                         <Text style={styles.bold15Text}>지네</Text>
//                         <HorizontalBlank height={15} />
//                         <Text style={styles.normal14Text}>독을 가지고 있음</Text>
//                         <HorizontalBlank height={10} />
//                         <Text style={styles.normal14Text}>2년에서 5년 생존</Text>
//                     </View>
//                 </View>
//                 <View style={styles.cameraWrapper}>
//                     <View style={styles.center}>
//                         <Text style={styles.bold15Text}>cam1</Text>
//                         <HorizontalBlank height={15} />
//                         <Text style={styles.normal14Text}>발견 카메라</Text>
//                     </View>
//                     <View style={styles.divider} />
//                     <View style={styles.center}>
//                         <Text style={styles.bold15Text}>{now}</Text>
//                         <HorizontalBlank height={15} />
//                         <Text style={styles.normal14Text}>발견 시간</Text>
//                     </View>
//                 </View>
//                 <HorizontalBlank height={40} />
//                 <BugsKillSection />
//                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetectedVideoScreen')}>
//                     <Text style={styles.buttonText}>발견 영상 보기</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </View>
//     );
// };

// export default BugsExistPage;

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 17,
//         paddingBottom: 50,
//     },
//     imageWrapper: {
//         flexDirection: 'row',
//         paddingVertical: 30,
//     },
//     center: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     divider: {
//         width: 1,
//         backgroundColor: '#EBEBEB',
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
//     bold15Text: {
//         fontFamily: TypoStyle.Bold,
//         fontSize: 15,
//         lineHeight: 17.9,
//         letterSpacing: -0.32,
//         color: '#191919',
//     },
//     bugImage: {
//         width: 92.48,
//         height: 109,
//     },
// });

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
>>>>>>> Stashed changes
import { useNavigation } from '@react-navigation/native';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';
<<<<<<< Updated upstream
import dayjs from 'dayjs';
const bugsImage = require('@assets/images/bugs_image.png');
=======
import axios from 'axios';
>>>>>>> Stashed changes
import BugsKillSection from './BugsKillSection';

const BugsExistPage = () => {
    const navigation = useNavigation();
<<<<<<< Updated upstream
    const now = dayjs().format('YYYY-MM-DD HH:MM');
=======
    const [loading, setLoading] = useState(true);
    const [bugData, setBugData] = useState(null);
    const [cameraData, setCameraData] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '나의 가게',
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerStyle: { backgroundColor: '#fff' },
        });

        // Fetch data from the domain
        const fetchData = async () => {
            try {
                const response = await axios.get('http://findbugs.kro.kr/myShopPage/1/detected');
                const { bugInfoDto, alarmInfoDto } = response.data;
                setBugData(bugInfoDto);
                setCameraData(alarmInfoDto);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                Alert.alert('Network Error', 'There was an error fetching data. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!bugData || !cameraData) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>데이터를 불러오는데 실패했습니다. 나중에 다시 시도해주세요.</Text>
            </View>
        );
    }

>>>>>>> Stashed changes
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <HorizontalBlank height={12} />
                <Text style={styles.normalText}>매장에 벌레가 나타났습니다!</Text>
                <HorizontalBlank height={30} />
                <Text style={styles.semiBoldText}>우리 가게에 나타난 해충</Text>
                <HorizontalBlank height={5} />
                <Text style={styles.normal14Text}>우리 가게에 나타난 해충을 확인하세요! 박멸 방법도 알려드립니다</Text>
                <View style={styles.imageWrapper}>
<<<<<<< Updated upstream
                    <Image source={bugsImage} resizeMode="contain" style={[styles.bugImage, { flex: 1 }]} />
=======
                    <Image source={{ uri: bugData.imageUrl }} resizeMode="contain" style={[styles.bugImage, { flex: 1 }]} />
>>>>>>> Stashed changes
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 20 }}>
                        <Text style={styles.bold15Text}>{bugData.title}</Text>
                        <HorizontalBlank height={15} />
                        <Text style={styles.normal14Text}>{bugData.description}</Text>
                    </View>
                </View>
                <View style={styles.cameraWrapper}>
                    <View style={styles.center}>
                        <Text style={styles.bold15Text}>{cameraData.cameraName}</Text>
                        <HorizontalBlank height={15} />
                        <Text style={styles.normal14Text}>발견 카메라</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.center}>
                        <Text style={styles.bold15Text}>{cameraData.detectedDate}</Text>
                        <HorizontalBlank height={15} />
                        <Text style={styles.normal14Text}>발견 시간</Text>
                    </View>
                </View>
                <HorizontalBlank height={40} />
                <BugsKillSection />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetectedVideoScreen')}>
                    <Text style={styles.buttonText}>발견 영상 보기</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default BugsExistPage;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingBottom: 50,
    },
    imageWrapper: {
        flexDirection: 'row',
        paddingVertical: 30,
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        width: 1,
        backgroundColor: '#EBEBEB',
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
    bold15Text: {
        fontFamily: TypoStyle.Bold,
        fontSize: 15,
        lineHeight: 17.9,
        letterSpacing: -0.32,
        color: '#191919',
    },
    bugImage: {
        width: 92.48,
        height: 109,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    errorText: {
        fontFamily: TypoStyle.Regular,
        fontSize: 16,
        color: '#ff0000',
    },
});
