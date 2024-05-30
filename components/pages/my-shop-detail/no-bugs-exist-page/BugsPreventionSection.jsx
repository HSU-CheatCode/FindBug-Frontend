<<<<<<< Updated upstream


import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
=======


// import React from 'react';
// import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import VerticalBlank from 'components/atoms/VerticalBlank';

// const image1 = require('@assets/images/image_268.png');
// const image2 = require('@assets/images/image_279.png');
// const image3 = require('@assets/images/image_280.png');
// const image4 = require('@assets/images/image_281.png');

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
//                         <React.Fragment key={index}>
//                             <View>
//                                 <Image source={item.image} style={styles.image} />
//                                 <Text style={styles.normalText}>{item.title}</Text>
//                                 <HorizontalBlank height={40} />
//                             </View>
//                             {index % 2 === 0 && <VerticalBlank width={12} />}
//                         </React.Fragment>
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
//         top: 10,
//         left: 0,
//         right: 0,
//         textAlign: 'center',
//     },
// });

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ActivityIndicator } from 'react-native';
import axios from 'axios';
>>>>>>> Stashed changes
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import VerticalBlank from 'components/atoms/VerticalBlank';

const W_WIDTH = Dimensions.get('window').width;

const BugsPreventionSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://findbugs.kro.kr/myShopPage/1/predict');
                setData(response.data.predictInfoDtoList);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>해충 예방 방법</Text>
            <HorizontalBlank height={40} />
            <View style={styles.row}>
                {data.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <View>
                                <Image source={{ uri: item.imageUrl }} style={styles.image} />
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
