'use strict';

angular.module('tlogApp')
  .controller('PostCtrl', function ($scope, $stateParams, $http, $resource, Post) {

    Post.get({id: $stateParams.id}, function(result) {
      $scope.post = result;
    });

  });
