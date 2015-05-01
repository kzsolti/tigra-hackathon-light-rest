'use strict';

angular.module('tlogApp')
  .controller('PostCtrl', function ($scope, $stateParams, $http, $resource, Auth, Post, Comment) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.commentToPost = undefined;

    Post.get({id: $stateParams.id}, function(result) {
      $scope.post = result;
    });

    $scope.queryComments = function() {
      Comment.query({postid: $stateParams.id}, function(result) {
        $scope.comments = result;
      });
    };

    $scope.queryComments();

    $scope.postComment = function() {
      Comment.save({postid: $stateParams.id}, {content: $scope.commentToPost, author: Auth.getCurrentUser()._id},
        function() {
          $scope.queryComments();
          delete $scope.commentToPost;
        }, function(error) {
          console.error(error);
        }
      );
    };
  });
