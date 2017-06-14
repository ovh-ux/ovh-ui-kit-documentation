import marked from 'marked'
import highlight from 'highlightjs'

export default class extends marked.Renderer {
  constructor () {
    super()

    this.codeBlockUID = 0
  }

  heading (text, level, raw) {
    const id = raw.toLowerCase().replace(/[^\w]+/g, '-')
    return `
      <h${level} id="${id}" class="oui-header_${level}">${text}</h${level}>
    `
  }

  code (code, lang) {
    var highlightCode = code

    if (lang) {
      // If somebody write ```html:preview it will show the real code and
      // show a collapsible pre block.
      if (lang === 'html:preview') {
        highlightCode = highlight.highlight('html', code).value

        this.codeBlockUID += 1
        var scopeVariableName = `$markdown.code[${this.codeBlockUID}]`

        return `<div>${code}</div>
                <button type="button"
                        class="oui-button oui-button_secondary"
                        data-ng-click="${scopeVariableName} = !${scopeVariableName}">
                  Click to show the example
                </button>
                <pre class="oui-showcase__code" data-ng-show="${scopeVariableName}">${highlightCode}</pre>`
      } else {
        highlightCode = highlight.highlight(lang, code).value
      }
    }

    return `<pre class="oui-showcase__code">${highlightCode}</pre>`
  }

  table (header, body) {
    return `<table class="table table-striped">
              <thead>
                ${header}
              </thead>
              <tbody>
                ${body}
              </tbody>
            </table>`
  }
}
