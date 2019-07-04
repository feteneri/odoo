const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff2|woff|ttf|png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
  }
  if (argv.mode === 'production') {
  }
  return config;
};
