const { environment } = require('@rails/webpacker')

const webpack = require("webpack")

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    Rails: ['@rails/ujs']
  })
)

environment.plugins.append("Provide", new webpack.ProvidePlugin({
$: 'jquery',
jQuery: 'jquery',
Popper: ['popper.js', 'default']
}))

module.exports = environment
