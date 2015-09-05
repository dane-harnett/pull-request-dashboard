var React = require('react');

var PullRequestDashboardStore = require('./stores/PullRequestDashboardStore');
PullRequestDashboardStore.initialize();

var PullRequestDashboardApplication = require('./components/PullRequestDashboardApplication');

React.render(
  <PullRequestDashboardApplication />,
  document.getElementById('container')
);
