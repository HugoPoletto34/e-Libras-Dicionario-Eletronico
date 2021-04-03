const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
  path:'./.env'
})

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    /*if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }*/
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}
