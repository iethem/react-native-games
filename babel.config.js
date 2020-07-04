module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          app: './app',
          components: './app/components',
          containers: './app/containers',
          theme: './app/theme',
          images: './app/images',
          utils: './app/utils',
          underscore: 'lodash',
        },
      },
    ],
  ],
};
