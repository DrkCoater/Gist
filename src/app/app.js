import 'jquery/jquery';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import usersModule from './users';
import routing from './app.config';
// styles
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.author = 'Jeremy Lu';
    this.year = 2017;
  }
}

export default angular.module('app', [uirouter, usersModule])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(routing)
  .name;
