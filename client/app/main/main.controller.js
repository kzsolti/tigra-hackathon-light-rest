'use strict';

angular.module('tlogApp')
  .controller('MainCtrl', function ($scope, Post) {

    $scope.currentPage = 1;

    Post.count(function (result) {
      $scope.totalItems = result.postCount;
    }, function (error) {
      console.log(error);
    });

    Post.query(function (result) {
      $scope.posts = result;
    }, function (error) {
      console.log(error);
    });

  });
