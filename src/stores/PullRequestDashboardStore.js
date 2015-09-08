import Dispatcher from '../Dispatcher';
import Api from '../api/Api';

var PullRequestDashboardStore = {

  pullRequestsResponse: {
    pullRequests: []
  },

  timer: 60,

  initialize() {
    var self = this;

    Dispatcher.register('response:api:pull-requests', PullRequestDashboardStore.handlePullRequestsResponse, PullRequestDashboardStore);

    Api.requestPullRequests();

    // update pull requests every minute
    setInterval(function() {
      self.timer--;
      if (self.timer < 1) {
        Api.requestPullRequests();
        self.timer = 60;
      }
      self.emitChange();
    }, 1000);
  },

  handlePullRequestsResponse(data) {
    this.pullRequestsResponse = data.response;
    this.emitChange();
  },

  getPullRequests() {
    return this.pullRequestsResponse.pullRequests;
  },

  getTimer() {
    return this.timer;
  },

  emitChange() {
    Dispatcher.dispatch('change:pull-request-dashboard-store');
  }
};

module.exports = PullRequestDashboardStore;
