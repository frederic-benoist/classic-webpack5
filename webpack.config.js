/* global $, prestashop */

const jsConfig = require('./webpack/js.config.js');
const cssConfig = require('./webpack/css.config.js');

module.exports = [
  cssConfig,
  jsConfig,
];
