const path = require('path');
const sass = require('node-sass');
const fs = require('fs');
const CleanCSS = require('clean-css');
const {
  __r
} = require('./_util');

const srcDir = __r('style/themes');

function nodeImporter(url, prev) {
  if (url.startsWith('./')) {
    url = path.resolve(srcDir, url);
  }
  return {
    file: url
  };
}

function buildTheme(file, isProd, noCompress) {
  const code = fs.readFileSync(file, 'utf-8');
  let css = sass.renderSync({
    importer: nodeImporter,
    data: code,
    sourceMap: false
  }).css.toString();
  if (isProd && !noCompress) {
    css = new CleanCSS({
      sourceMap: false
    }).minify(css).styles;
  }
  const theme = path.basename(file, '.scss');
  const name = `themes/${theme}${isProd && !noCompress ? '.min' : ''}.css`;
  return {
    name,
    code: css,
    theme
  };
}

function buildAllThemes(isProd = false, noCompress = false) {
  return fs.readdirSync(srcDir).map(file => {
    if (!file.endsWith('.scss') || file.startsWith('_')) return null;
    return buildTheme(path.join(srcDir, file), isProd, noCompress);
  }).filter(t => !!t);
}

module.exports = {
  buildAllThemes,
  buildTheme,
  srcDir
};
