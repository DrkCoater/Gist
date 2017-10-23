import users from './index';

describe('Controller: Users', function() {
  let $controller;

  beforeEach(angular.mock.module(users));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

});
