<<<<<<< Updated upstream
=======

// // import React, { useState } from 'react';
// // import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // import HomeHeader from './home-header';
// // import PosterSection from './poster-section';
// // import ScrollSection from './scroll-section';
// // import BugsPopup from 'components/templates/bugs-popup';
// // import CameraRegistPopup from 'components/templates/camera-regist-popup';

// // const Home = ({ navigation }) => {
// //     const [visible, setVisible] = useState(false);
// //     const [bugVisible, setBugVisible] = useState(false);

// //     return (
// //         <View style={styles.container}>
// //             <HomeHeader navigation={navigation} />
// //             <PosterSection />
// //             <ScrollSection />

// //             <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setBugVisible(true)}>
// //                 <Text>벌레 발견 팝업 예시</Text>
// //             </TouchableOpacity>
// //             {visible && <CameraRegistPopup visible={visible} setVisible={setVisible} />}
// //             {bugVisible && <BugsPopup visible={bugVisible} setVisible={setBugVisible} />}
// //         </View>
// //     );
// // };

// // export default Home;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 50,
// //         backgroundColor: '#ffffff',
// //     },
// // });

//             {/* 팝업 예시 */}
//             {/* <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setVisible(true)}>
//                 <Text>카메라 등록 팝업 예시</Text>
//             </TouchableOpacity> */}

//             import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import axios from 'axios';
// import HomeHeader from './home-header';
// import PosterSection from './poster-section';
// import ScrollSection from './scroll-section';
// import BugsPopup from 'components/templates/bugs-popup';
// import CameraRegistPopup from 'components/templates/camera-regist-popup';

// const Home = ({ navigation }) => {
//     const [visible, setVisible] = useState(false);
//     const [bugVisible, setBugVisible] = useState(false);

//     useEffect(() => {
//         // Function to check for bug detection
//         const checkForBugs = async () => {
//             try {
//                 const response = await axios.get('http://findbugs.kro.kr/myShopPage/1');
//                 if (response.data.detected) {
//                     setBugVisible(true);
//                 }
//             } catch (error) {
//                 console.error("Error fetching bug detection data:", error);
//             }
//         };

//         // Check for bugs initially and set an interval to check periodically
//         checkForBugs();
//         const interval = setInterval(checkForBugs, 5000); // Check every 5 seconds

//         // Cleanup the interval on component unmount
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <View style={styles.container}>
//             <HomeHeader navigation={navigation} />
//             <PosterSection />
//             <ScrollSection />

//              <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setBugVisible(true)}>
    
//             </TouchableOpacity>
//             {visible && <CameraRegistPopup visible={visible} setVisible={setVisible} />}
//             {bugVisible && <BugsPopup visible={bugVisible} setVisible={setBugVisible} />}
//         </View>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 50,
//         backgroundColor: '#ffffff',
//     },
// });
>>>>>>> Stashed changes

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import axios from 'axios';
// import HomeHeader from './home-header';
// import PosterSection from './poster-section';
// import ScrollSection from './scroll-section';
// import BugsPopup from 'components/templates/bugs-popup';
// import CameraRegistPopup from 'components/templates/camera-regist-popup';

// const Home = ({ navigation }) => {
//     const [visible, setVisible] = useState(false);
//     const [bugVisible, setBugVisible] = useState(false);

//     useEffect(() => {
//         // Function to check for bug detection
//         const checkForBugs = async () => {
//             try {
//                 const response = await axios.get('http://findbugs.kro.kr/myShopPage/1');
//                 if (response.data.detected) {
//                     setBugVisible(true);
//                 }
//             } catch (error) {
//                 console.error("Error fetching bug detection data:", error);
//             }
//         };

//         // Check for bugs initially and set an interval to check periodically
//         checkForBugs();
//         const interval = setInterval(checkForBugs, 5000); // Check every 5 seconds

//         // Cleanup the interval on component unmount
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <View style={styles.container}>
//             <HomeHeader navigation={navigation} />
//             <PosterSection />
//             <ScrollSection />

//             <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setBugVisible(true)}>
//                 <Text>벌레 발견 팝업 예시</Text>
//             </TouchableOpacity>
//             {visible && <CameraRegistPopup visible={visible} setVisible={setVisible} />}
//             {bugVisible && <BugsPopup visible={bugVisible} setVisible={setBugVisible} navigation={navigation} />}
//         </View>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 50,
//         backgroundColor: '#ffffff',
//     },
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import HomeHeader from './home-header';
import PosterSection from './poster-section';
import ScrollSection from './scroll-section';
import BugsPopup from 'components/templates/bugs-popup';
import CameraRegistPopup from 'components/templates/camera-regist-popup';

const Home = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [bugVisible, setBugVisible] = useState(false);

    useEffect(() => {
        // Function to check for bug detection
        const checkForBugs = async () => {
            try {
                const response = await axios.get('http://findbugs.kro.kr/myShopPage/1');
                if (response.data.detected) {
                    setBugVisible(true);
                }
            } catch (error) {
                console.error("Error fetching bug detection data:", error);
            }
        };

        // Check for bugs initially and set an interval to check periodically
        checkForBugs();
        const interval = setInterval(checkForBugs, 5000); // Check every 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <PosterSection />
            <ScrollSection />

            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setBugVisible(true)}>
                <Text>벌레 발견 팝업 예시</Text>
            </TouchableOpacity>
            {visible && <CameraRegistPopup visible={visible} setVisible={setVisible} />}
            {bugVisible && <BugsPopup visible={bugVisible} setVisible={setBugVisible} navigation={navigation} />}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 50,
        backgroundColor: '#ffffff',
    },
});
