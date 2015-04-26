'use strict';

angular.module('tlogApp')
  .service('Post', function ($resource) {
    return $resource('/api/posts/:id', {id: '@id'}, {
      count: {
        method: 'GET',
        isArray: false,
        params: {
          count: true
        }
      }
    });
  })
  .service('Comment', function($resource) {
    return $resource('/api/posts/:postid/comments/:id', {postid: '@postid', id: '@id'});
  });
