'use strict';

angular.module('tlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createpost', {
        url: '/post/new',
        templateUrl: 'app/post/create/createpost.html',
        controller: 'CreatePostCtrl',
        authenticate: true
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });
