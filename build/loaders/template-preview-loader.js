import markdownLoader from './markdown-loader'

module.exports = function loader (data) {
  this.cacheable && this.cacheable()

  const html = markdownLoader.call(this, data)

  const matches = data.match(/```html:preview((.|\n|\r)+?)(?=```)/g)
  if (!matches) {
    return `module.exports = {
      template: ${JSON.stringify(html)}
    }`
  }

  const preview = matches.map((match) => {
    return match.replace('```html:preview', '')
  })
  .join('\n')

  return `module.exports = {
    template: ${JSON.stringify(html)},
    preview: ${JSON.stringify(preview)}
  }`
}
