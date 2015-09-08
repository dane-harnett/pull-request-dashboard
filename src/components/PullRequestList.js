import React from 'react';
import PullRequest from './PullRequest';

export default class PullRequestList extends React.Component {
  render() {
    var pullRequestNodes = this.props.pullRequests.map(function(pullRequest, index) {
      return <PullRequest key={ index } value={ index } pullRequest={pullRequest} />;
    });

    return <ul className="pull-request-list">
            { pullRequestNodes }
          </ul>;
  }
}
