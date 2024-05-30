<<<<<<< Updated upstream

import { View, StyleSheet, Text, Image } from 'react-native';

const image1 = require('@assets/images/image_273.png');
const image2 = require('@assets/images/image_274.png');
const image3 = require('@assets/images/image_275.png');
import { TypoStyle } from 'styles/font';
import HorizontalBlank from 'components/atoms/HorizontalBlank';
import { Fragment } from 'react';
=======
// import { View, StyleSheet, Text, Image } from 'react-native';

// const image1 = require('@assets/images/image_273.png');
// const image2 = require('@assets/images/image_274.png');
// const image3 = require('@assets/images/image_275.png');
// import { TypoStyle } from 'styles/font';
// import HorizontalBlank from 'components/atoms/HorizontalBlank';
// import { Fragment } from 'react';

// const DATA = [
//     {
//         title: '환경 관리',
//         subTitle: '실내 청소와 음식물 관리로 청결을 유지하세요!',
//         image: image1,
//     },
//     {
//         title: '트랩 설치',
//         subTitle:
//             '해충의 수가 적을 때, 유인용 먹이를 넣은 끈끈이 트랩을 은폐된 장소에 배치 하세요',
//         image: image2,
//     },
//     {
//         title: '살충제 사용',
//         subTitle: '해충 박멸 시 살충제를 사용하여 확실하게 박멸하세요!.',
//         image: image3,
//     },
// ];

// const BugsKillSection = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.sectionTitle}>해충 박멸 방법</Text>
//             <HorizontalBlank height={10} />
//             {DATA.map((item, index) => {
//                 return (
//                     <Fragment key={index}>
//                         <View style={styles.row}>
//                             <Image source={item.image} style={styles.image} />
//                             <View style={styles.textWrapper}>
//                                 <Text style={styles.normalText}>{item.title}</Text>
//                                 <HorizontalBlank height={20} />
//                                 <Text style={styles.subText}>{item.subTitle}</Text>
//                             </View>
//                         </View>
//                         <HorizontalBlank height={60} />
//                     </Fragment>
//                 );
//             })}
//         </View>
//     );
// };

// export default BugsKillSection;

// const styles = StyleSheet.create({
//     container: {},
//     row: {
//         flexDirection: 'row',
//     },
//     image: {
//         width: 160,
//         height: 123,
//         borderRadius: 15,
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
//     subText: {
//         fontSize: 14,
//         lineHeight: 20,
//         letterSpacing: -0.32,
//         fontFamily: TypoStyle.Regular,
//         color: '#191919',
//     },
// });

// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const BugDetectionComponent = ({ domain }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
>>>>>>> Stashed changes

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`도메인 넣기`);
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [domain]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!data) {
//     return (
//       <View style={styles.container}>
//         <Text>No data available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: `${domain}/${data.imagePath}` }} style={styles.image} />
//       <Text style={styles.text}>{data.message}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default BugDetectionComponent;

// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const BugDetectionComponent = ({ domain }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${domain}/myShopPage/1/detected`);
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [domain]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!data) {
//     return (
//       <View style={styles.container}>
//         <Text>No data available</Text>
//       </View>
//     );
//   }

//   const { bugInfoDto, alarmInfoDto } = data;

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: bugInfoDto.imageUrl || 'https://example.com/default-image.png' }} style={styles.image} />
//       <Text style={styles.title}>{bugInfoDto.title}</Text>
//       <Text style={styles.description}>{bugInfoDto.description}</Text>
//       <Text style={styles.cameraInfo}>Camera: {alarmInfoDto.cameraName}</Text>
//       <Text style={styles.dateInfo}>Detected Date: {new Date(alarmInfoDto.detectedDate).toLocaleString()}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   cameraInfo: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   dateInfo: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default BugDetectionComponent;

// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, Alert } from 'react-native';
// import axios from 'axios';

// const BugDetectionComponent = ({ domain }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://findbugs.kro.kr/myShopPage/1/detected`);
//         setData(response.data.detectedInfoDtoList);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         Alert.alert('Network Error', `There was an error fetching data: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [domain]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <View style={styles.container}>
//         <Text>No data available</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       {data.map((item, index) => (
//         <View key={index} style={styles.itemContainer}>
//           <Image source={{ uri: item.imageUrl || 'http://example.com/default-image.png' }} style={styles.image} />
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.description}>{item.description}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20,
//       backgroundColor: '#fff',
//     },
//     image: {
//       width: 200,
//       height: 200,
//       marginBottom: 20,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: 10,
//     },
//     description: {
//       fontSize: 16,
//       textAlign: 'center',
//       marginBottom: 20,
//     },
//     cameraInfo: {
//       fontSize: 16,
//       textAlign: 'center',
//       marginBottom: 5,
//     },
//     dateInfo: {
//       fontSize: 16,
//       textAlign: 'center',
//     },
//   });
  

// export default BugDetectionComponent;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, Alert } from 'react-native';
import axios from 'axios';

const BugDetectionComponent = ({ domain }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://findbugs.kro.kr/myShopPage/1/detected`);
        if (response.data && response.data.detectedInfoDtoList) {
          setData(response.data.detectedInfoDtoList);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert('Network Error', `There was an error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [domain]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}>No data available</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Image source={{ uri: item.imageUrl || 'http://example.com/default-image.png' }} style={styles.image} />
          <View style={styles.textWrapper}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.subText}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
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
    fontFamily: 'SemiBold', // Replace TypoStyle.SemiBold with the actual font family name
    color: '#191919',
  },
  normalText: {
    fontSize: 16,
    lineHeight: 19.09,
    letterSpacing: -0.32,
    fontFamily: 'SemiBold', // Replace TypoStyle.SemiBold with the actual font family name
    color: '#191919',
  },
  subText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.32,
    fontFamily: 'Regular', // Replace TypoStyle.Regular with the actual font family name
    color: '#191919',
  },
});

export default BugDetectionComponent;
