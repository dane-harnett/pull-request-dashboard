var React = require('react');

var PullRequestList = React.createClass({
  render: function() {
    var c = this.props.pullRequests.map(function(pullRequest, index) {
      return <li key={ index } value={ index } className={pullRequest.status}>
        <div className="header">
          <div>{pullRequest.number}</div>
        </div>
        <div className="body">
          <img className="user-avatar" src={pullRequest.user.avatar_url} />
          <div className="title">{pullRequest.title}</div>
        </div>
      </li>;
    });

    return <ul className="pull-request-list">
            { c }
          </ul>;
  }
});

module.exports = PullRequestList;
