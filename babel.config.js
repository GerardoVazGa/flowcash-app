module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@app': './src/app',
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@context': './src/context',
            '@data': './src/data',
            '@features': './src/features',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@utils': './src/utils'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};