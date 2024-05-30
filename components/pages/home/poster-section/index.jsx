<<<<<<< Updated upstream
import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
=======
// import React from 'react';
// import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';
// const image1 = require('@assets/images/image_300.png');
// const image2 = require('@assets/images/image_301.png');
// const image3 = require('@assets/images/image_302.png');
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';

// const W_WIDTH = Dimensions.get('window').width;

// const DATA = [
//   {
//     image: image1,
//   },
//   {
//     image: image2,
//   },
//   {
//     image: image3,
//   },
// ];

// const BugsKillSection = () => {
//   return (
//     <View style={styles.container}>
//       <Swiper
//         style={styles.wrapper}
//         showsPagination={true}
//         autoplay={false}
//       >
//         {DATA.map((item, index) => (
//           <View style={styles.slide} key={index}>
//             <Image source={item.image} style={styles.image} />
//             <View style={styles.textWrapper}>
// {/* 이동할 곳 넣기 */}
//             </View>
//           </View>
//         ))}
//       </Swiper>
//       <HorizontalBlank height={60} />
//     </View>
//   );
// };

// export default BugsKillSection;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   wrapper: {},
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#D9D9D9',
//   },
//   image: {
//     width: W_WIDTH,
//     height: 315,
//     backgroundColor: '#D9D9D9',
//   },
//   textWrapper: {
//     flex: 1,
//     paddingLeft: 15,
//     justifyContent: 'center',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     lineHeight: 25.2,
//     letterSpacing: -0.32,
//     fontFamily: TypoStyle.SemiBold,
//     color: '#191919',
//   },
//   normalText: {
//     fontSize: 16,
//     lineHeight: 19.09,
//     letterSpacing: -0.32,
//     fontFamily: TypoStyle.SemiBold,
//     color: '#191919',
//   },
//   subText: {
//     fontSize: 14,
//     lineHeight: 19.6,
//     letterSpacing: -0.32,
//     fontFamily: TypoStyle.Regular,
//     color: '#191919',
//   },
// });

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';
// import axios from 'axios';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';

// const W_WIDTH = Dimensions.get('window').width;

// const BugsKillSection = () => {
//     const [eventData, setEventData] = useState([]);

//     useEffect(() => {
//         axios.get('http://findbugs.kro.kr/mainPage/1')
//             .then(response => {
//                 setEventData(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching events:", error);
//             });
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Swiper style={styles.wrapper} showsPagination={true} autoplay={false}>
//                 {eventData.map((item, index) => (
//                     <View style={styles.slide} key={index}>
//                         <Image source={{ uri: item.imageUrl }} style={styles.image} />
//                         <View style={styles.textWrapper}>
//                             <Text style={styles.sectionTitle}>{item.name}</Text>
//                             <Text style={styles.normalText}>{item.description}</Text>
//                         </View>
//                     </View>
//                 ))}
//             </Swiper>
//             <HorizontalBlank height={60} />
//         </View>
//     );
// };

// export default BugsKillSection;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     wrapper: {},
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#D9D9D9',
//     },
//     image: {
//         width: W_WIDTH,
//         height: 315,
//         backgroundColor: '#D9D9D9',
//     },
//     textWrapper: {
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
//     },
// });

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
// import Swiper from 'react-native-swiper';
// import axios from 'axios';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';

// const W_WIDTH = Dimensions.get('window').width;

// const BugsKillSection = () => {
//     const [eventData, setEventData] = useState([]);

//     useEffect(() => {
//         const domain = 'http://findbugs.kro.kr/mainPage/1'; // 도메인을 직접 설정
//         axios.get(`${domain}/mainPage/1`)
//             .then(response => {
//                 const data = response.data.eventDtoList;
//                 if (Array.isArray(data)) {
//                     setEventData(data);
//                 } else {
//                     console.error("Response eventDtoList is not an array:", data);
//                 }
//             })
//             .catch(error => {
//                 console.error("Error fetching events:", error);
//             });
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Swiper style={styles.wrapper} showsPagination={true} autoplay={false}>
//                 {eventData.map((item, index) => (
//                     <View style={styles.slide} key={index}>
//                         <Image 
//                             source={{ uri: item.imageUrl || 'http://findbugs-bukkit.s3.ap-northeast-2.amazonaws.com/title_1.png' }} 
//                             style={styles.image} 
//                         />
//                         <View style={styles.textWrapper}>
//                             <Text style={styles.sectionTitle}>{item.name}</Text>
//                             <Text style={styles.normalText}>{item.description || '설명이 없습니다.'}</Text>
//                         </View>
//                     </View>
//                 ))}
//             </Swiper>
//             <HorizontalBlank height={60} />
//         </View>
//     );
// };

// export default BugsKillSection;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     wrapper: {},
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#D9D9D9',
//     },
//     image: {
//         width: W_WIDTH,
//         height: 315,
//         backgroundColor: '#D9D9D9',
//     },
//     textWrapper: {
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
//     },
// });

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
// import Swiper from 'react-native-swiper';
// import axios from 'axios';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';

// const W_WIDTH = Dimensions.get('window').width;

// const BugsKillSection = () => {
//     const [eventData, setEventData] = useState([]);

