import React from 'react';

export default class PullRequest extends React.Component {
  render() {
    return <li className={ this.props.pullRequest.status }>
      <div className="header">
        <div>{ this.props.pullRequest.number }</div>
      </div>
      <div className="body">
        <img className="user-avatar" src={ this.props.pullRequest.user.avatar_url } />
        <div className="title">{ this.props.pullRequest.title }</div>
      </div>
    </li>;
  }
}
