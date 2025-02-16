module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      // Tell Babel to use the nativewind jsx import for styling
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
    plugins: [
      // This one must remain last!
      "react-native-reanimated/plugin",
    ],
  };
};
