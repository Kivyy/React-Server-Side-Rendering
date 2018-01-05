module.exports = {
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
};
