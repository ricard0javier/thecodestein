import marked from 'marked';
import Prism from 'prismjs';

// Configure marked library to use highlightJS
marked.setOptions({
  highlight(code, lang) {
    return Prism.highlight(code, Prism.languages[lang]);
  },
  langPrefix: "language-"
});