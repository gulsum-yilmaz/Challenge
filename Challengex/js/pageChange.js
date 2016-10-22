
var React = require('react');
var ReactDOM = require('react-dom');

var PageChange = React.createClass({
  render: function() {
    return (
      <div className="next">
        <button onMouseDown={this.props.handleClick} value="previous" className="button">Previous</button>
        <button onMouseDown={this.props.handleClick} value="next" className="button">Next</button>
      </div>
    )
  }
});

module.exports=PageChange;
