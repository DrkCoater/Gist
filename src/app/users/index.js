import angular from 'angular';
import uirouter from 'angular-ui-router';
import localStorageServiceProvider from 'angular-local-storage';
import routing from './users.routes';
import UserService from './services/user.service';
import UsersController from './users.controller';
import searchBox from './searchbox/searchbox.directive';
import infoPanel from './infopanel/infopanel.directive';

export default angular.module('app.users', [uirouter, localStorageServiceProvider, UserService])
  .config((localStorageServiceProvider) => {
    localStorageServiceProvider
      .setPrefix('gist')
  })
  .config(routing)
  .controller('UsersController', UsersController)
  .directive('searchBox', searchBox)
  .directive('infoPanel', infoPanel)
  .name;
