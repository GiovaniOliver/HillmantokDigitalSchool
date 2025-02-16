const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Customize the config before returning it.
  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
    'react-native-svg': 'react-native-svg-web',
    '@expo/vector-icons': 'react-native-vector-icons',
    'expo-video': 'react-player'
  };

  // Add fallbacks for video-related modules
  if (!config.resolve.fallback) {
    config.resolve.fallback = {};
  }
  config.resolve.fallback = {
    ...config.resolve.fallback,
    'fs': false,
    'path': false
  };

  return config;
}; 