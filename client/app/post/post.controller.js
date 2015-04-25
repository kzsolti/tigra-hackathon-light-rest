'use strict';

angular.module('tlogApp')
  .controller('PostCtrl', function ($scope, $stateParams, $http, $resource, Post, Comment, User) {

    Post.get({id: $stateParams.id}, function(result) {
      $scope.post = result;
    });

    User.get(function(result) {
      $scope.userId = result._id;
    });

    $scope.queryComments = function() {
      Comment.query({postid: $stateParams.id}, function(result) {
        $scope.comments = result;
      });
    }

    $scope.queryComments();

    $scope.post_comment = function() {
      Comment.save({postid: $stateParams.id}, {content: $scope.commentToPost, author: $scope.userId}, function(success) {
        console.log("success");
        $scope.queryComments();
        delete $scope.commentToPost;
      }, function(error) {
        console.error(error);
      });
    };
  });
