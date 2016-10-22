
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Main = require('./app');

var ChapterDetail = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },

  componentDidMount: function() {
    this.serverRequest =
      $.ajax("https://www.mangaeden.com/api/chapter/"+this.props.params.id+"/")
        .then(function(result) {
            this.setState({
              data:result.images
            });
        }.bind(this))
  },

  render:function(){
    var url="http://cdn.mangaeden.com/mangasimg/";
    return(
      <div className="challenge">
          <h1>CHAPTERS IMAGES</h1><hr/>
          <Link >Previous</Link>
          {this.state.data.map(function(val){
                return (
                  <div>
                    <img src={url+val[1]} className="imgDetail"/>
                  </div>
                );
            })
          }
      </div>
    );
  }
});

module.exports=ChapterDetail;
