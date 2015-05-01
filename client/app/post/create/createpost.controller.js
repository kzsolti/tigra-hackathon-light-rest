'use strict';

angular.module('tlogApp')
  .controller('CreatePostCtrl', function ($scope, Auth, Post) {

    $scope.ckOptions = {
      language: 'en',
      extraPlugins: 'divarea'
    };

    $scope.newPost = {};

  });
