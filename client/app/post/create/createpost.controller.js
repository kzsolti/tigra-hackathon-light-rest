'use strict';

angular.module('tlogApp')
  .controller('CreatePostCtrl', function ($scope, $location, Auth, Post) {

    $scope.ckOptions = {
      language: 'en',
      extraPlugins: 'divarea'
    };

    $scope.newPost = {};

    $scope.publish = function () {
      $scope.newPost.author = Auth.getCurrentUser()._id;
      Post.save({}, $scope.newPost,
        function (result) {
          $location.path('/post/' + result._id);
        }, function (error) {
          console.error(error);
        }
      );
    };

  });
