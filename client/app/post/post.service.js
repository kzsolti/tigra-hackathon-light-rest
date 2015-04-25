'use strict';

angular.module('tlogApp')
  .service('Post', function ($resource) {
    return $resource('/api/posts/:id', {id: '@_id'});
  });
