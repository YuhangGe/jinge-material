const path = require('path');
const fs = require('fs-extra');
const Webpack = require('webpack');
const getWebpackBuildMainConfig = require('./_webpack_lib');
const {
  buildAllThemes
} = require('./theme');
const {
  __r, addAsset
} = require('./_util');

const noCompress = 'NO_COMPRESS' in process.env;

const webpackConfig = getWebpackBuildMainConfig(true, noCompress);
webpackConfig.plugins.push({
  apply(compiler) {
    compiler.hooks.compilation.tap('JINGE-MATERIAL-BUILD', compilation => {
      compilation.hooks.processAssets.tap({
        name: 'JINGE-MATERIAL-BUILD',
        stage: compilation.constructor.PROCESS_ASSETS_STAGE_ADDITIONAL
      }, (assets) => {
        const themes = buildAllThemes(true, noCompress);
        themes.forEach(theme => addAsset(assets, theme.name, theme.code));
      });
    });
  }
});
const compiler = Webpack(webpackConfig);

if (!noCompress) {
  const iconSrcDir = __r('icons');
  const iconDstDir = __r('dist/icons');
  fs.mkdirpSync(iconDstDir);
  fs.readdirSync(iconSrcDir).forEach(f => {
    if (!f.endsWith('.js')) return;
    let cnt = fs.readFileSync(path.join(iconSrcDir, f), 'utf-8');
    cnt = cnt.replace(/import[^;]+;/, '').replace(/extends Icon/g, 'extends JingeMaterial.Icon');
    fs.writeFileSync(path.join(iconDstDir, f), cnt);
  });
}

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats.toString({
    colors: false,
    hash: false,
    modules: false,
    chunks: false,
    entrypoints: false
  }));
});
