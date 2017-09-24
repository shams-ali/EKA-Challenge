const paths = require('./config').paths;
const IS_PRODUCTION = require('./config').IS_PRODUCTION;

const PORT = process.env.PORT || 3000;
const API_SERVER_URL = process.env.API_SERVER_URL;

const devServer = {
  contentBase: IS_PRODUCTION ? paths.build : paths.source,
  historyApiFallback: true,
  port: PORT,
  compress: IS_PRODUCTION,
  inline: !IS_PRODUCTION,
  hot: !IS_PRODUCTION,
  host: '0.0.0.0',
  disableHostCheck: true, // To enable local network testing
  overlay: true,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: true,
  },
  proxy: {
    '/api/*': {
      target: API_SERVER_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
};

module.exports = {
  devServer,
};
