var Dispatcher = require('../Dispatcher');

var Api = require('../api/Api');

var PullRequestDashboardStore = {

  pullRequestsResponse: {
    pullRequests: []
  },

  timer: 60,

  initialize: function() {
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

  handlePullRequestsResponse: function(data) {
    this.pullRequestsResponse = data.response;
    this.emitChange();
  },

  getPullRequests: function() {
    return this.pullRequestsResponse.pullRequests;
  },

  getTimer: function() {
    return this.timer;
  },

  emitChange: function() {
    Dispatcher.dispatch('change:pull-request-dashboard-store');
  }
};

module.exports = PullRequestDashboardStore;
