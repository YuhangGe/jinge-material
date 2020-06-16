const Webpack = require('webpack');
const execSync = require('child_process').execSync;
const getWebpackBuildMainConfig = require('./_webpack_site');
const {
  __r, generateLoader,
  addAsset,
  generateIndex,
  getPage404Content
} = require('./_util');
const {
  buildAllThemes
} = require('./theme');

execSync(`rm -rf ${__r('docs')}`);
execSync(`mkdir -p ${__r('docs/assets')}`);
execSync(`cp -r ${__r('site/assets')} ${__r('docs')}`);

const noCompress = 'NO_COMPRESS' in process.env;
const isProd = 'PROD' in process.env;

const webpackConfig = getWebpackBuildMainConfig(isProd, noCompress);

webpackConfig.plugins.push({
  apply(compiler) {
    compiler.hooks.compilation.tap('BUILD_SITE_PLUGIN', function(compilation) {
      compilation.hooks.processAssets.tap({
        name: 'BUILD_SITE_PLUGIN',
        stage: compilation.constructor.PROCESS_ASSETS_STAGE_ADDITIONAL
      }, (assets) => {
        const themes = buildAllThemes(isProd, noCompress);
        themes.forEach(theme => addAsset(assets, theme.name, theme.code));
        addAsset(assets, '.nojekyll', '');
        addAsset(assets, '404.html', getPage404Content(isProd, noCompress));
      });
    });
  }
});
const compiler = Webpack(webpackConfig);
compiler.run((err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  const needCompress = isProd && !noCompress;
  generateIndex(
    generateLoader(needCompress),
    needCompress
  );
  console.log(stats.toString({
    colors: false,
    hash: false,
    modules: false,
    chunks: false,
    entrypoints: false
  }));
});
