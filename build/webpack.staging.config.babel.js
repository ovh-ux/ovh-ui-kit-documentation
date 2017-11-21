import merge from 'webpack-merge'
import distConfig from './webpack.dist.config.babel.js'

export default merge(distConfig, {
  resolve: {
    mainFields: ['module', 'main']
  }
})
