
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var ChapterDetail = require('./chapterDetail');

var ChapterList = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },

  componentDidMount: function() {
    this.serverRequest =
      $.ajax("https://www.mangaeden.com/api/manga/"+this.props.params.id+"/")
        .then(function(result) {
            this.setState({
              data:result.chapters
            });
        }.bind(this))
  },

  render:function(){
    return(
      <div className="challenge">
        <h1>CHAPTERS NUMBER</h1><br/>
        {this.state.data.reverse().map(function(val){
            return (
              <div>
                <Link to={"chapterDetail/" + val[3]}>Chapter - {val[2]}</Link>
                <br/>
              </div>
            );
          })
        }
      </div>
    );
  }
});

module.exports = ChapterList;
