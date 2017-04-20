import marked from "marked";
import Prism from "prismjs";
import "./prismConfiguration";

/**
* Configure marked library to use highlightJS
*/
marked.setOptions({
  highlight(code, lang) {
    const langAux = lang || 'bash';
    return Prism.highlight(code, Prism.languages[langAux]);
  },
  langPrefix: "language-"
});
