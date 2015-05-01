'use strict';

describe('Controller: CreatePostCtrl', function () {

  // load the controller's module
  beforeEach(module('tlogApp'));

  var CreatePostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatePostCtrl = $controller('CreatePostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
