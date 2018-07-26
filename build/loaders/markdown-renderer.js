import marked from 'marked'
import highlight from 'highlightjs'
import cheerio from 'cheerio'

export default class extends marked.Renderer {
    constructor() {
        super()

        this.codeBlockUID = 0
    }

    heading(text, level, raw) {
        const id = raw.toLowerCase().replace(/[^\w]+/g, '-')
        return `
      <h${level} id="${id}" class="oui-header_${level}">${text}</h${level}>
    `
    }

    // Removes each element that follow those rules:
    // - Removes every element and its children with oui-doc-preview-only class on it
    // - Removes only the element with oui-doc-preview-only-keep-children class on it
    _filterHtmlElementFromCode(code) {
        const $ = cheerio.load(code, {
            decodeEntities: false
        })

        $('.oui-doc-preview-only').remove()
        $('.oui-doc-preview-only-keep-children').replaceWith(function () {
            return $(this).html()
        })

        // HACK: Known issue on Cheerio and it is not cleared if it will be fixed.
        // `.replace(/=""/g, '')`
        // https://github.com/cheeriojs/cheerio/issues/1032
        return $('body').html().replace(/=""/g, '')
    }

    code(code, lang) {
        var highlightCode = code

        if (lang) {
            // If somebody write ```html:preview it will show the real code and
            // show a collapsible pre block.
            if (lang === 'html:preview') {
                highlightCode = highlight.highlight('html', this._filterHtmlElementFromCode(code)).value

                this.codeBlockUID += 1
                var scopeVariableName = `$markdown.code[${this.codeBlockUID}]`

                return `<div class="oui-doc-preview">${code}</div>
                <button type="button" class="oui-button oui-button_secondary"
                        ng-click="${scopeVariableName} = !${scopeVariableName}">
                  Click to show the example
                </button>
                <div class="oui-showcase__code"
                     ng-show="${scopeVariableName}">
                    <pre ng-non-bindable>${highlightCode}</pre>
                </div>`
            } else {
                highlightCode = highlight.highlight(lang, code).value
            }
        }

        return `<pre class="oui-showcase__code">${highlightCode}</pre>`
    }

    table(header, body) {
        return `<table class="oui-datagrid">
            <thead class="oui-datagrid__headers">${header}</thead>
            <tbody>${body}</tbody>
        </table>`;
    }

    tablerow(content) {
        return `<tr class="oui-datagrid__row">${content}</tr>`;
    }

    tablecell(content, flag) {
        if (flag.header) {
            return `<th class="oui-datagrid__header">${content}</th>`;
        } else {
            return `<td class="oui-datagrid__cell">${content}</td>`;
        }
    }
}
