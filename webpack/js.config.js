/* global $, prestashop */

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    stats: {
      modules: false,
      logging: 'warn',
    },
    entry: {
      theme: ['./js/theme.js'],
    },
    output: {
      clean: true, // Clean the output directory before emit.
      path: path.resolve(__dirname, '../../assets/js'),
      filename: '[name].js'
    },
    resolve: {
      preferRelative: true,
      extensions: ['.js', '.vue', '.json'],
      fallback: { "events": require.resolve("events/") },
      alias: {
        '@app': path.resolve(__dirname, '../../../../../admin-dev/themes/new-theme/js/app'),
        '@js': path.resolve(__dirname, '../../../../../admin-dev/themes/new-theme/js'),
        '@pages': path.resolve(__dirname, '../../../../../admin-dev/themes/new-theme/js/pages'),
        '@components': path.resolve(__dirname, '../../../../../admin-dev/themes/new-theme/js/components')
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          include: [
            path.join(__dirname, ''),
          ],
          use: ['babel-loader'],
        },
      ],
    },
    externals: {
      prestashop: 'prestashop',
      $: '$',
      jquery: 'jQuery',
    },
    optimization: devMode ? {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          test: /\.js($|\?)/i,
          sourceMap: devMode,
          terserOptions: {
            compress: {
              booleans: !devMode,
              conditionals: !devMode,
              drop_console: !devMode,
              drop_debugger: !devMode,
              if_return: !devMode,
              join_vars: !devMode,
              keep_classnames: devMode,
              keep_fnames: devMode,
              reduce_vars: !devMode,
              sequences: !devMode,
              warnings: devMode,
            },
            output: {
              comments: devMode,
            },
          },
        }),
      ]
    } : {},
    plugins: [
      new webpack.ProvidePlugin({
        Popper: ['popper.js', 'default'],
      })
    ],
    watchOptions: {
      ignored: /node_modules/,
    }
  }
}
