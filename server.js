var express = require('express');
var octonode = require('octonode');
var jsonfile = require('jsonfile');
var app = express();

// load config file
var config = jsonfile.readFileSync('./config.json');

/**
 * Serve the web folder as static assets
 */
app.use(express.static('web'));

/**
 * /api/pull-requests route
 */
app.get('/api/pull-requests', function (req, res) {
  var github = octonode.client(config.githubToken);

  var repo = github.repo(config.githubUser + '/' + config.githubRepo);

  repo.prs(function(err, pulls, headers) {
    if (err) {
      console.log(err);
      return;
    }
    var response = {
      meta: {
        pullRequestCount: pulls.length,
        users: {}
      },
      pullRequests: []
    };
    var statusesReturned = 0;

    if (pulls.length === 0) {
      res.send(response);
      return;
    }

    pulls.forEach(function(pull) {
      var item = {
        number: pull.number,
        title: pull.title,
        user: {
          login: pull.user.login,
          avatar_url: pull.user.avatar_url
        },
        headSha: pull.head.sha
      };

      if (!response.meta.users[pull.user.login]) {
        response.meta.users[pull.user.login] = {
          login: pull.user.login,
          avatar_url: pull.user.avatar_url,
          count: 0
        };
      }

      response.meta.users[pull.user.login].count++;

      repo.statuses(pull.head.sha, function(err, statuses, headers) {
        if (statuses.length > 0) {
          item.status = statuses[0].state;
        }

        statusesReturned++;
        if (statusesReturned === pulls.length) {
          res.send(response);
        }
      });

      response.pullRequests.push(item);
    });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Pull request dashboard listening at http://%s:%s', host, port);
});