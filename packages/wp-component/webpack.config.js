const pkg = require('./package.json')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  devtool: 'source-map',
  devServer: {
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  }
}
