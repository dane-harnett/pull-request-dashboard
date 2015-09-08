import React from 'react';
import Dispatcher from '../Dispatcher';
import PullRequestDashboardStore from '../stores/PullRequestDashboardStore';
import PullRequestDashboardHeader from './PullRequestDashboardHeader';
import PullRequestList from './PullRequestList';

export default class PullRequestDashboardApplication extends React.Component {
  constructor() {
    super();
    this.state = this.getStateFromStore();
  }
  getStateFromStore() {
    return {
      pullRequests: PullRequestDashboardStore.getPullRequests(),
      timer: PullRequestDashboardStore.getTimer()
    };
  }
  componentDidMount() {
    Dispatcher.register('change:pull-request-dashboard-store', this.onChange, this);
  }
  componentWillUnmount() {
    Dispatcher.unregister('change:pull-request-dashboard-store', this.onChange, this);
  }
  render() {
    return <div>
              <PullRequestDashboardHeader timer={this.state.timer} />
              <PullRequestList pullRequests={this.state.pullRequests} />
            </div>;
  }
  onChange() {
    this.setState(this.getStateFromStore());
  }
}
