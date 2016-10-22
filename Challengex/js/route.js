
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./app');
var ChapterList = require('./chapterList');
var ChapterDetail = require('./chapterDetail');

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}></Route>
    <Route path = "chapterList/:id" component={ChapterList}></Route>
    <Route path = "chapterDetail/:id" component={ChapterDetail}></Route>
  </Router>
), document.getElementsByClassName('container')[0]);
