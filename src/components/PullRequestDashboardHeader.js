var React = require('react');

var PullRequestDashboardHeader = React.createClass({
  render: function() {
    return <h1>Pull Request Dashboard ({this.props.timer})</h1>;
  }
});

module.exports = PullRequestDashboardHeader;
