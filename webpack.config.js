const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
   plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // <-- Assurez-vous que ce chemin pointe vers votre fichier HTML SOURCE
      filename: 'index.html',   // <-- Nom du fichier HTML de sortie dans 'dist'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};