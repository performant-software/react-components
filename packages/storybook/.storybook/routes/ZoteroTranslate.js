// @flow

const { createProxyMiddleware } = require('http-proxy-middleware');

const addRoutes = (router) => {
  router.use('/translate', createProxyMiddleware({
    target: process.env.TRANSLATE_URL,
    changeOrigin: true,
    pathRewrite: { '^/translate' : '' }
  }));
};

module.exports = {
  addRoutes
};
