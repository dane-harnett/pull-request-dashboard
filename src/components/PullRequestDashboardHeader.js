import React from 'react';

export default class PullRequestDashboardHeader extends React.Component {
  render() {
    return <h1>Pull Request Dashboard ({this.props.timer})</h1>;
  }
}
