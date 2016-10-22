
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ChapterList = require('./chapterList');
var Search = require('./search');
var PageChange = require('./pageChange');

var source="https://www.mangaeden.com/api/list/0/";
var pageCount=0;

var Main = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      search:''
    }
  },

  componentDidMount: function() {
    $('.text').focus();
    var pUrl=source+"?p=0&l=25";
    this.serverRequest =
      $.ajax(pUrl)
        .then(function(result) {
            this.setState({
              data:result.manga
            });
        }.bind(this))
  },

  componentDidUpdate: function() {
    var pUrl=source+"?p="+pageCount+"&l=25";
    var cUrl="https://www.mangaeden.com/api/manga/";

    this.serverRequest =
      $.ajax(pUrl)
        .then(function(result) {
            this.setState({
              data:result.manga
            });
        }.bind(this))
  },

  handleClick:function(e){
    if (pageCount>=0) {
      if (e.target.value=="next") {
        pageCount=pageCount+1;
      }
      if (e.target.value=="previous") {
        pageCount=pageCount-1;
      }
    }
    if(pageCount<0) {
      pageCount=0;
    }
  },

  findManga:function() {
    return this.state.search;
  },

  onChange:function(e){
    this.setState({search:e.target.value});
  },

  render:function(){
    var url= "https://cdn.mangaeden.com/mangasimg/98x/";
    var Data=this.state.data;
    var text;

    Data=this.state.data.filter(function(val){
      return val.t.match(this.state.search);
    }.bind(this));

    return(
      <div className="challenge">
        <Search value={this.state.search} onChange={this.onChange} />
        <br/><br/>
        <PageChange handleClick={this.handleClick} />
        <br/>
        <div className="list-container">
          {Data.map(function(val,k){
              if (val.im!=null) {
                  return (
                      <div className="item">
                        <Link to={"chapterList/" + val.i} title={val.t}>
                          <img src={url+val.im} key={k} />
                        </Link>
                        <hr/>
                        <p className="title">{val.t}</p>
                      </div>
                  );
              }
          })
          }
        </div>
      </div>
    );
  }
});

module.exports=Main;
