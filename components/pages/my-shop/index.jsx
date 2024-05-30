<<<<<<< Updated upstream
=======

// import { useState } from 'react';
// import BugsPage from './bugs-page';
// import NoBugsPage from './no-bugs-page';

// const MyShop = () => {
//     const [bugs, setBugs] = useState(true); 
//     // 벌레 유무에 따라 나의 가게 화면 구분하는 값
//     return bugs ? <BugsPage /> : <NoBugsPage />;
// };

// export default MyShop;
>>>>>>> Stashed changes

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';
// import BugsPage from './bugs-page';
// import NoBugsPage from './no-bugs-page';

// const MyShop = () => {
//     const [bugs, setBugs] = useState(null); // 초기값을 null로 설정하여 로딩 상태 표시
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get('http://findbugs.kro.kr/myShopPage/1')
//             .then(response => {

//                 setBugs(response.data.isBugs);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("Error fetching bugs status:", error);
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.container}>
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.container}>
//                 <Text>Error: {error.message}</Text>
//             </View>
//         );
//     }

//     return bugs ? <BugsPage /> : <NoBugsPage />;
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });

// export default MyShop;


// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';
// import BugsPage from './bugs-page';
// import NoBugsPage from './no-bugs-page';

// const MyShop = () => {
//     const [bugs, setBugs] = useState(null); // 초기값을 null로 설정하여 로딩 상태 표시
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get('http://findbugs.kro.kr/myShopPage/1')
//             .then(response => {
//                 console.log(response.data); // 응답 데이터 확인
//                 setBugs(response.data.isBugs);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("Error fetching bugs status:", error);
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.container}>
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.container}>
//                 <Text>Error: {error.message}</Text>
//             </View>
//         );
//     }

//     return bugs ? <BugsPage /> : <NoBugsPage />;
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });

// export default MyShop;


// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';
// import BugsPage from './bugs-page';
// import NoBugsPage from './no-bugs-page';

// const MyShop = () => {
//     const [bugs, setBugs] = useState(null); // 초기값을 null로 설정하여 로딩 상태 표시
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBugsStatus = async () => {
//             try {
//                 const response = await axios.get('http://findbugs.kro.kr/myShopPage/1', {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     withCredentials: true, // CORS 설정
//                 });
//                 console.log(response.data); // 응답 데이터 확인
//                 setBugs(response.data.detected);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching bugs status:", error);
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchBugsStatus();
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.container}>
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     if (error) {
//         return (
//             <View style={styles.container}>
//                 <Text>Error: {error}</Text>
//             </View>
//         );
//     }

//     return bugs ? <BugsPage /> : <NoBugsPage />;
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });

// export default MyShop;

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import BugsPage from './bugs-page';
import NoBugsPage from './no-bugs-page';

const MyShop = () => {
<<<<<<< Updated upstream
    const [bugs, setBugs] = useState(false); 
    // 벌레 유무에 따라 나의 가게 화면 구분하는 값
=======
    const [bugs, setBugs] = useState(null); // 초기값을 null로 설정하여 로딩 상태 표시
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBugsStatus = async () => {
            try {
                const response = await axios.get('http://findbugs.kro.kr/myShopPage/1', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true, // CORS 설정
                });
                console.log(response.data); // 응답 데이터 확인
                setBugs(response.data.detected);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching bugs status:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchBugsStatus();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
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

>>>>>>> Stashed changes
    return bugs ? <BugsPage /> : <NoBugsPage />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default MyShop;
