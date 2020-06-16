const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const {
  __r, addAsset,
  generateLoader
} = require('./_util');
const {
  buildAllThemes
} = require('./theme');
const getWebpackBuildMainConfig = require('./_webpack_site');

const webpackConfig = getWebpackBuildMainConfig();
webpackConfig.plugins.push({
  apply(compiler) {
    compiler.hooks.compilation.tap('JINGE-MATERIAL-BUILD', compilation => {
      compilation.hooks.processAssets.tap({
        name: 'JINGE-MATERIAL-BUILD',
        stage: compilation.constructor.PROCESS_ASSETS_STAGE_ADDITIONAL
      }, (assets) => {
        const themes = buildAllThemes();
        themes.forEach(theme => addAsset(assets, theme.name, theme.code));
      });
    });
  }
});
// webpackConfig.cache = {
//   type: 'filesystem'
// };
const compiler = Webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    children: !('NO_LOG' in process.env)
  },
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../site'),
  writeToDisk: 'WRITE_TO_DISK' in process.env,
  before: function(app, server) {
    app.get('/loader.js', function(req, res) {
      const mfs = compiler.outputFileSystem;
      generateLoader(mfs);
      res.send(mfs.readFileSync(
        __r('docs/loader.js'), 'utf-8'
      ));
    });
  }
});

server.listen(9000, '0.0.0.0');
