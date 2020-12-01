const path = require('path');

module.exports = {
  entry: {
    main: './client/index.js',
    vendor: ['styled-components'],
  },
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      minChunks: Infinity,
      name: true
    },
    runtimeChunk: {
      name: 'vendor'
    }
  }
}; 
