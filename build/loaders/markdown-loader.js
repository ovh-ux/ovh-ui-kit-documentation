import marked from "marked";
import Renderer from "./markdown-renderer";
import utils from "loader-utils";

module.exports = function loader (data) {
    if (this.cacheable) {
        this.cacheable();
    }
    const query = utils.getOptions(this) || {};
    const options = Object.assign({
        renderer: new Renderer(),
        gfm: true,
        tables: true
    }, query);
    marked.setOptions(options);
    return marked(data);
};
