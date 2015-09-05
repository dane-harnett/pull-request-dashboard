var Dispatcher = require('../Dispatcher');

var ApiActions = {
  responsePullRequests: function(payload) {
    Dispatcher.dispatch('response:api:pull-requests', payload);
  }
};

module.exports = ApiActions;
