const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind} = require("nativewind/metro")
const fs = require('fs');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const projectRoot = fs.realpathSync(__dirname);

const defaultConfig = getDefaultConfig(projectRoot);

const config = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
});

module.exports = withNativeWind(config,{
  input: path.join(projectRoot, 'global.css'),
  // Always write processed CSS to disk instead of virtual modules.
  // Virtual module patching can silently fail on hot-reload, leaving styles empty.
  forceWriteFileSystem: true,
});
