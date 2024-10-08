const path = require("path");

module.exports = {
    entry: "./public/back_end/api/index.cjs",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
      },
      mode: 'development'
}