const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log('setupProxy#################');
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:3002',
        changeOrigin: true,
      })
    );
  };

// module.exports = function(app) {
//     app.use(
//         createProxyMiddleware('/api', {
//             target: 'http://localhost:3002/',
//             changeOrigin: true
//         })
//     )
// }