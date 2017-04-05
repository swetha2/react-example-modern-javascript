/**
 * Created by swetha on 5/4/17.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    proxy: {
        '/rest/*': 'http://localhost:9000/',
        '/rest/ws/stomp/*': 'http://localhost:8090'
    }
}).listen(9000, 'localhost', function (err) {
    if (err) console.log(err);
    console.log('Listening at localhost:8090');
});