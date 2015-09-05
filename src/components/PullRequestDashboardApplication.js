var React = require('react');
var Dispatcher = require('../Dispatcher');

var PullRequestDashboardStore = require('../stores/PullRequestDashboardStore');

var PullRequestDashboardHeader = require('./PullRequestDashboardHeader');
var PullRequestList = require('./PullRequestList');

var PullRequestDashboardApplication = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },
  getStateFromStore: function() {
    return {
      pullRequests: PullRequestDashboardStore.getPullRequests(),
      timer: PullRequestDashboardStore.getTimer()
    };
  },
  componentDidMount: function() {
    Dispatcher.register('change:pull-request-dashboard-store', this.onChange, this);
  },
  componentWillUnmount: function() {
    Dispatcher.unregister('change:pull-request-dashboard-store', this.onChange, this);
  },
  render: function() {
    return <div>
              <PullRequestDashboardHeader timer={this.state.timer} />
              <PullRequestList pullRequests={this.state.pullRequests} />
            </div>;
  },
  onChange: function() {
    this.setState(this.getStateFromStore());
  }
});

module.exports = PullRequestDashboardApplication;
