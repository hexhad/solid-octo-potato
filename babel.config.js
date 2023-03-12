// babel.config.js
module.exports = {
    presets: ['@babel/env'],
    plugins: [
      [
        "@babel/plugin-proposal-pipeline-operator", 
        {
          proposal:'minimal',
        },
      ],
    ],
  };