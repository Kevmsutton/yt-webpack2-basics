let path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  //entry point - where to start
  entry: './src/js/app.js',
  // output what to create
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  // modules what should you do with each individual file you load
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // what should you do with the overall code... for e.g. minify or outsource css
  optimization: { minimize: true, minimizer: [new TerserPlugin()] }
};
