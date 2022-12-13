import path from 'path';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getAbsolutePath = (pathDir) => path.resolve(__dirname, pathDir);

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;

  return {
    mode: 'development', entry: {
      main: './src/index.js',
    }, output: {
      filename: 'bundle.[hash].js',
    }, resolve: {
      extensions: ['js', 'jsx', 'json'], alias: {
        '@components': getAbsolutePath('src/components/'),
        '@contexts': getAbsolutePath('src/contexts/'),
        '@hooks': getAbsolutePath('src/hooks/'),
        '@pages': getAbsolutePath('src/pages/'),
      },
    }, module: {
      rules: [{
        test: /\.css$/i,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
      }, // style-loader, css-loader 구성
        {
          test: /\.css$/i, exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
          use: ['style-loader', 'css-loader'],
        }, // CSS Module ([filename].module.css)
        {
          test: /\.module\.css$/i, use: ['style-loader', {
            loader: 'css-loader', options: {
              modules: true,
            },
          }],
        }, {
          test: /\.jsx?$/i, exclude: /node_modules/, use: [{
            loader: 'babel-loader', options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProd ? 'production' : 'development',
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          }],
        }],
    }, plugins: [new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    })],
  };
};