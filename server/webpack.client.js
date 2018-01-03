const path = require('path');

module.exports = {
  // tell webpack the root file of our server apps
  entry: './src/client/client.js',
  //tell weback where to put the output file that is generated from webacpk
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public')
  },

  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            // presets option to build file to satisfy browser version
            ['env', {targets: { browser: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}
