'use strict';
angular.module('tlogApp')
  .controller('PostsCtrl', function ($scope,  Post) {
        Post.query(function (result) {
        $scope.posts = result;
    }, function (error) {
      console.log(error);
    });
        
  });
