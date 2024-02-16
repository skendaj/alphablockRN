process.env.EXPO_ROUTER_APP_ROOT = '../../src/app';

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      'react-native-reanimated/plugin',
      'module:react-native-dotenv',
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          root: ['.'],
          alias: { '@': './src' },
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        },
      ],
    ],
  };
};
