// import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
// // import image1 from '@assets/images/image_265.png';
// // import image2 from '@assets/images/image_283.png';
// // import image3 from '@assets/images/image_284.png';
// // import image4 from '@assets/images/image_284.png';
// const image1 = require('@assets/images/image_265.png');
// const image2 = require('@assets/images/image_283.png');
// const image3 = require('@assets/images/image_303.png');
// const image4 = require('@assets/images/image_304.png');
// import { ColorStyle } from 'styles/color';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import VerticalBlank from 'components/atoms/VerticalBlank';
// import { Fragment } from 'react';

// const DATA = [
//     {
//         title: '해충 확인',
//         subTitle: 'AI를 이용하여 카메라로 확인된 해충을 확인해드립니다.',
//         image: image1,
//     },
//     {
//         title: '솔루션 제공',
//         subTitle: '확인된 해충의 박멸 방법을 알려드립니다.',
//         image: image2,
//     },
//     {
//         title: '저렴한 가격',
//         subTitle: '저렴한 가격으로 해충 박멸이 가능합니다.',
//         image: image3,
//     },
//     {
//         title: '편리한 사용',
//         subTitle: '카메라만 등록하면 쉽게 사용이 가능합니다',
//         image: image4,
//     },
// ];



// // 하단 섹션
// const ScrollSection = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.sectionTitle}>찾아벌레가 제공합니다</Text>
//             <HorizontalBlank height={10} />
//             <ScrollView contentContainerStyle={styles.scrollview} horizontal showsHorizontalScrollIndicator={false}>
//                 {DATA.map((item, index) => {
//                     return (
//                         <Fragment key={index}>
//                             <View style={styles.itemWrap}>
//                                 <Image source={item.image} style={styles.image} />
//                                 <HorizontalBlank height={10} />
//                                 <Text style={styles.title}>{item.title}</Text>
//                                 <HorizontalBlank height={5} />
//                                 <Text style={styles.subTitle}>{item.subTitle}</Text>
//                             </View>
//                             <VerticalBlank width={40} />
//                         </Fragment>
//                     );
//                 })}
//             </ScrollView>
//         </View>
//     );
// };

// export default ScrollSection;

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 10,
//     },
    
//     scrollview: {
//         paddingLeft: 16,
//     },
//     sectionTitle: {
//         fontSize: 20,
//         lineHeight: 24.2,
//         letterSpacing: -0.32,
//         color: ColorStyle.Black,
//         fontFamily: TypoStyle.SemiBold,
//         paddingLeft: 16,
//     },
//     itemWrap: {
//         flexDirection: 'column',
//         maxWidth: 168,
//     },
//     title: {
//         fontSize: 16,
//         lineHeight: 19.36,
//         letterSpacing: -0.32,
//         color: ColorStyle.Black,
//         fontFamily: TypoStyle.SemiBold,
//     },
//     subTitle: {
//         fontSize: 14,
//         lineHeight: 16.94,
//         letterSpacing: -0.32,
//         color: ColorStyle.Black,
//         fontFamily: TypoStyle.Regular,
//     },
//     image: {
//         width: 168,
//         height: 120,
//     },
// });

import React, { Fragment } from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
// import image1 from '@assets/images/image_265.png';
// import image2 from '@assets/images/image_283.png';
// import image3 from '@assets/images/image_284.png';
// import image4 from '@assets/images/image_284.png';
const image1 = require('@assets/images/image_265.png');
const image2 = require('@assets/images/image_283.png');
const image3 = require('@assets/images/image_303.png');
const image4 = require('@assets/images/image_304.png');
import { ColorStyle } from 'styles/color';
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import VerticalBlank from 'components/atoms/VerticalBlank';

const DATA = [
    {
        title: '해충 확인',
        subTitle: 'AI를 이용하여 카메라로 확인된 해충을 확인해드립니다.',
        image: image1,
    },
    {
        title: '솔루션 제공',
        subTitle: '확인된 해충의 박멸 방법을 알려드립니다.',
        image: image2,
    },
    {
        title: '저렴한 가격',
        subTitle: '저렴한 가격으로 해충 박멸이 가능합니다.',
        image: image3,
    },
    {
        title: '편리한 사용',
        subTitle: '카메라만 등록하면 쉽게 사용이 가능합니다',
        image: image4,
    },
];

// 하단 섹션
const ScrollSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>찾아벌레가 제공합니다</Text>
            <HorizontalBlank height={10} />
            <ScrollView contentContainerStyle={styles.scrollview} horizontal showsHorizontalScrollIndicator={false}>
                {DATA.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <View style={styles.itemWrap}>
                                <Image source={item.image} style={styles.image} />
                                <HorizontalBlank height={10} />
                                <Text style={styles.title}>{item.title}</Text>
                                <HorizontalBlank height={5} />
                                <Text style={styles.subTitle}>{item.subTitle}</Text>
                            </View>
                            <VerticalBlank width={40} />
                        </Fragment>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ScrollSection;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    scrollview: {
        paddingLeft: 16,
    },
    sectionTitle: {
        fontSize: 20,
        lineHeight: 24.2,
        letterSpacing: -0.32,
        color: ColorStyle.Black,
        fontFamily: TypoStyle.SemiBold,
        paddingLeft: 16,
    },
    itemWrap: {
        flexDirection: 'column',
        maxWidth: 168,
    },
    title: {
        fontSize: 16,
        lineHeight: 19.36,
        letterSpacing: -0.32,
        color: ColorStyle.Black,
        fontFamily: TypoStyle.SemiBold,
    },
    subTitle: {
        fontSize: 14,
        lineHeight: 16.94,
        letterSpacing: -0.32,
        color: ColorStyle.Black,
        fontFamily: TypoStyle.Regular,
    },
    image: {
        width: 168,
        height: 120,
    },
});
