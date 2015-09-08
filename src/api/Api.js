import jQuery from 'jquery';
import Dispatcher from '../Dispatcher';
import ApiActions from './ApiActions';

var Api = {
  requestPullRequests(settings) {
    jQuery.ajax({
      url: '/api/pull-requests',
      dataType: 'json',
      success(response) {
        ApiActions.responsePullRequests({
          request: settings,
          response: response
        });
      }
    });
  }
};

module.exports = Api;