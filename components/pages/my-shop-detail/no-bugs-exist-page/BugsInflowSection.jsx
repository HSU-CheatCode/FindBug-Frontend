// import { View, StyleSheet, Text, Image } from 'react-native';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import { Fragment } from 'react';
// import { TypoStyle } from 'styles/font';
// const image1 = require('@assets/images/image_268.png');
// const image2 = require('@assets/images/image_279.png');
// const image3 = require('@assets/images/image_280.png');

// const DATA = [
//     {
//         title: '배수관',
//         subTitle: '연결된 배수관을 \n 통해 벌레가 유입될 수 있어요.\n청소를 자주 해주세요!',
//         image: image1,
//     },
//     {
//         title: '신문 및 박스',
//         subTitle:'종이류를 방치하지 마세요!\n새로운 종이류를 가져올 때\n바퀴류가 없는지 확인하세요!',
//             image: image2,
//     },
//     {
//         title: '출입문 및 문하부 틈새',
//         subTitle:
//             '문틈으로 벌레가\n 침투할 수 있어요! \n방충망을 꼭 사용하세요!',
//             image: image3,
//     },
// ];

// const BugsInflowSection = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.sectionTitle}>해충 출몰 장소 TOP3 </Text>
//             <HorizontalBlank height={10} />
//             {DATA.map((item, index) => {
//                 return (
//                     <Fragment key={index}>
//                         <View style={styles.row}>
//                             <Image source={item.image} style={styles.image} />
//                             <View style={styles.ellipseParent}>
//                                 <Image style={styles.frameLayout} resizeMode="cover" source="image_500.png" />
//                                 <Text style={styles.text} numberOfLines={1}>신문 및 박스</Text>
//                                 <Image style={[styles.frameItem, styles.frameLayout]} resizeMode="cover" source="image_500.png" />
//                                 </View>
//                             <View style={styles.TextWrapper}>
//                                 <Text style={styles.normalText}>{item.title}</Text>
//                                 <HorizontalBlank height={20} />
//                                 <Text style={styles.subText}>{item.subTitle}</Text>
//                             </View>
//                         </View>
//                         <HorizontalBlank height={40} />
//                     </Fragment>
//                 );
//             })}
//         </View>
//     );
// };

// export default BugsInflowSection;

// const styles = StyleSheet.create({
//     container: {},
//     row: {
//         flexDirection: 'row',
//     },
//     image: {
//         width: 163,
//         height: 123,
//         borderRadius: 15,
//     },

//     frameLayout: {
//         height: 4,
//         width: 4
//         },
    
//     text: {
//         fontSize: 16,
//         letterSpacing: -0.2,
//         lineHeight: 22,
//         fontWeight: "600",
//         fontFamily: "Pretendard",
//         color: "#2b47d9",
//         textAlign: "center",
//         overflow: "hidden",
//         marginLeft: 8
//         },
//         frameItem: {
//         marginLeft: 8
//         },
//         ellipseParent: {
//         borderRadius: 8,
//         backgroundColor: "#ebecf4",
//         flex: 1,
//         width: "100%",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center",
//         paddingHorizontal: 12,
//         paddingVertical: 2
//         },

//     TextWrapper: {
//         flex: 1,
//         paddingLeft: 15,
//         justifyContent: 'center',
//     },
//     sectionTitle: {
//         fontSize: 18,
//         lineHeight: 25.2,
//         letterSpacing: -0.32,
//         fontFamily: TypoStyle.SemiBold,
//         color: '#191919',
//     },
//     normalText: {
//         fontSize: 16,
//         lineHeight: 19.09,
//         letterSpacing: -0.32,
//         fontFamily: TypoStyle.SemiBold,
//         color: '#191919',
//         textAlign: 'center',
//     },
//     subText: {

//         fontSize: 14,
//         lineHeight: 20,
//         letterSpacing: -0.2,
//         fontFamily: TypoStyle.Regular,

//         color: '#191919',
//         textAlign: 'center',
//         maxWidth: "100%",
//         alignSelf: "stretch",
//     },
// });

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import { TypoStyle } from 'styles/font';
const image1 = require('@assets/images/image_305.png');
const image2 = require('@assets/images/image_306.png');
const image3 = require('@assets/images/image_307.png');

const DATA = [
    {
        title: '배수관',
        subTitle: '연결된 배수관을 통해 \n 벌레가 유입될 수 있어요.\n청소를 자주 해주세요!',
        image: image1,
    },
    {
        title: '신문 및 박스',
        subTitle: '종이류를 방치하지 마세요!\n새로운 종이류를 가져올 때 \n 해충이 있는지 확인하세요!',
        image: image2,
    },
    {
        title: '문 아래 틈새',
        subTitle: '문틈으로 벌레가\n 침투할 수 있어요! \n방충망을 꼭 사용하세요!',
        image: image3,
    },
];

const BugsInflowSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>해충 출몰 장소 TOP3</Text>
            <HorizontalBlank height={10} />
            {DATA.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <View style={styles.row}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.textWrapper}>
                                <View style={styles.ellipseParent}>
                                    <Image style={styles.frameLayout} source={require('@assets/images/image_500.png')} />
                                    <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
                                    <Image style={styles.frameLayout} source={require('@assets/images/image_500.png')} />
                                </View>
                                <Text style={styles.subText}>{item.subTitle}</Text>
                            </View>
                        </View>
                        <HorizontalBlank height={40} />
                    </Fragment>
                );
            })}
        </View>
    );
};

export default BugsInflowSection;

const styles = StyleSheet.create({
    container: {},
    row: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    image: {
        width: 163,
        height: 123,
        borderRadius: 15,
    },
    textWrapper: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    ellipseParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: "#ebecf4",
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginBottom: 10,
    },
    frameLayout: {
        height: 4,
        width: 4,
        marginHorizontal: 5,
    },
    text: {
        fontSize: 16,
        letterSpacing: -0.2,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Pretendard",
        color: "#2b47d9",
        textAlign: "center",
        overflow: "hidden",
    },
    sectionTitle: {
        fontSize: 18,
        lineHeight: 25.2,
        letterSpacing: -0.32,
        fontFamily: TypoStyle.SemiBold,
        color: '#191919',
    },
    subText: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.2,
        fontFamily: TypoStyle.Regular,
        color: '#191919',
        textAlign: 'center',
        maxWidth: "100%",
    },
});
