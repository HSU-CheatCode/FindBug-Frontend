// module.exports = function (api) {
//     api.cache(true);
//     return {
//         presets: ['babel-preset-expo'],
//         plugins: [
//             'react-native-reanimated/plugin',
//             [
//                 'module-resolver',
//                 {
//                     extensions: [
//                         '.ios.ts',
//                         '.android.ts',
//                         '.ts',
//                         '.ios.tsx',
//                         '.android.tsx',
//                         '.tsx',
//                         '.jsx',
//                         '.js',
//                         '.json',
//                     ],
//                     root: ['.'],
//                     alias: {
//                         '@components': './components',
//                         '@styles': './styles',
//                         '@routers': './routers',
//                         '@assets': './assets',
//                     },
//                 },
//             ],
//         ],
//     };
// };

module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            // '@babel/preset-react' // JSX를 JS로 변환하기 위한 프리셋 추가
        ],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'module-resolver',
                {
                    extensions: [
                        '.ios.ts',
                        '.android.ts',
                        '.ts',
                        '.ios.tsx',
                        '.android.tsx',
                        '.tsx',
                        '.jsx',
                        '.js',
                        '.json',
                    ],
                    root: ['.'],
                    alias: {
                        '@components': './components',
                        '@styles': './styles',
                        '@routers': './routers',
                        '@assets': './assets',
                    },
                },
            ],
        ],
    };
};
