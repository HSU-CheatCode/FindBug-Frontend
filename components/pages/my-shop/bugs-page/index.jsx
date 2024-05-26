import HorizontalBlank from 'components/atoms/HorizontalBlank';

const angry = require('@assets/icons/angry_icon.png');
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';
import { RouteParamList } from 'routers/type';

// 벌레 존재할 때 나의 가게 페이지 화면
const BugsPage = () => {
    const { navigate } = useNavigation();
    return (
        <LinearGradient colors={['#fff', '#FF1E46']} style={styles.container}>
            <Text style={styles.normalText}>현재 매장에 벌레가 </Text>
            <Text style={styles.redBoldText}>나타났습니다</Text>
            <HorizontalBlank height={30} />
            <Image style={styles.redImage} source={angry} />
            <HorizontalBlank height={40} />
            <Text style={styles.redSemiBoldText}>벌레가 나타났어요!</Text>
            <HorizontalBlank height={120} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate(RouteParamList.MyShopDetail, { bugs: true })}
            >
                <Text style={styles.buttonText}>해충 정보 보러가기</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default BugsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
    },
    
    button: {
        paddingVertical: 24,
        paddingHorizontal: 40,
        backgroundColor: ColorStyle.Red2,
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
    redBoldText: {
        color: '#FF1E46',
        fontSize: 50,
        fontFamily: TypoStyle.Bold,
        lineHeight: 59.67,
        textAlign: 'center',
        letterSpacing: -0.32,
    },
    redImage: {
        width: 80,
        height: 80,
    },
    redSemiBoldText: {
        color: '#FF1E46',
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
