
import { View, StyleSheet, Text, Image } from 'react-native';

const image1 = require('@assets/images/image_273.png');
const image2 = require('@assets/images/image_274.png');
const image3 = require('@assets/images/image_275.png');
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import { Fragment } from 'react';

const DATA = [
    {
        title: '환경 관리',
        subTitle: '실내 청소와 음식물 관리로 청결을 유지하세요!',
        image: image1,
    },
    {
        title: '트랩 설치',
        subTitle:
            '해충의 수가 적을 때, 유인용 먹이를 넣은 끈끈이 트랩을 은폐된 장소에 배치 하세요',
        image: image2,
    },
    {
        title: '살충제 사용',
        subTitle: '해충 박멸 시 살충제를 사용하여 확실하게 박멸하세요!.',
        image: image3,
    },
];

const BugsKillSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>해충 박멸 방법</Text>
            <HorizontalBlank height={10} />
            {DATA.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <View style={styles.row}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.textWrapper}>
                                <Text style={styles.normalText}>{item.title}</Text>
                                <HorizontalBlank height={20} />
                                <Text style={styles.subText}>{item.subTitle}</Text>
                            </View>
                        </View>
                        <HorizontalBlank height={60} />
                    </Fragment>
                );
            })}
        </View>
    );
};

export default BugsKillSection;

const styles = StyleSheet.create({
    container: {},
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 160,
        height: 123,
        borderRadius: 15,
    },
    textWrapper: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        lineHeight: 25.2,
        letterSpacing: -0.32,
        fontFamily: TypoStyle.SemiBold,
        color: '#191919',
    },
    normalText: {
        fontSize: 16,
        lineHeight: 19.09,
        letterSpacing: -0.32,
        fontFamily: TypoStyle.SemiBold,
        color: '#191919',
    },
    subText: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.32,
        fontFamily: TypoStyle.Regular,
        color: '#191919',
    },
});
