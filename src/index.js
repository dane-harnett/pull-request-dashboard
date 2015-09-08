import React from 'react';
import PullRequestDashboardStore from './stores/PullRequestDashboardStore';
import PullRequestDashboardApplication from './components/PullRequestDashboardApplication';

PullRequestDashboardStore.initialize();

React.render(
  <PullRequestDashboardApplication />,
  document.getElementById('container')
);
