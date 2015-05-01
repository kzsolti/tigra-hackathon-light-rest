'use strict';

angular.module('tlogApp')
  .controller('PostCtrl', function ($scope, $stateParams, Auth, Post, Comment) {

    $scope.postId = $stateParams.id;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.commentToPost = undefined;

    $scope.isOwnComment = function (comment) {
      return comment.author._id === Auth.getCurrentUser()._id;
    };

    Post.get({id: $scope.postId}, function(result) {
      $scope.post = result;
    });

    $scope.queryComments = function() {
      Comment.query({postid: $scope.postId}, function(result) {
        $scope.comments = result;
      });
    };

    $scope.queryComments();

    $scope.postComment = function() {
      Comment.save({postid: $scope.postId}, {content: $scope.commentToPost, author: Auth.getCurrentUser()._id},
        function() {
          $scope.queryComments();
          delete $scope.commentToPost;
        }, function(error) {
          console.error(error);
        }
      );
    };

    $scope.saveComment = function (comment) {
      Comment.update({postid: $scope.postId, id: comment._id}, {content: comment.content},
        function () {
          $scope.queryComments();
        }, function (error) {
          console.error(error);
          window.alert(error);
        }
      );
    };
  });
