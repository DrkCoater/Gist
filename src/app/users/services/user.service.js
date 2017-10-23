import angular from 'angular';
import ngResource from 'angular-resource';

class UserService {
  constructor($resource) {
    this.URL_PREFIX = 'https://api.github.com'; // TODO: configuration
    this.User = $resource(
      '/users',
      {},
      {
        list: {
          url: this.URL_PREFIX + '/users',
          method: 'GET',
          isArray: true
        },
        search: {
          url: this.URL_PREFIX + '/search/users',
          method: 'GET',
          params: { q: 'john', order: 'desc', per_page: 10 },
          isArray: true,
          transformResponse: (data) => {
            const items = angular.fromJson(data).items;
            return items;
          }
        },
        get: {
          url: this.URL_PREFIX + '/user/:id',
          method: 'GET',
          isArray: false,
        }
      }
    );
  }

  user() {
    return this.User;
  }

}

UserService.$inject = ['$resource'];

export default angular.module('app.users.services', ['ngResource'])
  .service('UserService', UserService)
  .name;
