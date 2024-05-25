// import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import { ColorStyle } from 'styles/color';
// import VerticalBlank from 'components/atoms/VerticalBlank';

// const image1 = require('@assets/images/image_268.png');
// const image2 = require('@assets/images/image_279.png');
// const image3 = require('@assets/images/image_280.png');
// const image4 = require('@assets/images/image_281.png');
// // import image1 from '@assets/images/image_268.png';
// // import image2 from '@assets/images/image_279.png';
// // import image3 from '@assets/images/image_280.png';
// // import image4 from '@assets/images/image_281.png';

// const DATA = [
//     {
//         title: '음식물 철저히 관리',
//         image: image1,
//     },
//     {
//         title: '실내 청소를 통한 청결 유지',
//         image: image2,
//     },
//     {
//         title: '해충의 은신처와 먹이 제거',
//         image: image4,
//     },
//     {
//         title: '습한 환경 지양',
//         image: image3,
//     },
// ];

// const W_WIDTH = Dimensions.get('window').width;

// const BugsPreventionSection = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.sectionTitle}>해충 예방 방법</Text>
//             <HorizontalBlank height={40} />
//             <View style={styles.row}>
//                 {DATA.map((item, index) => {
//                     return (
//                         <>
//                             <View key={index}>
//                                 <Image source={item.image} style={styles.image} />
//                                 <Text style={styles.normalText}>{item.title}</Text>
//                                 <HorizontalBlank height={40} />
//                             </View>
//                             {index % 2 === 0 && <VerticalBlank width={12} />}
//                         </>
//                     );
//                 })}
//             </View>
//         </View>
//     );
// };

// export default BugsPreventionSection;

// const styles = StyleSheet.create({
//     container: {},
//     row: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//     },
//     image: {
//         width: (W_WIDTH - 46) / 2,
//         height: 163,
//         borderRadius: 16,
//     },
//     TextWrapper: {
//         position: 'absolute',
//         top: 10,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         lineHeight: 25.2,
//         letterSpacing: -0.32,
//         fontFamily: TypoStyle.SemiBold,
//         color: '#191919',
//     },
//     normalText: {
//         fontSize: 14,
//         lineHeight: 19.6,
//         letterSpacing: -0.32,
//         fontFamily: TypoStyle.Medium,
//         color: '#191919',
//         // position: 'absolute',
//         top: 10,
//         left: 0,
//         right: 0,
//         textAlign: 'center',
//     },
// });

// // import React from 'react';
// // import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// // import HorizontalBlank from 'components/atoms/HorizontalBlank';
// // import VerticalBlank from 'components/atoms/VerticalBlank';
// // import { TypoStyle } from 'styles/font';
// // import { ColorStyle } from 'styles/color';

// // const image1 = require('@assets/images/image_268.png');
// // const image2 = require('@assets/images/image_279.png');
// // const image3 = require('@assets/images/image_280.png');
// // const image4 = require('@assets/images/image_281.png');

// // const DATA = [
// //     {
// //         title: '음식물 철저히 관리',
// //         image: image1,
// //     },
// //     {
// //         title: '실내 청소를 통한 청결 유지',
// //         image: image2,
// //     },
// //     {
// //         title: '해충의 은신처와 먹이 제거',
// //         image: image4,
// //     },
// //     {
// //         title: '습한 환경 지양',
// //         image: image3,
// //     },
// // ];

// // const W_WIDTH = Dimensions.get('window').width;

// // const BugsPreventionSection = () => {
// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.sectionTitle}>해충 예방 방법</Text>
// //             <HorizontalBlank height={40} />
// //             <View style={styles.row}>
// //                 {DATA.map((item, index) => (
// //                     <React.Fragment key={index}>
// //                         <View style={styles.itemContainer}>
// //                             <Text style={styles.normalText}>{item.title}</Text>
// //                             <Image source={item.image} style={styles.image} />
// //                         </View>
// //                         {index % 2 === 0 && <VerticalBlank width={12} />}
// //                     </React.Fragment>
// //                 ))}
// //             </View>
// //         </View>
// //     );
// // };

// // export default BugsPreventionSection;

// // const styles = StyleSheet.create({
// //     container: {
// //         paddingHorizontal: 12,
// //     },
// //     row: {
// //         flexDirection: 'row',
// //         flexWrap: 'wrap',
// //         justifyContent: 'space-between',
// //     },
// //     itemContainer: {
// //         width: (W_WIDTH - 46) / 2,
// //         marginBottom: 20,
// //     },
// //     image: {
// //         width: '100%',
// //         height: 163,
// //         borderRadius: 16,
// //     },
// //     sectionTitle: {
// //         fontSize: 18,
// //         lineHeight: 25.2,
// //         letterSpacing: -0.32,
// //         fontFamily: TypoStyle.SemiBold,
// //         color: '#191919',
// //     },
// //     normalText: {
// //         fontSize: 14,
// //         lineHeight: 19.6,
// //         letterSpacing: -0.32,
// //         fontFamily: TypoStyle.Regular,
// //         color: ColorStyle.Black,
// //         textAlign: 'center',
// //         marginBottom: 10,
// //     },
// // });

import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import { ColorStyle } from 'styles/color';
import VerticalBlank from 'components/atoms/VerticalBlank';

const image1 = require('@assets/images/image_268.png');
const image2 = require('@assets/images/image_279.png');
const image3 = require('@assets/images/image_280.png');
const image4 = require('@assets/images/image_281.png');

const DATA = [
    {
        title: '음식물 철저히 관리',
        image: image1,
    },
    {
        title: '실내 청소를 통한 청결 유지',
        image: image2,
    },
    {
        title: '해충의 은신처와 먹이 제거',
        image: image4,
    },
    {
        title: '습한 환경 지양',
        image: image3,
    },
];

const W_WIDTH = Dimensions.get('window').width;

const BugsPreventionSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>해충 예방 방법</Text>
            <HorizontalBlank height={40} />
            <View style={styles.row}>
                {DATA.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <View>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.normalText}>{item.title}</Text>
                                <HorizontalBlank height={40} />
                            </View>
                            {index % 2 === 0 && <VerticalBlank width={12} />}
                        </React.Fragment>
                    );
                })}
            </View>
        </View>
    );
};

export default BugsPreventionSection;

const styles = StyleSheet.create({
    container: {},
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        width: (W_WIDTH - 46) / 2,
        height: 163,
        borderRadius: 16,
    },
    TextWrapper: {
        position: 'absolute',
        top: 10,
    },
    sectionTitle: {
        fontSize: 18,
        lineHeight: 25.2,
        letterSpacing: -0.32,
        fontFamily: TypoStyle.SemiBold,
        color: '#191919',
    },
    normalText: {
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: -0.32,
        fontFamily: TypoStyle.Medium,
        color: '#191919',
        top: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
    },
});
