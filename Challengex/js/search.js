
var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({
  render: function() {
    return (
      <div className="search-container">
        <span>Manga Title: </span>
        <input type="text" className="text" value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
  }
});

module.exports=Search;
