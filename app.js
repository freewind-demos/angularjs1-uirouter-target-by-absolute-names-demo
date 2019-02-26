const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('grandparent', {
    url: '/grandparent',
    templateUrl: './templates/grandparent.html'
  });

  $stateProvider.state('grandparent.parent', {
    url: '/parent',
    views: {
      head: {
        templateUrl: './templates/parent-head.html'
      },
      body: {
        templateUrl: './templates/parent-body.html'
      },
    }
  });

  $stateProvider.state('grandparent.parent.child', {
    url: '/child',
    views: {
      head: {
        templateUrl: './templates/child-head.html'
      },
      body: {
        templateUrl: './templates/child-body.html'
      },
    }
  });

  $stateProvider.state('grandparent.parent.child.grandchild', {
    url: '/grandchild',
    views: {
      '$default.body.head@': {
        templateUrl: './templates/grandchild.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/grandparent');

});

