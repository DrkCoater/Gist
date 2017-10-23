import './users.controller';

export default function routes($stateProvider) {
  $stateProvider
    .state({
      name: 'users',
      url: '/',
      controller: 'UsersController',
      controllerAs: 'users',
      template: require('./users.html')
    })
    .state({
      name: 'user_info',
      url: '/:userid',
      controller: 'UsersController',
      controllerAs: 'users',
      template: require('./users.html')
    })
};

routes.$inject = ['$stateProvider'];
