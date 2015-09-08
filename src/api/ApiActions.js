import Dispatcher from '../Dispatcher';

var ApiActions = {
  responsePullRequests(payload) {
    Dispatcher.dispatch('response:api:pull-requests', payload);
  }
};

module.exports = ApiActions;
