'use strict';
angular.module('tlogApp', ['ngResource'])
  .controller('PostsCtrl', function ($scope, $resource) {
        var posts  = $resource('/api/posts/');
        
       
    $scope.posts = posts;
  });
