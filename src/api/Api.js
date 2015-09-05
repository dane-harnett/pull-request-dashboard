var jQuery = require('jquery');
var Dispatcher = require('../Dispatcher');
var ApiActions = require('./ApiActions');

var Api = {
  requestPullRequests: function(settings) {
    jQuery.ajax({
      url: '/api/pull-requests',
      dataType: 'json',
      success: function(response) {
        ApiActions.responsePullRequests({
          request: settings,
          response: response
        });
      }
    });
  }
};

module.exports = Api;