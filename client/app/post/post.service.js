'use strict';

angular.module('tlogApp')
  .service('Post', function ($resource) {
    return $resource('/api/posts/:id', {id: '@id'});
  }).service('Comment', function($resource) {
    return $resource('/api/posts/:postid/comments/:id', {postid: '@postid', id: '@id'});
  });
