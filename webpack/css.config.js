
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    stats: {
      modules: false,
      logging: 'warn',
      entrypoints: false,
    },
    devtool: devMode ? 'cheap-eval-source-map' : false,
    entry: {
      theme: ['./css/theme.scss'],
      error: ['./css/error.scss'],
    },  
    resolve: {
      preferRelative: true,
    },
    output: {
      clean: true, // Clean the output directory before emit.
      // Report any changes in the RemovePlugin settings
      path: path.resolve(__dirname, '../../assets/css'),
      filename: 'webpack-css-compile-[name].js',
    },
    module: {
      rules: [
        {
          test: /\.scss/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {sourceMap: devMode},
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: devMode,
                postcssOptions: {
                  plugins: [
                    ['postcss-preset-env']
                  ]
                }
              }
            }, {
              loader: 'sass-loader',
              options: {sourceMap: devMode},
            },
          ],
        }, {
          test: /.(png|woff(2)?|eot|otf|ttf|svg|gif)(\?[a-z0-9=\.]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../css/[hash].[ext]',
              },
            },
          ],
        }, {
          test: /\.css$/,
          use: [{
            loader: 'style-loader',
            options: {sourceMap: devMode},
          }, {
            loader: 'css-loader',
            options: {sourceMap: devMode},
          }, {
            loader: 'postcss-loader',
            options: {sourceMap: devMode},
          }],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({filename: path.join('..', 'css', '[name].css')}),
      new RemovePlugin({
        after: {
          root: '../assets/css',
          test: [
            {
              // Remove *.js.map in css folder
              folder: './',
              method: (absoluteItemPath) => {
                  return new RegExp(/\.js\.map$/, 'm').test(absoluteItemPath);
              }
            },
            {
              // Remove *.js in css folder
              folder: './',
              method: (absoluteItemPath) => {
                  return new RegExp(/\.js$/, 'm').test(absoluteItemPath);
              },
            }
          ],
          log: false,
          logWarning: false,
          trash: true
        }
      })
    ]
  }
}
