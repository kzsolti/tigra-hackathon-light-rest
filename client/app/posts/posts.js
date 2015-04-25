'use strict';

angular.module('tlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        templateUrl: 'app/posts/posts.html',
        controller: 'PostsCtrl'
      });
  });
