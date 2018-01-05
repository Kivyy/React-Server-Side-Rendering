const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building a bundle for nodeJS, rather than browser
  target: 'node',
  // tell webpack the root file of our server apps
  entry: './src/index.js',
  //tell weback where to put the output file that is generated from webacpk
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
  }
};

module.exports = merge(baseConfig,config);
