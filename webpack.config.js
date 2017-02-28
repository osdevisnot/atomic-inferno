const path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: ['./src/app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: 'node_modules',
        loaders: ['ts-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  }
};