//     useEffect(() => {
//         const domain = 'http://findbugs.kro.kr/mainPage/1'; 
//         axios.get(`${domain}/mainPage/1`)
//             .then(response => {
//                 const data = response.data.eventDtoList;
//                 if (Array.isArray(data)) {
//                     setEventData(data);
//                 } else {
//                     console.error("Response eventDtoList is not an array:", data);
//                 }
//             })
//             .catch(error => {
//                 console.error("Error fetching events:", error);
//             });
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Swiper style={styles.wrapper} showsPagination={true} autoplay={false}>
//                 {eventData.map((item, index) => (
//                     <View style={styles.slide} key={index}>
//                         <Image 
//                             source={{ uri: item.imageUrl || 'https://example.com/default-image.png' }} 
//                             style={styles.image} 
//                         />
//                         <View style={styles.textWrapper}>
//                             <Text style={styles.sectionTitle}>{item.name}</Text>
//                             <Text style={styles.normalText}>{item.description || '설명이 없습니다.'}</Text>
//                         </View>
//                     </View>
//                 ))}
//             </Swiper>
//             <HorizontalBlank height={60} />
//         </View>
//     );
// };

// export default BugsKillSection;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     wrapper: {},
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#D9D9D9',
//     },
//     image: {
//         width: W_WIDTH,
//         height: 315,
//         backgroundColor: '#D9D9D9',
//     },
//     textWrapper: {
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
//     },
// });

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
// import Swiper from 'react-native-swiper';
// import axios from 'axios';
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';

// const W_WIDTH = Dimensions.get('window').width;

// const BugsKillSection = () => {
//     const [eventData, setEventData] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const domain = 'http://findbugs.kro.kr'; 
//         axios.get(`${domain}/mainPage/1`)
//             .then(response => {
//                 const data = response.data.eventDtoList;
//                 if (Array.isArray(data)) {
//                     setEventData(data);
//                 } else {
//                     console.error("Response eventDtoList is not an array:", data);
//                     setError("Invalid response format");
//                 }
//             })
//             .catch(error => {
//                 console.error("Error fetching events:", error);
//                 setError(error.message);
//             });
//     }, []);

//     return (
//         <View style={styles.container}>
//             {error ? (
//                 <Text style={styles.errorText}>Error: {error}</Text>
//             ) : (
//                 <Swiper style={styles.wrapper} showsPagination={true} autoplay={false}>
//                     {eventData.map((item, index) => (
//                         <View style={styles.slide} key={index}>
//                             <Image 
//                                 source={{ uri: item.imageUrl || 'https://example.com/default-image.png' }} 
//                                 style={styles.image} 
//                             />
//                             <View style={styles.textWrapper}>
//                             </View>
//                         </View>
//                     ))}
//                 </Swiper>
//             )}
//             <HorizontalBlank height={60} />
//         </View>
//     );
// };

// export default BugsKillSection;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     wrapper: {},
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#D9D9D9',
//     },
//     image: {
//         width: W_WIDTH,
//         height: 315,
//         backgroundColor: '#D9D9D9',
//     },
//     textWrapper: {
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
//     },
//     errorText: {
//         color: 'red',
//         fontSize: 16,
//         textAlign: 'center',
//         margin: 20,
//     },
// });

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
>>>>>>> Stashed changes
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';

const W_WIDTH = Dimensions.get('window').width;

const BugsKillSection = () => {
<<<<<<< Updated upstream
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        autoplay={false}
      >
        {DATA.map((item, index) => (
          <View style={styles.slide} key={index}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textWrapper}>
{/* 이동할 곳 넣기 */}
            </View>
          </View>
        ))}
      </Swiper>
      <HorizontalBlank height={60} />
    </View>
  );
=======
    const [eventData, setEventData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const domain = 'http://findbugs.kro.kr'; 
        axios.get(`${domain}/mainPage/1`)
            .then(response => {
                const data = response.data.eventDtoList;
                if (Array.isArray(data)) {
                    setEventData(data);
                } else {
                    console.error("Response eventDtoList is not an array:", data);
                    setError("Invalid response format");
                }
            })
            .catch(error => {
                console.error("Error fetching events:", error);
                setError(error.message);
            });
    }, []);

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.errorText}>Error: {error}</Text>
            ) : (
                <Swiper 
                    style={styles.wrapper} 
                    showsPagination={true} 
                    autoplay={false}
                    paginationStyle={styles.paginationStyle}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                >
                    {eventData.map((item, index) => (
                        <View style={styles.slide} key={index}>
                            <Image 
                                source={{ uri: item.imageUrl || 'https://example.com/default-image.png' }} 
                                style={styles.image} 
                            />
                            <View style={styles.textWrapper}>
                                {/* 추가 텍스트나 컴포넌트를 여기에 넣을 수 있습니다. */}
                            </View>
                        </View>
                    ))}
                </Swiper>
            )}
            <HorizontalBlank height={60} />
        </View>
    );
>>>>>>> Stashed changes
};

export default BugsKillSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
    },
    image: {
        width: W_WIDTH,
        height: 315,
        backgroundColor: '#D9D9D9',
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
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        margin: 20,
    },
    paginationStyle: {
        bottom: 10,
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#007aff',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
});
