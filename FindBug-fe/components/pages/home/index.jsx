// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useState } from 'react';
// import HomeHeader from './home-header';
// import PosterSection from './poster-section';
// import ScrollSection from './scroll-section';
// import BugsPopup from 'components/templates/bugs-popup';
// import CameraRegistPopup from 'components/templates/camera-regist-popup';

// const Home = ({ navigation }: { navigation: any }) => {
//     const [visible, setVisible] = useState(false);
//     const [bugVisible, setBugVisible] = useState(false);

//     return (
//         <View style={styles.container}>
//             <HomeHeader navigation={navigation} />
//             <PosterSection />
//             <ScrollSection />
//             {/* 팝업 예시 */}
//             <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setVisible(true)}>
//                 <Text>카메라 등록 팝업 예시</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setBugVisible(true)}>
//                 <Text>벌레 발견 팝업 예시</Text>
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

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeHeader from './home-header';
import PosterSection from './poster-section';
import ScrollSection from './scroll-section';
import BugsPopup from 'components/templates/bugs-popup';
import CameraRegistPopup from 'components/templates/camera-regist-popup';

const Home = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [bugVisible, setBugVisible] = useState(false);

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <PosterSection />
            <ScrollSection />
            {/* 팝업 예시 */}
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setVisible(true)}>
                <Text>카메라 등록 팝업 예시</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setBugVisible(true)}>
                <Text>벌레 발견 팝업 예시</Text>
            </TouchableOpacity>
            {visible && <CameraRegistPopup visible={visible} setVisible={setVisible} />}
            {bugVisible && <BugsPopup visible={bugVisible} setVisible={setBugVisible} />}
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
