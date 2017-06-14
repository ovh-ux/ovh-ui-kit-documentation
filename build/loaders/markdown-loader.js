import marked from 'marked'
import utils from 'loader-utils'
import Renderer from './markdown-renderer'

module.exports = function loader (data) {
  this.cacheable && this.cacheable()
  var query = utils.getOptions(this) || {}
  const options = Object.assign({
    renderer: new Renderer(),
    gfm: true,
    tables: true
  }, query)
  marked.setOptions(options)
  return marked(data)
}
