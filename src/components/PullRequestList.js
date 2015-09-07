var React = require('react');

var PullRequest = require('./PullRequest');

var PullRequestList = React.createClass({
  render: function() {
    var pullRequestNodes = this.props.pullRequests.map(function(pullRequest, index) {
      return <PullRequest key={ index } value={ index } pullRequest={pullRequest} />;
    });

    return <ul className="pull-request-list">
            { pullRequestNodes }
          </ul>;
  }
});

module.exports = PullRequestList;
