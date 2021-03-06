const path = require('path')

const nodeExternals = require('webpack-node-externals')

const common = require('@parabains-bot/webpack')

module.exports = {
  ...common,
  output: {
    path: path.resolve(__dirname, 'dist'),
    ...common.output,
  },
  externals: [nodeExternals()],
}
