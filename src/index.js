const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);

// Configure marked library to use highlightJS
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});
